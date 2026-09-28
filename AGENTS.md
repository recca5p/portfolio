# Repository guide for coding agents

This file is the source of truth for agents changing this repository. Read it
before editing code, then inspect the files relevant to the requested change.

## What this project is

This is Tan Phat Vo's bilingual portfolio. It is an Astro 7 static site styled
with Tailwind CSS 4. There is no UI framework integration and no server
runtime: all routes must remain compatible with static generation.

Supported languages are English (`en`, the default) and Vietnamese (`vi`).
Cloudflare Pages permanently redirects the root route to the canonical English
homepage at `/en/`.

## Runtime and package manager

- Use Node.js 24.21.0 (`.nvmrc`); the minimum supported patch is declared in
  `package.json`. This is the newest Node.js 24 LTS release. Cloudflare Pages
  builds on Ubuntu 22.04.2, and that image does not provide `libatomic.so.1`.
  Official Node.js 25 and 26 Linux binaries require that library and exit
  before install or build commands run. Keep GitHub Actions on this same pin.
  Do not move it to Node 25 or 26 unless the Pages image ships `libatomic1`.
- Use npm and keep `package-lock.json` in sync with `package.json`.
- Prefer `npm ci` for a clean install and `npm install` when intentionally
  changing dependencies.
- TypeScript is intentionally held on 6.0.3, the latest 6.x release.
  TypeScript 7.0.2 is published, but `@astrojs/check` 0.9.10 still requires
  `typescript@^5 || ^6`, and `astro check` cannot use the TypeScript 7 native
  compiler. Revisit the hold when the checker supports it.
- Never commit `.env`, `node_modules/`, `.astro/`, or `dist/`.

## Repository structure

- `src/pages/`: Astro file-based routes. `/en/` and `/vi/` contain localized
  pages; the root source page is a local/static fallback for the production
  redirect.
- `src/layouts/Layout.astro`: shared document shell, SEO metadata, alternate
  language links, JSON-LD, header, footer, and global styles.
- `src/components/`: page sections and shared UI. Components determine the
  active language from `Astro.url` when they need translated copy.
- `src/i18n/en.ts` and `src/i18n/vi.ts`: translation trees. Their keys and
  value shapes must stay aligned.
- `src/i18n/utils.ts`: supported-language types, URL language detection, and
  dot-notation translation lookup.
- `src/data/experience.json`: bilingual employment-history content.
- `src/data/projects.json`: bilingual project records.
- `src/types/project.ts`: the TypeScript contract for project JSON.
- `src/assets/logo-192.png`: flat teal header mark, optimized by Astro.
- `src/data/profile.ts`: email, phone, LinkedIn, location, and the public CV
  path.
- `src/styles/global.css`: Tailwind import, custom variants, theme tokens, and
  genuinely global styles.
- `scripts/check-seo.mjs`: build-output validation for canonical pages,
  localized alternates, structured data, robots, redirects, and sitemaps.
- `public/`: files copied to the site root without processing.

## Coding style

- Follow the checked-in Prettier configuration: 2-space indentation, single
  quotes, semicolons, trailing commas where supported, and a 100-column print
  width.
- Use ESM imports and strict TypeScript. Do not introduce `any`; model data
  with explicit types or narrow `unknown`.
- Keep Astro frontmatter focused on imports and build-time data preparation.
  Prefer Astro components and server-rendered markup over client JavaScript.
- Use `const` unless reassignment is required. Use descriptive camelCase names
  for values/functions and PascalCase for components and interfaces.
- Keep comments focused on intent or non-obvious constraints. Inside an Astro
  expression such as `array.map(...)`, use JSX-style comments
  (`{/* comment */}`), not HTML comments.
- Keep imports relative within `src/`; this repository does not define path
  aliases.

## Astro, HTML, and accessibility rules

- Produce semantic HTML first. Preserve heading order, landmark elements,
  accessible labels, keyboard behavior, and the skip link.
- Decorative icons must use `aria-hidden="true"`. Meaningful images require
  useful `alt` text and explicit dimensions when known.
- External links opened in a new tab must include
  `rel="noopener noreferrer"`.
- Add `is:inline` explicitly to scripts that Astro intentionally leaves
  unprocessed, including JSON-LD scripts with attributes.
