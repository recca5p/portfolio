# Site review scorecard

Independent review of the finished bilingual portfolio after the design pass and the Node 26 / Astro 7.3 upgrade. Scores are 0-10. A 10 needs measured evidence and no material gap. Lab numbers are from one local Chrome run of the production preview (`astro preview` on Node 26.10.0), not a field CrUX dataset.

Reviewed with Impeccable critique and `impeccable detect`, the fetched Web Interface Guidelines, review-animations (Emil Kowalski standards), portfolio-case-study-writer, copywriting, copy-editing, and humanizer. Playwright checked `/en/`, `/vi/`, `/en/projects/`, and `/vi/projects/` at 375, 768, and 1440. Lighthouse and axe ran on the built HTML.

## Overall

**8.0 / 10.** The page tells a recruiter who Tan Phat Vo is, which role the page is for, and how to get in touch, in both languages, without inventing employers or metrics. Technical quality is high. The score stops at 8 because several project write-ups still have no measured result, and there is no CV or confirmed GitHub profile.

## Technical

| Category                        | Score | Evidence                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Performance and Core Web Vitals |     9 | English home: Lighthouse performance 99, FCP 1.1s, LCP 2.0s, CLS 0, TBT 0ms. Vietnamese home: performance 97, FCP 1.7s, LCP 2.4s, CLS 0, TBT 0ms. Project archive: performance 100, LCP 1.5s, CLS 0.                                                                                                                                                                                       |
| Accessibility                   |     9 | Lighthouse accessibility 100 on `/en/`, `/vi/`, and `/en/projects/`. axe-core 4.10.3 reported 0 violations on those three routes at 375px. Contrast of the documented tokens is in the table below. Skip link appears on Tab.                                                                                                                                                              |
| SEO and metadata                |     9 | Lighthouse SEO 100. `npm run seo:check` passed for 4 canonical pages. Each indexable page has one title, one description, one `h1`, a self-canonical, and reciprocal `en` / `vi` / `x-default` alternates. JSON-LD is `ProfilePage` + `Person` on homepages and `CollectionPage` + `BreadcrumbList` on the archives. `public/robots.txt` points at `sitemap-index.xml`. No `SearchAction`. |
| Code quality                    |     8 | `npm run check` passes: `astro check` (0 errors), ESLint, Prettier, production build, SEO check. Static output only. Unused translation keys remain: `home.tagline`, `skills.hoverHint`, and `proficiency` in `src/i18n/en.ts` and `src/i18n/vi.ts`.                                                                                                                                       |
| Responsiveness                  |     9 | No horizontal overflow at 375, 768, or 1440 on the four routes. Name, role, summary, and both hero actions are inside an 812px-tall phone viewport. Metrics start below that fold, which is acceptable.                                                                                                                                                                                    |
| Browser and dark mode           |     8 | The site is dark on purpose. `color-scheme: dark` is set in `src/styles/global.css`, `theme-color` is `#0b1014`, and forcing `prefers-color-scheme: light` still paints `#0b1014` / `#f1f5f3`. `prefers-reduced-transparency` drops the header blur. There is no light theme.                                                                                                              |

### Contrast (computed)

| Pair                   |   Ratio | WCAG AA |
| ---------------------- | ------: | ------- |
| `#f1f5f3` on `#0b1014` | 17.38:1 | Pass    |
| `#a6b2b0` on `#0b1014` |  8.75:1 | Pass    |
| `#a6b2b0` on `#11181e` |  8.20:1 | Pass    |
| `#c4cecb` on `#0b1014` | 11.87:1 | Pass    |
| `#24bcae` on `#0b1014` |  8.08:1 | Pass    |
| `#51d8c6` on `#0b1014` | 10.91:1 | Pass    |
| `#071310` on `#24bcae` |  8.00:1 | Pass    |
| `#071310` on `#51d8c6` | 10.80:1 | Pass    |

### What this pass changed

- `src/components/Hero.astro` now emits an AVIF `srcset` at 480, 720, and 960. Lighthouse "modern image formats" went from failing (about 30 KiB on `logo-192.png`) to passing. LCP on `/en/` moved from 2.1s to 2.0s. A mobile-emulation "properly size images" note still estimates about 48 KiB of spare hero bytes. Left as is: the 720w candidate is the right file for a 2x phone, and quality stays at 78.
- The header mark is an AVIF at 1x and 2x (`src/components/Header.astro`), loaded eagerly. It was a 32 KiB PNG displayed at 36px.
- Visible controls are at least 44 by 44 CSS pixels: brand, language switch, desktop nav, breadcrumbs, footer links, contact rows, company links. axe did not flag this; it was measured in Playwright. Inline stack text is not a control.

