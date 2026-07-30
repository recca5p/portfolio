# Repository guide for coding agents

This file is the source of truth for agents changing this repository. Read it
before editing code, then inspect the files relevant to the requested change.

## What this project is

This is Tan Phat Vo's bilingual portfolio. It is an Astro 7 static site styled
with Tailwind CSS 4. There is no UI framework integration and no server
runtime: all routes must remain compatible with static generation.

Supported languages are English (`en`, the default) and Vietnamese (`vi`).
The root route renders the English page and uses `/en` as its canonical URL.

## Runtime and package manager

- Use Node.js 24 (`.nvmrc`); the minimum supported patch is declared in
  `package.json`.
- Use npm and keep `package-lock.json` in sync with `package.json`.
- Prefer `npm ci` for a clean install and `npm install` when intentionally
  changing dependencies.
- TypeScript is intentionally held on 6.x while `@astrojs/check` supports
  TypeScript 5.x and 6.x. Do not force TypeScript 7 past its peer range; revisit
  the hold when the checker publishes compatible support.
- Never commit `.env`, `node_modules/`, `.astro/`, or `dist/`.

## Repository structure

- `src/pages/`: Astro file-based routes. `/en` and `/vi` contain localized
  pages; the root page is the default English entry.
- `src/layouts/Layout.astro`: shared document shell, SEO metadata, alternate
  language links, JSON-LD, header, footer, and global styles.
- `src/components/`: page sections and shared UI. Components determine the
  active language from `Astro.url` when they need translated copy.
- `src/i18n/en.ts` and `src/i18n/vi.ts`: translation trees. Their keys and
  value shapes must stay aligned.
- `src/i18n/utils.ts`: supported-language types, URL language detection, and
  dot-notation translation lookup.
- `src/data/experience.json`: bilingual employment-history content.
- `src/data/projects.json`: bilingual project records and trusted inline SVG
  icon strings.
- `src/types/project.ts`: the TypeScript contract for project JSON.
- `src/styles/global.css`: Tailwind import, custom variants, theme tokens, and
  genuinely global styles.
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
  repository content such as the current inline icons and controlled
  formatting helpers. Never pass user input or fetched third-party text to it
  without sanitization.
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

## Content and localization

- Every user-facing content change must be reviewed in both English and
  Vietnamese. Add matching translation keys with the same shape to `en.ts`
  and `vi.ts`.
- Technology names and brand names can remain language-neutral.
- For project data changes, update `src/types/project.ts` whenever the JSON
  shape changes.
- The landing-page project section and both full project-list routes share the
  same data but have separate markup. Keep
  `src/pages/en/projects/index.astro` and
  `src/pages/vi/projects/index.astro` structurally aligned.
- Preserve the root English page and `/en` page parity unless the routing
  strategy is deliberately being changed.
- When changing canonical routes, page metadata, or deploy host, also review
  `astro.config.mjs`, `Layout.astro`, `public/robots.txt`, and
  `public/sitemap.xml`.

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