- Treat `set:html` as an exception. It is allowed only for trusted, static
  repository content such as the controlled biography and bold-formatting
  helpers. Never pass user input or fetched third-party text to it without
  sanitization.
- Keep the site statically buildable. Do not add an SSR adapter, server-only
  API, or runtime secret unless the task explicitly changes the deployment
  model.

## Styling rules

- Prefer Tailwind utility classes in `.astro` markup.
- Reuse the `primary-*` tokens defined in `src/styles/global.css`; do not
  scatter a second brand palette across components.
- Put styles in a component's scoped `<style>` block when they only support
  that component. Add global CSS only for theme tokens, base behavior, or
  selectors shared by multiple components.
- Preserve responsive behavior at mobile, `sm`, `md`, and `lg` breakpoints.
  Hover-only affordances must still have a usable touch/mobile behavior.
- Avoid introducing a UI component library for a small, existing pattern.

## UI and design quality

Impeccable (`.cursor/skills/impeccable`) is the primary design skill. Do not
install Taste Skill alongside it. Motion and accessibility review use the
vendored `emil-design-eng`, `review-animations`, and `web-design-guidelines`
skills. Fetch the live Web Interface Guidelines checklist before each
`web-design-guidelines` audit. The install list, update commands, and hook
switch are in `docs/ai-tooling.md`.

Preserve the current technical-editorial direction unless the user asks for a
new brand:

- Dark graphite surfaces, Manrope for interface/content typography, JetBrains
  Mono for compact technical metadata, and teal as the only UI accent.
- Use the shared `--radius` shape token. Avoid mixed card and control radii.
- Prefer asymmetric editorial layouts, sparse borders, and whitespace over
  repeated equal card grids.
- Do not hide substantive portfolio content behind hover. Native `details`
  disclosures are preferred when a categorized list needs progressive
  disclosure.
- Use real project assets or optimized local imagery. Do not construct fake
  screenshots from decorative `div` elements.
- Every pressable needs visible hover, active, and focus-visible states. Keep
  routine UI transitions under 300 ms, list transition properties explicitly,
  and animate only `transform` and `opacity`.
- Gate pointer-specific hover motion behind
  `@media (hover: hover) and (pointer: fine)`. Honor
  `prefers-reduced-motion`, avoid scroll event listeners, and prefer CSS motion
  or `IntersectionObserver`.
- Keep the page theme consistent from header through footer. Avoid gradient
  blobs, decorative status dots, section-number labels, scroll cues, excessive
  pills, and handwritten SVG icon sets.
- Use a normal hyphen instead of an em dash or en dash in visible copy.

## AI workflow

Use this order for portfolio changes:

1. Content first. Edit existing copy with `copy-editing`, `humanizer`, and the
   resume or case-study skills. Do not invent employers, metrics, or outcomes.
   Leave a source TODO where a case study needs a number the repo does not
   have.
2. Design direction. Run `/impeccable init` when `PRODUCT.md` is missing or
   stale, then `/impeccable shape` before a new visual direction. Keep the
   graphite, Manrope, JetBrains Mono, and teal identity unless the owner asks
   for a new brand.
3. Build the static pages.
4. Review. Screenshot `/en/`, `/vi/`, and both project archives at 375, 768,
   and 1440. Run `/impeccable critique` and `/impeccable audit`, then
   `web-design-guidelines`.
5. Finish with `/impeccable polish`.

`frontend-design` is only a fallback when Impeccable is unavailable. Skip
`vercel-react-best-practices` and the shadcn MCP: this site has no React
islands.

## Content and localization

- Every user-facing content change must be reviewed in both English and
  Vietnamese. Add matching translation keys with the same shape to `en.ts`
  and `vi.ts`.
- Technology names and brand names can remain language-neutral.
- For project data changes, update `src/types/project.ts` whenever the JSON
  shape changes.
- The landing-page project section and both full project-list routes share the
  same data. Keep localized project routes thin and render their archive
  through `src/components/ProjectsArchive.astro`.
- Keep the root fallback source and `/en/` page content aligned unless the
  routing strategy is deliberately being changed.