### Performance leftovers

Vietnamese LCP is 2.4s because the page also preloads the Vietnamese Manrope subset (`src/layouts/Layout.astro`). That preload is correct for the glyphs. It is the cost of the second locale, not a missing optimization I would remove.

CSS for below-the-fold sections is still render-blocking (Lighthouse, about 150-300ms on the English home). Inlining or splitting it would fight Astro's static CSS and is not worth the complexity at a score of 99.

Open Graph and Twitter images are the 640x640 logo (`public/logo.png`), not a page capture. The tags are complete and the dimensions match the file. A designed share image would be stronger. It needs a real asset, so it is not generated here.

## UX and UI

| Category           | Score | Evidence                                                                                                                                                                                                                                                                                                                          |
| ------------------ | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visual hierarchy   |     9 | The `h1` is the name (`src/components/Hero.astro`). The role is the next line, in `#c4cecb`, not an uppercase eyebrow. Section headings use the shared `.section-heading` scale, capped at 3.25rem.                                                                                                                               |
| Typography         |     8 | Manrope for reading, JetBrains Mono for dates, stacks, and figures. `text-wrap: balance` on headings and `pretty` on paragraphs (`src/styles/global.css`). Body line-height is 1.8, which is comfortable and a little loose for a fast scan. Meta that the live detector measured under 12px (0.63rem to 0.72rem) is now 0.75rem. |
| Color and contrast |     9 | One teal accent. Ratios above. Primary button ink is `#071310` on `#24bcae`.                                                                                                                                                                                                                                                      |
| Layout and spacing |     8 | Sections share `clamp(4.5rem, 8vw, 7.5rem)`. The hero is copy plus one photograph. Projects are one featured record and a stack, not a row of equal cards. Skills use native `details`.                                                                                                                                           |
| Motion             |     8 | See the animation review below. Approve, with the 400ms hero entrance called out.                                                                                                                                                                                                                                                 |
| Navigation         |     8 | Sticky header, skip link, language switch with `aria-current` and an underline, mobile `details` menu, breadcrumbs on the archive. Hash links land with `scroll-margin-top: 6rem`.                                                                                                                                                |
| Originality        |     8 | Dark graphite, one infrastructure photograph, and editorial columns. It is still a portfolio sequence (hero, background, skills, jobs, education, projects, contact), which is the right shape for this audience. It does not use a card grid, gradient blobs, or section numbers.                                                |

### Animation review

Standards used: review-animations and its duration table. Verdict: **Approve.**

| Before                                                                                                       | After                                                                                                                                              | Why                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `main` animated the hero copy and the photograph for 720ms, staggered, and revealed later sections on scroll | Only `.hero-enter` runs, 400ms, `cubic-bezier(0.23, 1, 0.32, 1)`, opacity and translate. The photograph does not animate (`src/styles/global.css`) | The name is the thing a recruiter looks at. Moving the largest image delayed the first paint. Scroll reveals on every section were motion without a job. |
| `main` set every animation and transition to 1ms under `prefers-reduced-motion`                              | Reduced motion removes the entrance and the press/hover transforms, and sets `scroll-behavior: auto`. Color transitions stay                       | A global 1ms kill also removes useful color feedback. The current rule drops movement only.                                                              |
| Hover lift was easy to leave ungated                                                                         | `.lift-on-hover` is inside `@media (hover: hover) and (pointer: fine)`                                                                             | Touch devices do not depend on hover.                                                                                                                    |

The 400ms entrance is over the 300ms UI budget. It is one first-view moment, `ease-out`, transform and opacity only, and it is removed for reduced motion. Emil's table allows a longer duration for a rare explanatory entrance. It is not on a keyboard shortcut or a control used all day. Button press feedback is `scale(0.97)` at 160ms, which matches the button recipe in those standards. No `transition: all`, no `ease-in`, no `scale(0)`.

### Impeccable critique (homepage)

Method: design review and the detector ran as separate passes. One design pass described the pre-change page (`Hi, I am`, clamped project cards, color-only language, scroll reveals). Those are already gone on this branch. The detector on current `src` exited 0 with advisory hits only. A live inject on `/en/` then flagged meta under 12px; that floor is now 0.75rem.

Nielsen, 0-4. Heuristics 5 and 9 do not apply because there is no form. Heuristics 7 and 10 do not apply on a portfolio. Six heuristics are scored, so the maximum is 24.

