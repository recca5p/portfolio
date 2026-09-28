import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';

const root = new URL('../dist/', import.meta.url);
const types = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
};

const headerRules = [];
try {
  let current = null;
  for (const line of readFileSync(new URL('../dist/_headers', import.meta.url), 'utf8').split(
    '\n'
  )) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    if (!line.startsWith(' ') && !line.startsWith('\t')) {
      current = { path: trimmed, headers: {} };
      headerRules.push(current);
    } else if (current) {
      const splitAt = trimmed.indexOf(':');
      if (splitAt > 0) {
        current.headers[trimmed.slice(0, splitAt).trim()] = trimmed.slice(splitAt + 1).trim();
      }
    }
  }
} catch {
  headerRules.length = 0;
}

if (headerRules.length === 0) {
  console.error('dist/_headers was not loaded');
  process.exit(1);
}

const matchesHeaderRule = (pattern, pathname) => {
  if (pattern === '/*') return true;
  if (pattern.endsWith('/*')) return pathname.startsWith(pattern.slice(0, -1));
  return pathname === pattern;
};

const headersFor = (pathname) => {
  const headers = {};
  for (const rule of headerRules) {
    if (matchesHeaderRule(rule.path, pathname)) Object.assign(headers, rule.headers);
  }
  return headers;
};

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1');
  let pathname = decodeURIComponent(url.pathname);
  const requestPath = pathname;
  if (pathname.endsWith('/')) pathname += 'index.html';
  const file = join(root.pathname, pathname);
  const headers = {
    ...headersFor(requestPath),
    'content-type': types[extname(pathname)] ?? 'application/octet-stream',
  };
  try {
    const body = readFileSync(file);
    response.writeHead(200, headers);
    response.end(body);
  } catch {
    const missing = readFileSync(join(root.pathname, '404.html'));
    response.writeHead(404, { ...headersFor(requestPath), 'content-type': 'text/html' });
    response.end(missing);
  }
});

await new Promise((resolve) => server.listen(4178, '127.0.0.1', resolve));

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  args: ['--no-sandbox', '--disable-gpu'],
});
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

const pages = ['/en/', '/vi/', '/en/projects/', '/vi/projects/'];
const widths = [320, 360, 375, 768, 1440];

const page = await browser.newPage();
page.on('console', (message) => {
  const text = message.text();
  if (message.type() === 'error' && /Content Security Policy|Refused to/.test(text)) {
    failures.push(`csp: ${text}`);
  }
});
const axeSource = readFileSync(
  new URL('../node_modules/axe-core/axe.min.js', import.meta.url),
  'utf8'
);

for (const path of pages) {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(`http://127.0.0.1:4178${path}`, { waitUntil: 'networkidle' });
    const metrics = await page.evaluate(() => {
      const row = document.querySelector('.header-row');
      const doc = document.documentElement;
      const smallSans = [];
      for (const el of document.querySelectorAll('body *')) {
        const text = [...el.childNodes].some(
          (node) => node.nodeType === 3 && node.textContent.trim()
        );
        if (!text) continue;
        const style = getComputedStyle(el);
        const size = parseFloat(style.fontSize);
        const mono = style.fontFamily.toLowerCase().includes('mono');
        if (!mono && size < 15) {
          smallSans.push(`${size}px ${el.tagName} ${el.textContent.trim().slice(0, 40)}`);
        }
      }
      return {
        overflow: doc.scrollWidth - doc.clientWidth,
        headerHeight: row ? Math.round(row.getBoundingClientRect().height) : 0,
        tiny: smallSans.slice(0, 8),
      };
    });
    check(metrics.overflow === 0, `${path} ${width}: horizontal overflow ${metrics.overflow}`);
    check(
      metrics.headerHeight > 0 && metrics.headerHeight <= 76,
      `${path} ${width}: header row height ${metrics.headerHeight}`
    );
    check(
      metrics.tiny.length === 0,
      `${path} ${width}: sub-15px sans text ${metrics.tiny.join(' | ')}`
    );
  }
}

