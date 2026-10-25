# Authoring Palisade

Palisade contains empty curriculum pages for six courses: 83 units, 664 topics, a syllabus per course, an examination per unit, and final examinations A and B. These are navigable placeholders, not authored instruction.

## Development

Requires Node 24 (minimum 22) and npm 10.9.2 or later.

```sh
npm ci
npm run plugins
npm run dev
```

`npm run build` writes the static site to `public/`. `npm run typecheck` checks Quartz TypeScript. The local navigation plugin is standard ESM and needs no compilation. Keep the upstream Quartz engine and its MIT license intact.

## Add materials

Use `content/courses/precalculus/units/01-name/` for the first unit. Copy the templates from `templates/` into that folder. The templates are outside published content. Keep `draft: true` until review is complete. Draft filtering is enabled; never put confidential exam answers in a public repository.

The ordered outline lives in `plugins/palisade-nav/curriculum.json`. Each course uses `syllabus/index.md`, `units/index.md`, numbered unit folders, numbered topic folders, a unit's `examination/index.md`, and `examinations/final-a/index.md` and `final-b/index.md`. Every destination uses a directory index so nested asset and navigation paths resolve consistently.

Empty pages have `placeholder: true` and `trackable: false`. When replacing a topic placeholder with a reviewed article, remove `placeholder: true`, set `trackable: true`, and assign a stable `progressId` as described below. Use `draft: true` while writing; drafts are omitted from the build. Update the outline manifest when changing titles, order, or routes. Collection pages contain navigation links only; no syllabus, lessons, problems, or examinations have been written.

Use Markdown links for sequential reading. Use `$...$` for inline math and `$$...$$` for display math. KaTeX is configured with common number-set macros. Use semantic headings and descriptive links. Prefer concise exposition with explicit assumptions, definitions, reasoning, and proofs.

## Progress

For published articles add `course: "1.1"`, `kind: article`, `trackable: true`, and a stable, unique `progressId`. Keep IDs unchanged when moving files. Progress counts only published trackable articles, never placeholders, drafts, unlisted pages, or course shells. The navigation plugin exposes a completion button on those articles and totals on course and progress pages. This is self-reported reading progress, not assessed mastery.

Progress uses browser localStorage, scoped to the configured base URL. It works offline after a page is loaded but does not sync across browsers. If storage is unavailable, the UI says so and disables marking. No analytics is configured.

## Design

The site uses self-hosted Cascadia Mono and neutral dark surfaces. Course and unit folders use native details/summary chevrons. The current page's ancestors open automatically; other branches populate on demand from a shared script to keep each HTML page small. On mobile, the course tree sits behind a Courses toggle. Every page remains reachable through collection links without JavaScript.

Theme colors and typography live in `quartz.config.yaml`; layout styling in `quartz/styles/custom.scss`; navigation and local progress in `plugins/palisade-nav/`. Content remains Markdown-first. Course metadata for the sidebar is in `plugins/palisade-nav/courses.json`.

## GitHub Pages

The build workflow checks pushes and pull requests. The Pages workflow rebuilds and publishes on every push to the default `v5` branch, and it also supports manual deployment from that branch. For one-time setup, select **Settings → Pages → Source: GitHub Actions**, then run **Palisade / Deploy to Pages** from `v5` for the first deployment. Subsequent updates to `v5` publish automatically after type checking and the build succeed. A failed build leaves the previous site online. The configured base URL is `anipiso9989-ops.github.io/Palisade`. For a custom domain, update `configuration.baseUrl` and configure DNS before enabling the CNAME plugin. GitHub Pages availability for a private repository depends on your GitHub plan. No deployment is required to use or edit the repository.
