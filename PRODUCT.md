# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and engineering managers deciding whether to interview Tan Phat Vo
for a senior backend role. They usually arrive from a CV or LinkedIn, often on
a phone, and compare the page with a job description.

Inferred from the task brief for this unattended pass. The repository itself
does not name a second audience. Vietnamese-speaking readers get the same
facts on `/vi/`.

## Product Purpose

A bilingual static portfolio used to apply for jobs. A visit works when the
reader can confirm the role, the stack, the employers, and the project work,
then contact Tan Phat, without any claim the repository does not already
contain.

## Positioning

The owner's record of production backend work: .NET, Golang, cloud platforms,
banking, logistics, and oil and gas. It is not a company site, a blog, or a
template of placeholder projects.

## Operating Context

Cloudflare Pages serves the static build and permanently redirects `/` to
`/en/`. There is no account, search, or application form. Contact is email,
LinkedIn, WhatsApp, and Zalo, including QR codes for the chat apps.

## Capabilities and Constraints

- Astro 7 static output, Tailwind CSS 4, TypeScript, English and Vietnamese.
- No React islands, no server runtime, no secrets in the repo.
- English and Vietnamese strings stay aligned and carry the same facts.
- Do not invent employers, dates, metrics, or achievements. The CV in
  `public/cv/Tan-Phat-Vo-CV.pdf` is the source of truth when the page and the
  CV disagree. Keep site-only details that are already real.
- Critical copy, headings, and contact links stay in the server-rendered HTML.

## Brand Commitments

Binding, from `AGENTS.md` and the task brief: dark graphite surfaces, Manrope
for reading text, JetBrains Mono for compact technical metadata, teal as the
only accent, and the shared radius token. The first screen is the name,
role, city, and current employer. Do not put a stock photograph back.

## Evidence on Hand

- Copy: `src/i18n/en.ts`, `src/i18n/vi.ts`
- Jobs: `src/data/experience.json`
- Projects: `src/data/projects.json`
- Mark: `src/assets/logo-192.png`
- CV: `public/cv/Tan-Phat-Vo-CV.pdf`

Personal metrics already recorded, and only these: 6+ years, 20x document
search, more than 60% lower observability cost, about 30% shorter
time-to-market (a contribution, not a solo claim), 90%+ test coverage on ANZ
IMT gRPC contracts, and 5x faster quote search. Bank-scale figures need a
year and a source, and they describe the bank. The published CV is
`public/cv/Tan-Phat-Vo-CV.pdf`. GitHub is https://github.com/recca5p.

## Product Principles

1. The first screen names the person, the role, and a way to write to him.
2. A claim ships only when the repository already says it.
3. English and Vietnamese stay equivalent.
4. The first screen is typographic. The rest stays quiet.
5. Product and technology names stay accurate. Do not translate them away.

## Accessibility & Inclusion

Target WCAG AA contrast, a skip link, visible keyboard focus, and a reduced
motion path that still shows the same content. No additional disability
requirement is recorded in the repo.