await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://127.0.0.1:4178/en/', { waitUntil: 'networkidle' });
const sticky = await page.evaluate(async () => {
  const read = (selector) => {
    const el = document.querySelector(selector);
    return el ? getComputedStyle(el).position : 'missing';
  };
  window.scrollTo({ top: 3000, behavior: 'instant' });
  const headerTop = document.querySelector('header')?.getBoundingClientRect().top ?? 999;
  const scrollingElement =
    document.scrollingElement === document.documentElement ? 'document' : 'other';
  const stick = (selector) => {
    const el = document.querySelector(selector);
    const section = el?.closest('section');
    if (!el || !section) return null;
    section.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollBy({ top: 240, behavior: 'instant' });
    return Math.round(el.getBoundingClientRect().top);
  };
  return {
    headerTop,
    scrollingElement,
    experience: read('.experience-intro'),
    skills: read('.skills-intro'),
    experienceTop: stick('.experience-intro'),
    skillsTop: stick('.skills-intro'),
  };
});
check(Math.abs(sticky.headerTop) < 1, `header top after scroll is ${sticky.headerTop}`);
check(sticky.scrollingElement === 'document', `scrolling element is ${sticky.scrollingElement}`);
check(sticky.experience === 'sticky', `experience intro position ${sticky.experience}`);
check(sticky.skills === 'sticky', `skills intro position ${sticky.skills}`);
check(
  sticky.experienceTop !== null && sticky.experienceTop >= 70 && sticky.experienceTop <= 86,
  `experience intro stuck at ${sticky.experienceTop}`
);
check(
  sticky.skillsTop !== null && sticky.skillsTop >= 70 && sticky.skillsTop <= 86,
  `skills intro stuck at ${sticky.skillsTop}`
);

const layout = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('.projects-grid .project-card')];
  const tops = cards.map((card) => Math.round(card.getBoundingClientRect().top));
  const equal =
    cards.length === 3 &&
    tops.every((top) => Math.abs(top - tops[0]) <= 8) &&
    !document.querySelector('.project-card.featured');
  const email = document.querySelector('.contact-row a strong');
  const phone = [...document.querySelectorAll('.contact-row strong')].find((node) =>
    node.textContent.includes('+84')
  );
  const tags = [...document.querySelectorAll('.stack-line')]
    .map((node) => node.textContent)
    .join(' ');
  return {
    equal,
    tops,
    emailX: email ? Math.round(email.getBoundingClientRect().x) : null,
    phoneX: phone ? Math.round(phone.getBoundingClientRect().x) : null,
    tags,
    cv: [...document.querySelectorAll('a')].some(
      (link) => link.getAttribute('href') === '/cv/Tan-Phat-Vo-CV.pdf'
    ),
    heroImage: Boolean(document.querySelector('.hero-visual img')),
  };
});
check(layout.equal, `project cards are not an equal row: ${layout.tops.join(', ')}`);
const footerAlign = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('.projects-grid .project-card')];
  const bottoms = cards.map((card) => {
    const footer = card.querySelector('.project-footer');
    return footer ? Math.round(footer.getBoundingClientRect().bottom) : 0;
  });
  return bottoms;
});
check(
  footerAlign.length === 3 && footerAlign.every((bottom) => Math.abs(bottom - footerAlign[0]) <= 2),
  `project footers are not aligned: ${footerAlign.join(', ')}`
);
check(layout.emailX === layout.phoneX, `contact columns ${layout.emailX} vs ${layout.phoneX}`);
check(
  layout.tags.includes('Go') && layout.tags.includes('Kubernetes'),
  `visible stacks: ${layout.tags}`
);
check(layout.cv, 'missing CV download link');
check(!layout.heroImage, 'stock hero image is still rendered');

await page.goto('http://127.0.0.1:4178/en/#experience', { waitUntil: 'networkidle' });
const hashHref = await page.evaluate(
  () => document.querySelector('a[data-preserve-hash][hreflang="vi"]')?.hash ?? ''
);
check(hashHref === '#experience', `language switch hash ${hashHref}`);

