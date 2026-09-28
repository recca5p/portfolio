# Site review

## Round 2 content update

The owner replaced the CV and sent a content brief. The downloadable file at `/cv/Tan-Phat-Vo-CV.pdf` is that PDF, unmodified. The visible headline is now **Senior Software Engineer - Applied AI & Backend** (Vietnamese: **Kỹ sư Phần mềm Senior - AI ứng dụng & Backend**). Years of experience are **6+**.

What the brief changed:

- ANZ is "ANZ Bank (via HCLTech Vietnam) - ANZ Plus, Backend Team". The entry covers PayID, PayTo, disputes, self-service, customer profile, IMT, Project Bifrost, agentic work with Claude Code, and AI-assisted tests. The ~30% figure is worded as a contribution. Coverage is 90%+ on the IMT gRPC contracts. Apple Pay, .NET-at-ANZ, and "Architected" are gone.
- ANZ Plus and Project Bifrost have their own project cards. Public bank figures sit next to source links and are labeled as the bank's numbers.
- Sacombank is a full-time Full-stack Developer role. The CRM app is Xamarin. The old 20 million, 508 million, 200,000 terminals, zero-downtime, Circular 78, and MAUI claims are gone. Bank scale uses the 2021 annual report (~10 million customers, ~122,000 POS/mPOS/QR points) with a source link.
- Bolloré (both), Apollo, Rozitek, IOGA.fr, Reveal BI, and the freight-quote search are labeled part-time / freelance. Personal metrics on the site are only 20x, more than 60%, 5x, ~30%, and 90%+.
- GitHub `https://github.com/recca5p` is in the hero, contact, footer, and `sameAs`.
- Open questions from the brief are comments in `src/components/Experience.astro`, not visible copy.

Round-1 layout, 404, sticky header, local QR codes, inlined CSS, and the type scale stay.

After this copy change, mobile Lighthouse 13.5.0 scored `/en/` 100/100/100/100, `/vi/` 99/100/100/100, `/en/projects/` 100 across the board, and `/vi/projects/` 100 across the board (performance, accessibility, best practices, SEO). `npm run check` passed, including html-validate. axe-core reported 0 violations. Playwright passed at 320, 360, 375, 768, and 1440.

## Round 1 remediation

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
- Recruiter content and credibility: the CV download, contact grid, and JSON-LD person fields from this pass stayed. Round 2 replaced the headline, the ANZ wording, and the Sacombank figures. See the section above.
- i18n: company names are `{en, vi}`. Vietnamese org names, metric direction, and the listed spelling fixes are in `vi.ts`, `experience.json`, and `projects.json`.

## Headline choice

Round 1 used Senior Backend Engineer because that was the ANZ title and the OG line at the time. Round 2 follows the new CV: the page, JSON-LD `jobTitle`, and both OG cards use Senior Software Engineer - Applied AI & Backend. The ANZ employment role on the experience entry stays Senior Backend Engineer.

## Left as they are

- `https://rozitek.com` answers HTTP 200 here with a certificate that covers that host. The reported TLS failure did not reproduce, so the link stayed.
- There is no hero image, so there is no 480w hero `srcset`. The stock rack photograph was removed on purpose.
- No public GitHub profile URL is on the CV or in the previous site copy, so none was added.
