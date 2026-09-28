# Tan Phat Vo — Portfolio

A bilingual, statically generated engineering portfolio built with Astro and
Tailwind CSS. The site presents work experience, projects, skills, education,
and contact information in English and Vietnamese.

## Stack

- Astro 7
- Tailwind CSS 4 through the Vite plugin
- TypeScript in strict mode
- Automatic route discovery through the official Astro sitemap integration
- ESLint and Prettier
- Static output for Cloudflare Pages

## Local development

Use the Node version declared in `.nvmrc`.

```sh
nvm use
npm ci
npm run dev
```

The development server is available at `http://localhost:4321`.

## Commands

| Command                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | Start the local Astro development server                    |
| `npm run build`        | Generate the production site in `dist/`                     |
| `npm run preview`      | Preview the production build locally                        |
| `npm run typecheck`    | Run Astro and TypeScript diagnostics                        |
| `npm run lint`         | Lint the repository                                         |
| `npm run format`       | Format supported files with Prettier                        |
| `npm run format:check` | Verify formatting without changing files                    |
| `npm run seo:check`    | Validate built metadata, canonicals, hreflang, and sitemaps |
| `npm run check`        | Run all required validation, including the production build |

Run `npm run check` before opening a pull request or pushing a code change.

## Project map

```text
src/
├── components/       Reusable portfolio sections and shared UI
├── data/             Structured experience and project content
├── i18n/             English/Vietnamese translations and lookup helpers
├── layouts/          Shared HTML shell, metadata, and structured data
├── pages/            File-based routes for /, /en, /vi, and project listings
├── styles/           Tailwind theme and global styles
└── types/            Shared TypeScript data contracts
```

The production root route permanently redirects to the canonical English page
at `/en/`. Content changes should preserve parity between English and
Vietnamese. See `AGENTS.md` for the repository conventions and the expected
change workflow.

Agent skills and MCP servers used for design and writing live in the repo.
`docs/ai-tooling.md` lists each one, where it came from, and how to update it.

## Deployment

The Astro configuration produces a static build:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 24

The canonical site URL and generated sitemap are configured in
`astro.config.mjs`. Cloudflare Pages permanently redirects `/` to the canonical
English homepage at `/en/`.