await page.setViewportSize({ width: 375, height: 844 });
await page.goto('http://127.0.0.1:4178/vi/', { waitUntil: 'networkidle' });
const menu = page.locator('.mobile-menu');
const summary = menu.locator('summary');
await summary.click();
check(await menu.evaluate((el) => el.open), 'menu did not open');
await page.keyboard.press('Escape');
check(!(await menu.evaluate((el) => el.open)), 'menu stayed open after Escape');
check(await summary.evaluate((el) => el === document.activeElement), 'Escape did not return focus');
await summary.click();
await menu.locator('a').first().click();
check(!(await menu.evaluate((el) => el.open)), 'menu stayed open after link click');
await page.goto('http://127.0.0.1:4178/vi/', { waitUntil: 'networkidle' });
await summary.click();
await page.mouse.click(12, 780);
check(!(await menu.evaluate((el) => el.open)), 'menu stayed open after outside click');
const menuLabel = (await summary.innerText()).replace(/\s+/g, ' ');
check(menuLabel === 'Menu', `VI menu label is ${menuLabel}`);

const copy = await page.evaluate(() => document.body.innerText);
check(copy.includes('Tháng 5/2020') && copy.includes('Tháng 1/2022'), 'missing Sacombank dates');
check(!copy.includes('(2023)'), '2023 label is still present');
check(!copy.includes('MAUI'), 'MAUI claim is still present');
check(!copy.includes('Apple Pay'), 'Apple Pay claim is still present');
check(copy.includes('Xamarin'), 'missing Xamarin');
check(copy.includes('Tải CV'), 'missing Vietnamese CV label');
check(copy.includes('Hơn 6 năm'), 'missing 6+ years in Vietnamese');
await page.goto('http://127.0.0.1:4178/vi/projects/', { waitUntil: 'networkidle' });
const projectCopy = await page.evaluate(() => document.body.innerText);
check(projectCopy.includes('logistics nội bộ nhà máy'), 'missing intralogistics wording');
check(projectCopy.includes('Application Insights'), 'missing Application Insights title');
check(projectCopy.includes('song song công việc full-time'), 'missing freelance label');
check(!projectCopy.includes('MAUI'), 'MAUI claim is still on the project page');
check(!projectCopy.includes('200.000'), 'old POS terminal figure is still present');
check(!projectCopy.includes('508'), 'old transaction figure is still present');

