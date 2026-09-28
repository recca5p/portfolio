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

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1');
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith('/')) pathname += 'index.html';
  const file = join(root.pathname, pathname);
  try {
    const body = readFileSync(file);
    response.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
    response.end(body);
  } catch {
    const missing = readFileSync(join(root.pathname, '404.html'));
    response.writeHead(404, { 'content-type': 'text/html' });
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
  sticky.experienceTop !== null && sticky.experienceTop >= 80 && sticky.experienceTop <= 100,
  `experience intro stuck at ${sticky.experienceTop}`
);
check(
  sticky.skillsTop !== null && sticky.skillsTop >= 80 && sticky.skillsTop <= 100,
  `skills intro stuck at ${sticky.skillsTop}`
);

const layout = await page.evaluate(() => {
  const featured = document.querySelector('.project-card.featured');
  const description = featured?.querySelector('.project-description');
  const footer = featured?.querySelector('.project-footer');
  const gap =
    description && footer
      ? Math.round(footer.getBoundingClientRect().top - description.getBoundingClientRect().bottom)
      : null;
  const email = document.querySelector('.contact-row a strong');
  const phone = [...document.querySelectorAll('.contact-row strong')].find((node) =>
    node.textContent.includes('+84')
  );
  const tags = [...document.querySelectorAll('.stack-line')]
    .map((node) => node.textContent)
    .join(' ');
  return {
    gap,
    emailX: email ? Math.round(email.getBoundingClientRect().x) : null,
    phoneX: phone ? Math.round(phone.getBoundingClientRect().x) : null,
    tags,
    cv: [...document.querySelectorAll('a')].some(
      (link) => link.getAttribute('href') === '/cv/Tan-Phat-Vo-CV.pdf'
    ),
    heroImage: Boolean(document.querySelector('.hero-visual img')),
  };
});
check(layout.gap !== null && layout.gap < 80, `featured card gap is ${layout.gap}px`);
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
check(projectCopy.includes('Bán thời gian'), 'missing freelance label');
check(!projectCopy.includes('MAUI'), 'MAUI claim is still on the project page');
check(!projectCopy.includes('200.000'), 'old POS terminal figure is still present');
check(!projectCopy.includes('508'), 'old transaction figure is still present');

await page.goto('http://127.0.0.1:4178/en/', { waitUntil: 'networkidle' });
const english = await page.evaluate(() => document.body.innerText);
check(english.includes('Download CV'), 'missing Download CV');
check(english.includes('recca5p'), 'missing GitHub profile');
check(english.includes('Senior Software Engineer - Applied AI & Backend'), 'missing new headline');
check(english.includes('6+ years'), 'missing 6+ years');
check(english.includes('HCLTech'), 'missing HCLTech');
check(english.includes('20x faster document search'), 'missing directional 20x label');
check(english.includes('more than 60% lower observability cost'), 'missing directional 60% label');
check(english.includes('~30% reduction in time-to-market'), 'missing ANZ time-to-market wording');
check(english.includes('contributed to a ~30%'), 'missing contributed wording');
check(!english.includes('Architected'), 'still says Architected');
check(!english.includes('Apple Pay'), 'Apple Pay is still present');
check(!english.includes('Led the adoption'), 'still says Led the adoption');
check(!english.includes('development cycle time'), 'still says development cycle time');
check(!english.includes('MAUI'), 'MAUI is still present');
check(!english.includes('Circular 78'), 'Circular 78 is still present');
check(english.includes('Selected projects'), 'missing Selected projects');
check(!english.includes('This was a solo effort'), 'solo filler remains');

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