| #         | Heuristic                       |     Score | Note                                                                                                                     |
| --------- | ------------------------------- | --------: | ------------------------------------------------------------------------------------------------------------------------ |
| 1         | Visibility of system status     |         3 | Current page and current language use `aria-current` plus an underline. No in-page loading state is required.            |
| 2         | Match with the real world       |         4 | Job titles, employer names, and tool names match the data files.                                                         |
| 3         | User control and freedom        |         3 | Language switch, skip link, and archive breadcrumb. The mobile menu is a native `details` element.                       |
| 4         | Consistency and standards       |         3 | One radius token, one accent, shared buttons. Intermediate font sizes are intentional and not all listed in `DESIGN.md`. |
| 5         | Error prevention                |       n/a | No form.                                                                                                                 |
| 6         | Recognition rather than recall  |         3 | Contact methods are visible. The reader does not have to remember a URL.                                                 |
| 7         | Flexibility and efficiency      |       n/a | Portfolio, not an application.                                                                                           |
| 8         | Aesthetic and minimalist design |         3 | One photograph, quiet sections. The skills disclosures are long once opened.                                             |
| 9         | Error recovery                  |       n/a | No form errors.                                                                                                          |
| 10        | Help and documentation          |       n/a | Not a product UI.                                                                                                        |
| **Total** |                                 | **19/24** | Six heuristics scored. 5, 7, 9, and 10 do not apply to this page.                                                        |

Design specificity: this is Tan Phat Vo's record, not a blank template. The photograph, the employer names, and the teal-on-graphite system would not transfer to an unrelated product without rewriting the content. The section order is the ordinary portfolio order. That is a fit for recruiters, not a failure.

Detector: advisory font-size, radius, and shadow-color hits. `DESIGN.md` documents four type steps (display, heading, body, meta at 0.75rem). Supporting copy and fluid headings still sit between those steps on purpose. The radius hits are `calc(var(--radius) * …)` cuts of the same token. The shadow hits are `rgb(0 0 0 / 0.32)` on the menu and the hero figure, which `DESIGN.md` already allows as a soft offset shadow. A live inject also flagged meta under 12px; those rules are now 0.75rem. Remaining ramp mismatches are advisories, not defects.

### Web Interface Guidelines

Fetched from `vercel-labs/web-interface-guidelines` `command.md` on this review.

Passes that matter: skip link, one `h1`, focus-visible outlines (no `outline: none`), `color-scheme: dark`, theme-color matched to the page, image width and height, eager hero image, lazy QR images, `translate="no"` on product names, `touch-action: manipulation`, safe-area padding, `scroll-margin-top` on ids, `text-wrap` on headings, tabular numbers on the figures, reduced motion, no `user-scalable=no`, no `transition: all`.

Left on purpose:

- Sentence case for headings and buttons, matching `DESIGN.md`. The guidelines prefer Chicago Title Case. The design system wins.
- `ease` on color-only hovers. The animation standards use `ease` for color and a custom `ease-out` for movement. That split is already in the CSS.
- No light theme. See the dark-mode score.

## Content, as a hiring page

Copy was read against portfolio-case-study-writer (overview, problem, actions, results), copywriting (one action, specific claims), copy-editing (clarity and tone), and humanizer (no new facts, no inflated closers). Nothing below was invented.

| Category                | Score | Evidence                                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clear in 5 seconds      |     9 | At 1440 the name, "Senior Backend Engineer", the .NET / Golang sentence, and "Email me" are all in the first viewport (`src/components/Hero.astro`, `src/i18n/en.ts`). Same structure in Vietnamese: "Võ Tấn Phát", "Kỹ sư Backend Senior".                                                                                                        |
| Intro and about         |     7 | `home.bio` names ANZ, Halliburton, and Sacombank, the current platform, and three recorded results. It is one dense paragraph and it repeats the three figures already shown beside it.                                                                                                                                                            |
| Experience and projects |     6 | Experience bullets in `src/data/experience.json` include real numbers: about 30% cycle time, coverage above 90%, 20x document search, 20 million customers, 508 million transactions, 200,000 terminals. Several archive write-ups do not. The case-study shape is role + actions + stack. Problem and result are uneven. Learnings are absent.    |
| Credibility             |     7 | Named employers, dates, team sizes, LinkedIn `rel="me"`, and `Person` structured data. No testimonial, no CV, no GitHub profile. Some company blurbs in `src/data/projects.json` are broad market claims (top-5 logistics, a €4.85B acquisition, 70+ centers). They were already in the repo. A skeptical reader cannot check them from this page. |
| Calls to action         |     6 | Email, LinkedIn, WhatsApp, and Zalo are in `src/components/Contact.astro` and the footer. QR codes open in the page. There is no CV download and no GitHub link, because neither URL nor file is in the content.                                                                                                                                   |
| Tone and readability    |     8 | The old "Expert" and "measurable impact" wording on `main` is gone. The bio states the three results as facts. Skill lines still use labels such as "Core Stack:". That is a list, and it scans faster than prose, so it stayed.                                                                                                                   |
| Recruiter scan          |     7 | Three figures, job periods in mono, and an open Backend skills group. The homepage shows the first three records in `projects.json` (Apollo, Rozitek, Sacombank e-invoice). The other nine, including the 5x freight search and the 60% observability cut, are only on the archive.                                                                |