await page.goto('http://127.0.0.1:4178/en/', { waitUntil: 'networkidle' });
const english = await page.evaluate(() => document.body.innerText);
check(english.includes('Download CV'), 'missing Download CV');
check(english.includes('recca5p'), 'missing GitHub profile');
check(
  english.includes('Senior Software Engineer') && english.includes('Applied AI & Backend'),
  'missing new headline'
);
check(english.includes('6+ years'), 'missing 6+ years');
check(english.includes('HCLTech'), 'missing HCLTech');
check(english.includes('making search 20x faster'), 'missing directional 20x label');
check((english.match(/20x/g) ?? []).length <= 2, '20x appears more than twice on the homepage');
check((english.match(/~30%/g) ?? []).length <= 2, '~30% appears more than twice on the homepage');
check((english.match(/90%\+/g) ?? []).length <= 2, '90%+ appears more than twice on the homepage');
check(english.includes('more than 60%'), 'missing directional 60% label');
check(english.includes('Azure AI Speech'), 'homepage is missing the IOGA pipeline');
check(
  !english.includes('making search 20x faster on large drilling datasets, and moved'),
  'eCompletion card still copies the experience metric'
);
check(english.includes('~30%'), 'missing ANZ time-to-market figure');
check(english.includes('Contributed to shorter time-to-market'), 'missing contributed wording');
check(english.includes('90%+'), 'missing IMT coverage figure');
check(!english.includes('Project Bifrost —'), 'Bifrost card is still on the homepage');
check(!english.includes('Architected'), 'still says Architected');
check(!english.includes('Apple Pay'), 'Apple Pay is still present');
check(!english.includes('Led the adoption'), 'still says Led the adoption');
check(!english.includes('development cycle time'), 'still says development cycle time');
check(!english.includes('MAUI'), 'MAUI is still present');
check(!english.includes('Circular 78'), 'Circular 78 is still present');
check(english.includes('Selected projects'), 'missing Selected projects');
check(!english.includes('This was a solo effort'), 'solo filler remains');
const jobTitle = await page.evaluate(() => {
  const raw = document.querySelector('script[type="application/ld+json"]')?.textContent ?? '{}';
  const data = JSON.parse(raw);
  const person = (data['@graph'] ?? []).find((node) => node['@type'] === 'Person');
  return person?.jobTitle ?? '';
});
check(jobTitle === 'Software Engineer', `JSON-LD jobTitle is ${jobTitle}`);
const linkDisplay = await page.evaluate(() => {
  const details = document.querySelector('.public-context');
  if (details) details.open = true;
  const link = document.querySelector('.public-context a');
  return link ? getComputedStyle(link).display : 'missing';
});
check(linkDisplay === 'inline', `public context link display is ${linkDisplay}`);
const fontsReady = await page.evaluate(async () => {
  await document.fonts.ready;
  return (
    document.fonts.check('16px "Manrope Variable"') &&
    document.fonts.check('16px "JetBrains Mono Variable"')
  );
});
check(fontsReady, 'self-hosted fonts did not load');
const copyResult = await page.evaluate(async () => {
  const button = document.querySelector('.copy-email');
  button.click();
  await new Promise((resolve) => window.setTimeout(resolve, 400));
  const status = document.querySelector('.copy-status')?.textContent ?? '';
  const selected = window.getSelection()?.toString() ?? '';
  return { status, selected };
});
check(
  copyResult.status === 'Copied' || copyResult.status.includes('Ctrl+C'),
  `copy email status ${copyResult.status}`
);

await page.goto('http://127.0.0.1:4178/missing-page/', { waitUntil: 'networkidle' });
const missingStatus = page.url();
const notFound = await page.evaluate(() => ({
  robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '',
  text: document.body.innerText,
}));
check(notFound.robots.includes('noindex'), `404 robots ${notFound.robots} at ${missingStatus}`);
check(
  notFound.text.includes('English home') && notFound.text.includes('Vietnamese projects'),
  '404 missing links'
);
check(notFound.text.includes('Không tìm thấy trang'), '404 missing Vietnamese copy');
const notFoundLang = await page.evaluate(() =>
  [...document.querySelectorAll('.language-switch a')].map((link) => link.getAttribute('href'))
);
check(
  notFoundLang.includes('/en/') &&
    notFoundLang.includes('/vi/') &&
    !notFoundLang.some((href) => href?.includes('404')),
  `404 language links ${notFoundLang.join(' ')}`
);

await page.goto('http://127.0.0.1:4178/en/#experience', { waitUntil: 'networkidle' });
const anchor = await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = 'auto';
  document.querySelector('#experience')?.scrollIntoView({ block: 'start', behavior: 'instant' });
  const header = document.querySelector('header')?.getBoundingClientRect();
  const section = document.querySelector('#experience')?.getBoundingClientRect();
  return {
    headerBottom: header ? Math.round(header.bottom) : null,
    sectionTop: section ? Math.round(section.top) : null,
  };
});
check(
  anchor.headerBottom !== null &&
    anchor.sectionTop !== null &&
    anchor.sectionTop >= anchor.headerBottom - 2 &&
    anchor.sectionTop <= anchor.headerBottom + 12,
  `experience anchor at ${anchor.sectionTop}px, header ends at ${anchor.headerBottom}px`
);

for (const path of pages) {
  await page.goto(`http://127.0.0.1:4178${path}`, { waitUntil: 'networkidle' });
  await page.addScriptTag({ content: axeSource });
  const result = await page.evaluate(async () =>
    window.axe.run(document, { resultTypes: ['violations'] })
  );
  for (const violation of result.violations) {
    failures.push(`${path} axe ${violation.id}: ${violation.help}`);
  }
}

await browser.close();
server.close();

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}
console.log('Review assertions passed.');