- When changing canonical routes, page metadata, or deploy host, also review
  `astro.config.mjs`, `Layout.astro`, `public/robots.txt`, and
  `public/_redirects`.

## SEO and crawlability

- Critical content, headings, links, canonical tags, language alternates, and
  JSON-LD must be present in build-time HTML. Do not require client JavaScript
  for a crawler to discover or understand primary content.
- Cloudflare Pages serves directory routes with a trailing slash. Canonical
  URLs, `hreflang` links, sitemap URLs, and internal links must use the same
  trailing-slash form to avoid redirect hops and conflicting signals.
- `/` is a duplicate fallback page and permanently redirects to `/en/`.
  Exclude it from the sitemap and do not use it as a canonical URL.
- Every indexable page needs one descriptive, language-matched `<title>`, one
  unique meta description, one visible `<h1>`, and a self-referencing
  canonical URL.
- English and Vietnamese equivalents must publish identical, reciprocal
  `hreflang` sets: `en`, `vi`, and `x-default`. The fallback is `/en/`.
- Sitemaps are generated from static routes by `@astrojs/sitemap`. Never add a
  hand-maintained sitemap under `public/`; configure filtering in
  `astro.config.mjs` and keep `robots.txt` pointed at `sitemap-index.xml`.
- Structured data must describe visible content and real site capabilities.
  Use `ProfilePage` with `Person` for localized homepages, `CollectionPage` and
  visible `BreadcrumbList` navigation for project listings, and stable `@id`
  values for shared entities. Do not advertise `SearchAction` without a real
  query-driven search feature.
- Google ignores the keywords meta tag. Put important terms naturally in
  visible headings, summaries, project descriptions, and accessible link text
  instead of adding keyword lists.
- Keep social metadata page-specific and use absolute, crawlable URLs for Open
  Graph and Twitter images.
- Optimize crawl rendering and Core Web Vitals together: preserve static HTML,
  explicit image dimensions, lazy-load below-the-fold images, and avoid
  oversized assets or unnecessary client-side hydration.
- Treat visual redesign and SEO as one quality gate. Hero copy, project
  summaries, headings, internal links, and disclosure content must remain
  server-rendered HTML. Never move crawl-critical copy into a client-only
  carousel, modal, canvas, or animation state.
- Load critical above-the-fold imagery eagerly with explicit dimensions and
  responsive sizing. Use Astro image optimization for local raster assets.
  Lazy-load external QR codes and other below-the-fold images.
- Self-host fonts, use `font-display: swap`, and preload only the critical
  locale subset. Do not add render-blocking third-party font requests.
- After any SEO, route, metadata, or localization change, build first and run
  `npm run seo:check`. After deployment, verify the canonical production URL
  with Google Search Console URL Inspection and Rich Results Test.

## Validation

The required quality gate is:

```sh
npm run check
```

It runs Astro/TypeScript diagnostics, ESLint, Prettier verification, and the
production build. Fix errors and new warnings instead of suppressing them.

For a focused change, run the narrow command while iterating, but run the full
quality gate before handing off:

- `npm run typecheck`
- `npm run lint`
- `npm run format:check`
- `npm run build`
- `npm run seo:check` (requires a current `dist/` build)

There is currently no automated browser or unit-test suite. For visual or
interaction changes, also inspect the affected English and Vietnamese routes
at mobile and desktop sizes.

## Dependency updates

When updating packages:

1. Use `npm outdated` and the official package release notes to identify
   available updates and migration requirements.
2. Upgrade related packages together (for example Astro and its tooling, or
   Tailwind and its Vite integration).
3. Run `npm audit` and resolve actionable vulnerabilities without adding
   arbitrary lockfile overrides.
4. Run `npm run check` after installation and address migration diagnostics.
5. Commit both manifests and document any deliberate version hold.

## Change discipline

- Inspect `git status` before editing and preserve unrelated user changes.
- Keep changes scoped to the request; do not rewrite portfolio claims or
  personal details without explicit direction.
- Do not edit generated output to fix a source issue.
- Prefer a small reusable component or data-driven pattern when markup is
  repeated in three or more places, but avoid speculative abstractions.
- Before handoff, review the diff for accidental content, generated files,
  credentials, and formatting-only churn.
