# Site review, round 1 remediation

The independent review of commit `263a79e` scored the site about 67/100, with every category below 90. This file records what changed and what this build measured. It is not a second independent score.

Lab run: production `dist/` on Node, Chrome, Lighthouse 13.5.0 mobile, axe-core 4.13.0, html-validate, and `scripts/verify-review.mjs`. `npm run check` passed (Astro check, ESLint, Prettier, build, SEO check, html-validate).

## Measured

| Page            | Performance | Accessibility | Best practices | SEO | FCP  | LCP  | CLS | TBT |
| --------------- | ----------: | ------------: | -------------: | --: | ---- | ---- | --- | --- |
| `/en/`          |         100 |           100 |            100 | 100 | 1.4s | 1.7s | 0   | 0ms |
| `/vi/`          |          99 |           100 |            100 | 100 | 1.7s | 2.0s | 0   | 0ms |
| `/en/projects/` |         100 |           100 |            100 | 100 | 1.2s | 1.6s | 0   | 0ms |
| `/vi/projects/` |          99 |           100 |            100 | 100 | 1.4s | 1.8s | 0   | 0ms |

Vietnamese is one point under English because that page also preloads the Vietnamese Manrope subset. That preload is the glyphs the page needs.

Playwright checked `/en/`, `/vi/`, `/en/projects/`, and `/vi/projects/` at 320, 360, 375, 768, and 1440. No horizontal overflow. Header row stays at or under 76px. Sans text is at least 15px. After `scrollTo(0, 3000)` the header sits at top 0 and the scrolling element is the document. `.experience-intro` and `.skills-intro` stick at 88px. axe-core reported 0 violations on the four pages.

Lighthouse `cache-insight` fails against the local static server, which sends no cache headers. Cloudflare Pages caches those files in production. It did not pull any category under 97.

## What a strict reread should now see

- Technical: `overflow-x: clip` on `html` and `body`, `scroll-padding-top: 5.5rem`, a real `404.html`, one `src/data/profile.ts`, project ids, inlined CSS, and `.github/workflows/check.yml`.
- Performance: no render-blocking stylesheet, no hero photograph, no third-party QR host, font preload limited to the active locale subset.
- Accessibility: one language switch, distinct nav labels, menu closes on Escape (focus returns to the summary), on a link, and on an outside click. Contrast pairs from the previous scorecard still hold (`#a6b2b0` on `#0b1014` is 8.75:1).
- SEO: project descriptions are built from tags on the page. `x-default` is the English URL of the current page. OG images are 1200x630. Twitter card is `summary_large_image`. Sitemap entries have `lastmod`. `/` redirects to `/en/` and is not canonical.
- UI and mobile: typographic hero, flat teal mark, six type tokens, featured project no longer stretches, contact rows share one grid, skill tags are visible before a section is opened.
- Recruiter content and credibility: headline is Senior Backend Engineer on the page, in JSON-LD, and on the OG card. The CV is published unmodified at `/cv/Tan-Phat-Vo-CV.pdf`. ANZ says architected and orchestrated, with about 30% time-to-market. Halliburton and Sacombank bullets follow the CV and keep the site-only figures already in the repo.
- i18n: company names are `{en, vi}`. Vietnamese org names, metric direction, and the listed spelling fixes are in `vi.ts`, `experience.json`, and `projects.json`.

## Headline choice

The CV profile line says Senior Software Engineer. The current ANZ title, and the required OG line, say Senior Backend Engineer. The site, JSON-LD `jobTitle`, and both OG cards use Senior Backend Engineer. Vietnamese visible copy stays "Kỹ sư Backend Senior".

## Left as they are

- `https://rozitek.com` answers HTTP 200 here with a certificate that covers that host. The reported TLS failure did not reproduce, so the link stayed.
- There is no hero image, so there is no 480w hero `srcset`. The stock rack photograph was removed on purpose.
- No public GitHub profile URL is on the CV or in the previous site copy, so none was added.