Homepage metrics match the source: 5+ years, 20x document search (Halliburton), 60% observability cost (Bolloré / OpenTelemetry). The "about 30%" cycle-time line is in the ANZ experience bullets and the bio, not in the three figures. That is consistent, not a fourth invented number.

## Before and after

"Before" is `main`, scored from that source and the design-pass screenshots. It was not given a second Lighthouse run in this review. "After" is this build.

| Category                             |                    Before (`main`) |         After | Why the number moved                                                                                                                                          |
| ------------------------------------ | ---------------------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accessibility (motion and targets)   |                                  7 |             9 | `main` forced every animation and transition to 1ms. Language state is now an underline plus `aria-current`, and controls measure at least 44px.              |
| Visual hierarchy                     |                                  6 |             9 | `main` put an uppercase kicker above `h1` text "Hi, I am Tan Phat Vo" (`src/components/Hero.astro` on `main`). The name is now the heading.                   |
| Motion                               |                                  4 |             8 | `main` ran a 720ms staggered entrance on the copy and the photograph, plus scroll-driven section reveals. One 400ms copy entrance remains.                    |
| Originality                          |                                  6 |             8 | Same palette and photograph. Clamped project cards and the repeated reveal read as a template. Full project text is now in the HTML.                          |
| Clear in 5 seconds                   |                                  7 |             9 | The role is a sentence under the name, and email is in the first phone viewport.                                                                              |
| Tone                                 |                                  6 |             8 | `main` bio used "Expert", "mission-critical", and "measurable impact". The current bio keeps the employers and the three results.                             |
| Project scan                         |                                  5 |             7 | `main` clamped project cards at 5 and 7 lines (`src/components/ProjectCard.astro`). The archive now shows the full write-up. Depth of results did not change. |
| Experience and project results       |                                  6 |             6 | No new metrics. The TODO in `src/components/ProjectsArchive.astro` is still the right constraint.                                                             |
| Lighthouse performance, English home | 99 (design-pass preview, LCP 2.1s) | 99 (LCP 2.0s) | Srcset and the AVIF logo. Not a comparison with `main`.                                                                                                       |

## Fixes still worth doing, in order

These need the owner. They were not guessed.

1. **Measured results** for the write-ups named in the TODO at the top of `src/components/ProjectsArchive.astro`: Apollo ERP, Rozitek, the Sacombank e-invoice project record (the customer and transaction figures already live on the experience entry), the CRM migration, the Halliburton sync server, SAMS, IOGA.fr, and Reveal BI. Add a number only if you can verify it.
2. **A CV file** (PDF) and the label you want on the button. The page cannot link a file that is not in the repo.
3. **A GitHub profile URL**, if you want one public. The site mentions GitHub Actions. It does not name a profile, so none was added.
4. **Which three projects** should lead the homepage. They are the first three objects in `src/data/projects.json`. The freight-quote 5x result and the OpenTelemetry 60% result are easy to miss because they are lower in that file.
5. **Company blurbs** you would not say out loud in an interview (market rank, acquisition price, center counts). They are your existing copy. Trim any you cannot source.
6. **A share image** other than the logo, if you want link previews to show the page rather than the mark.
7. **A light theme**, only if you want one. The current dark page is readable in a light OS preference. It is not a second theme.

Smaller code notes, not blockers: delete or use the unused `tagline`, `hoverHint`, and `proficiency` strings; the hero entrance can come down from 400ms to 280ms if you want it inside the strict UI budget.

## Screenshots

Full-page captures of the finished preview, after the image and hit-target fixes:

- `/en/` at 375, 768, and 1440
- `/vi/` at 375, 768, and 1440
- `/en/projects/` at 375, 768, and 1440
- `/vi/projects/` at 375, 768, and 1440

Stored with this review as `screenshots/review/`. The design-pass before/after pair remains in `screenshots/before/` and `screenshots/after/`.
