import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';

const distDir = join(process.cwd(), 'dist');
const siteUrl = 'https://portfolio-7j9.pages.dev';
const failures = [];

const pages = [
  {
    file: 'en/index.html',
    lang: 'en',
    canonical: `${siteUrl}/en/`,
    alternate: `${siteUrl}/vi/`,
    schemaType: 'ProfilePage',
  },
  {
    file: 'vi/index.html',
    lang: 'vi',
    canonical: `${siteUrl}/vi/`,
    alternate: `${siteUrl}/en/`,
    schemaType: 'ProfilePage',
  },
  {
    file: 'en/projects/index.html',
    lang: 'en',
    canonical: `${siteUrl}/en/projects/`,
    alternate: `${siteUrl}/vi/projects/`,
    schemaType: 'CollectionPage',
  },
  {
    file: 'vi/projects/index.html',
    lang: 'vi',
    canonical: `${siteUrl}/vi/projects/`,
    alternate: `${siteUrl}/en/projects/`,
    schemaType: 'CollectionPage',
  },
];

const readDistFile = (relativePath) => readFileSync(join(distDir, relativePath), 'utf8');
const decodeHtml = (value) =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');

const getTagAttribute = (html, tagPattern, attribute) => {
  const tag = html.match(tagPattern)?.[0];
  return tag?.match(new RegExp(`${attribute}="([^"]+)"`))?.[1];
};

const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();

for (const page of pages) {
  const html = readDistFile(page.file);
  const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '');
  const description = getTagAttribute(html, /<meta\b[^>]*name="description"[^>]*>/, 'content');
  const canonical = getTagAttribute(html, /<link\b[^>]*rel="canonical"[^>]*>/, 'href');
  const htmlLang = getTagAttribute(html, /<html\b[^>]*>/, 'lang');
  const robots = getTagAttribute(html, /<meta\b[^>]*name="robots"[^>]*>/, 'content');
  const openGraphUrl = getTagAttribute(html, /<meta\b(?=[^>]*property="og:url")[^>]*>/, 'content');
  const openGraphImage = getTagAttribute(
    html,
    /<meta\b(?=[^>]*property="og:image")[^>]*>/,
    'content'
  );
  const h1Count = html.match(/<h1\b/g)?.length ?? 0;
  const jsonLdScripts = [
    ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ];

  if (!title) failures.push(`${page.file}: missing <title>`);
  if (!description) failures.push(`${page.file}: missing meta description`);
  if (htmlLang !== page.lang) {
    failures.push(`${page.file}: html lang is "${htmlLang}", expected "${page.lang}"`);
  }
  if (!robots?.includes('index')) failures.push(`${page.file}: page is not explicitly indexable`);
  if (canonical !== page.canonical) {
    failures.push(`${page.file}: canonical is "${canonical}", expected "${page.canonical}"`);
  }
  if (openGraphUrl !== page.canonical) {
    failures.push(`${page.file}: Open Graph URL does not match the canonical URL`);
  }
  if (!openGraphImage?.startsWith(`${siteUrl}/og/og-`)) {
    failures.push(`${page.file}: Open Graph image must be the localized 1200x630 card`);
  }
  const ogWidth = getTagAttribute(
    html,
    /<meta\b(?=[^>]*property="og:image:width")[^>]*>/,
    'content'
  );
  const ogHeight = getTagAttribute(
    html,
    /<meta\b(?=[^>]*property="og:image:height")[^>]*>/,
    'content'
  );
  const twitterCard = getTagAttribute(html, /<meta\b[^>]*name="twitter:card"[^>]*>/, 'content');
  if (ogWidth !== '1200' || ogHeight !== '630') {
    failures.push(`${page.file}: Open Graph image dimensions must be 1200x630`);
  }
  if (twitterCard !== 'summary_large_image') {
    failures.push(`${page.file}: twitter:card must be summary_large_image`);
  }
  if (h1Count !== 1) failures.push(`${page.file}: expected one <h1>, found ${h1Count}`);
  if (/<meta\b[^>]*name="keywords"/.test(html)) {
    failures.push(`${page.file}: obsolete meta keywords tag is present`);
  }
  if (/href="\/(?:en|vi)(?:\/projects)?(?:["#?])/.test(html)) {
    failures.push(`${page.file}: contains an internal locale URL without a trailing slash`);
  }

  const expectedAlternates = {
    [page.lang]: page.canonical,
    [page.lang === 'en' ? 'vi' : 'en']: page.alternate,
    'x-default': page.lang === 'en' ? page.canonical : page.alternate,
  };

  for (const [hreflang, expectedUrl] of Object.entries(expectedAlternates)) {
    const linkPattern = new RegExp(
      `<link\\b(?=[^>]*rel="alternate")(?=[^>]*hreflang="${hreflang}")[^>]*>`
    );
    const alternateUrl = getTagAttribute(html, linkPattern, 'href');
    if (alternateUrl !== expectedUrl) {
      failures.push(
        `${page.file}: hreflang ${hreflang} is "${alternateUrl}", expected "${expectedUrl}"`
      );
    }
  }

  if (jsonLdScripts.length !== 1) {
    failures.push(`${page.file}: expected one JSON-LD graph, found ${jsonLdScripts.length}`);
  } else {
    try {
      const jsonLd = JSON.parse(jsonLdScripts[0][1]);
      const graphTypes = new Set(
        (jsonLd['@graph'] ?? []).flatMap((node) =>
          Array.isArray(node['@type']) ? node['@type'] : [node['@type']]
        )
      );

      for (const requiredType of ['WebSite', 'Person', page.schemaType]) {
        if (!graphTypes.has(requiredType)) {
          failures.push(`${page.file}: JSON-LD is missing ${requiredType}`);
        }
      }
      if (page.schemaType === 'CollectionPage' && !graphTypes.has('BreadcrumbList')) {
        failures.push(`${page.file}: JSON-LD is missing BreadcrumbList`);
      }
      if (JSON.stringify(jsonLd).includes('SearchAction')) {
        failures.push(`${page.file}: JSON-LD advertises a search feature that does not exist`);
      }
    } catch (error) {
      failures.push(`${page.file}: invalid JSON-LD (${error.message})`);
    }
  }

  if (titles.has(title)) failures.push(`${page.file}: duplicate title "${title}"`);
  if (descriptions.has(description)) {
    failures.push(`${page.file}: duplicate meta description`);
  }
  if (canonicals.has(canonical)) failures.push(`${page.file}: duplicate canonical "${canonical}"`);

  titles.add(title);
  descriptions.add(description);
  canonicals.add(canonical);
}

