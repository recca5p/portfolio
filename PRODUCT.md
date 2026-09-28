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
- Do not invent employers, dates, metrics, or achievements. Where a case study
  would be stronger with a number the repo does not contain, leave a source
  TODO for the owner.
- Critical copy, headings, and contact links stay in the server-rendered HTML.

## Brand Commitments

Binding, from `AGENTS.md` and the task brief: dark graphite surfaces, Manrope
for reading text, JetBrains Mono for compact technical metadata, teal as the
only accent, and the shared radius token. The hero photograph of
infrastructure cabling stays. Refine this identity. Do not replace it.

## Evidence on Hand

- Copy: `src/i18n/en.ts`, `src/i18n/vi.ts`
- Jobs: `src/data/experience.json`
- Projects: `src/data/projects.json`
- Hero image: `src/assets/backend-infrastructure.png`
- Logos: `public/logo.png`, `public/logo-192.png`

Numbers already in those files, and only those numbers, may appear on the
page. Examples already recorded: 5+ years, 20x document search, 60%
observability cost, about 30% faster development cycles, 5x freight-quote
search, team sizes, and the Sacombank customer, transaction, and terminal
figures written in the experience entry.

## Product Principles

1. The first screen names the person, the role, and a way to write to him.
2. A claim ships only when the repository already says it.
3. English and Vietnamese stay equivalent.
4. One photographic moment carries the page. The rest stays quiet.
5. Product and technology names stay accurate. Do not translate them away.

## Accessibility & Inclusion

Target WCAG AA contrast, a skip link, visible keyboard focus, and a reduced
motion path that still shows the same content. No additional disability
requirement is recorded in the repo.
