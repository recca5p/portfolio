# AI tooling

Project-scoped skills and MCP servers for this portfolio. Cursor loads skills
from `.agents/skills/` and `.cursor/skills/`, and MCP servers from
`.cursor/mcp.json`.

Nothing in this setup commits an API key. Context7 is configured as a keyless
remote server. If you add a Context7 key later, put it in an untracked local
override or a secret store, not in git.

## Workflow

1. Edit existing copy with the writing skills and `humanizer`. Do not invent
   employers, metrics, or outcomes. Leave a source TODO when a case study needs
   a number this repo does not contain.
2. Run `/impeccable init` when `PRODUCT.md` is missing or stale, then
   `/impeccable shape` before changing design direction. Keep the current
   graphite, Manrope, JetBrains Mono, and teal identity unless the owner asks
   for a new brand.
3. Build.
4. Screenshot `/en/`, `/vi/`, `/en/projects/`, and `/vi/projects/` at 375, 768,
   and 1440. Review with `/impeccable critique`, `/impeccable audit`, and
   `web-design-guidelines` (fetch the live checklist first).
5. Finish with `/impeccable polish`.

`frontend-design` is a fallback if Impeccable cannot load. Do not install Taste
Skill. This site has no React islands, so `vercel-react-best-practices` and the
shadcn MCP are intentionally absent.

## Skills

| Skill                         | Source                                                                                         | Update                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `impeccable`                  | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) skill v4.3.1, installed for Cursor | `npx impeccable update`                               |
| `frontend-design`             | [anthropics/skills](https://github.com/anthropics/skills)                                      | `npx skills update frontend-design -p -y`             |
| `web-design-guidelines`       | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)                        | `npx skills update web-design-guidelines -p -y`       |
| `emil-design-eng`             | [emilkowalski/skills](https://github.com/emilkowalski/skills)                                  | `npx skills update emil-design-eng -p -y`             |
| `review-animations`           | [emilkowalski/skills](https://github.com/emilkowalski/skills)                                  | `npx skills update review-animations -p -y`           |
| `portfolio-case-study-writer` | [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)                  | `npx skills update portfolio-case-study-writer -p -y` |
| `tech-resume-optimizer`       | [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)                  | `npx skills update tech-resume-optimizer -p -y`       |
| `resume-bullet-writer`        | [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)                  | `npx skills update resume-bullet-writer -p -y`        |
| `job-description-analyzer`    | [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)                  | `npx skills update job-description-analyzer -p -y`    |
| `copywriting`                 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)              | `npx skills update copywriting -p -y`                 |
| `copy-editing`                | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)              | `npx skills update copy-editing -p -y`                |
| `humanizer`                   | [blader/humanizer](https://github.com/blader/humanizer)                                        | `npx skills update humanizer -p -y`                   |

`skills-lock.json` records the non-Impeccable installs. `npx skills update -p -y`
refreshes every locked skill. Re-copy with `--copy` if an update leaves a
symlink outside the repo.

### Impeccable install note

`npx impeccable install --providers=cursor --scope=project` is the official
command. On 28 Sep 2026 the CLI (npm `impeccable` 4.1.0) stopped because
`https://impeccable.style/api/download/bundle/universal` did not redirect to a
signed release (the body was "Not Found"). The files in `.cursor/skills/impeccable`
came from the official installer pointed at the signed GitHub release asset
`skill-v4.3.1/universal.zip` (`IMPECCABLE_BUNDLE_PATH`), after the zip matched
signature sha256 `1deea4cdfb1608df6d9e08ef359629e7cc866a22ab7c2195a835627b887f190b`.

The engine binary under `.cursor/skills/impeccable/scripts/bin/` is
platform-specific and gitignored. The launcher downloads the matching
`engine-v*` binary from GitHub on first use. That download is the only network
call found in the skill, and it is checksum-verified.

A newer skill release (v4.4.0) was published after this install. Update in a
later session with `npx impeccable update` once the download API responds, or
repeat the `IMPECCABLE_BUNDLE_PATH` method against the newer `skill-v*` asset.

### Impeccable hook

`.cursor/hooks.json` runs the design detector before Cursor writes UI files
(`.astro`, `.css`, `.ts`, `.js`, and similar). Clean writes are allowed. A
write is blocked only when the detector reports a mechanical issue, such as a
contrast failure or gradient text. That can interrupt an intentional edit.

Turn it off with either command:

```sh
.cursor/skills/impeccable/scripts/impeccable hooks off
```

```sh
npx impeccable install --providers=cursor --scope=project --no-hooks --force
```

`hooks off` writes `hook.enabled: false` to `.impeccable/config.json`.
`IMPECCABLE_HOOK_DISABLED=1` disables it for one shell. Removing
`.cursor/hooks.json` also stops Cursor from calling it. Turn it back on with
`impeccable hooks on`.

Skim of the other skills: markdown instructions plus Humanizer's local
`scripts/validate-package.py`, which only reads that skill's own package files.
No install hooks, telemetry, or destructive scripts.

## MCP

| Server     | Config                          | Source                                                                  | Notes                                                                                                                                                                  |
| ---------- | ------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright | `npx -y @playwright/mcp@latest` | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Browser screenshots and interaction checks. No API key.                                                                                                                |
| Context7   | `https://mcp.context7.com/mcp`  | [upstash/context7](https://github.com/upstash/context7)                 | Keyless remote endpoint. Rate limits are lower without a key. To raise them, add a local `headers.CONTEXT7_API_KEY` from your own secret store. Do not commit the key. |

shadcn MCP is not configured. The site is Astro with Tailwind utilities and no
React renderer, so a React component registry would not match the stack.

## Not installed on purpose

- Taste Skill. It conflicts with Impeccable.
- `vercel-react-best-practices`. There are no React islands.
- shadcn MCP. Same reason.