const sitemapIndex = readDistFile('sitemap-index.xml');
const sitemap = readDistFile('sitemap-0.xml');
const robots = readDistFile('robots.txt');
const redirects = readDistFile('_redirects');

if (!sitemapIndex.includes(`<loc>${siteUrl}/sitemap-0.xml</loc>`)) {
  failures.push('sitemap-index.xml: missing sitemap-0.xml');
}
for (const page of pages) {
  if (!sitemap.includes(`<loc>${page.canonical}</loc>`)) {
    failures.push(`sitemap-0.xml: missing ${page.canonical}`);
  }
}
if (sitemap.includes(`<loc>${siteUrl}/</loc>`)) {
  failures.push('sitemap-0.xml: duplicate redirecting root URL must not be indexed');
}
if (sitemap.includes('/404')) {
  failures.push('sitemap-0.xml: 404 must not be indexed');
}
for (const page of pages) {
  const block = sitemap
    .split('<url>')
    .find((entry) => entry.includes(`<loc>${page.canonical}</loc>`));
  if (!block?.includes('<lastmod>')) {
    failures.push(`sitemap-0.xml: missing lastmod for ${page.canonical}`);
  }
}
const notFound = readDistFile('404.html');
if (!notFound.includes('noindex')) {
  failures.push('404.html: missing noindex');
}
if (notFound.includes('rel="canonical"') || notFound.includes('property="og:url"')) {
  failures.push('404.html: omit canonical and og:url');
}
if (!notFound.includes('href="/en/"') || !notFound.includes('href="/vi/projects/"')) {
  failures.push('404.html: missing links back to localized pages');
}
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap-index.xml`)) {
  failures.push('robots.txt: sitemap discovery URL is incorrect');
}
if (!redirects.split('\n').some((line) => line.trim() === '/ /en/ 301')) {
  failures.push('_redirects: root must permanently redirect to /en/');
}

if (failures.length > 0) {
  console.error('SEO validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`SEO validation passed for ${pages.length} canonical pages.`);
}
