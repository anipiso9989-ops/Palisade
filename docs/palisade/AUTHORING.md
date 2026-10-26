# Authoring Palisade

Palisade defines six courses: 83 units, 664 topics, a syllabus per course, an examination per unit, and final examinations A and B. Precalculus has its approved syllabus and authored Unit 1. Other instructional pages remain navigable placeholders.

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

Empty pages have `placeholder: true` and `trackable: false`. When publishing a reviewed topic or examination, remove both flags (or set `placeholder: false` and `trackable: true`) and give it a stable `progressId` as described below. Use `draft: true` while writing; drafts are omitted from the build. Update the outline manifest when changing titles, order, or routes. Collection pages contain navigation links only. Do not publish a placeholder as instruction without completing review and updating its metadata.

Use Markdown links for sequential reading. Use `$...$` for inline math and `$$...$$` for display math. KaTeX is configured with common number-set macros. Use semantic headings and descriptive links. Prefer concise exposition with explicit assumptions, definitions, reasoning, and proofs.

## Progress

Published `kind: article` topics and `kind: examination` pages are automatically trackable. There is no progress list to maintain and no need to opt in with `trackable: true`. The registry is derived from `courses.json`, the units in `curriculum.json`, and Quartz's published file metadata. Topics added inside a unit count immediately, even before their link is added to the ordered navigation outline. Keep that outline up to date for navigation.

Use these conventions for every course:

- Register the course's unique `code`, `slug`, and `title` in `courses.json`, and its ordered units (unique `number`, `slug`, `title`, and `topics`) under that slug in `curriculum.json`.
- Copy `templates/article.md` for topics, `templates/examination.md` for unit exams, or `templates/final-examination.md` for course exams. Replace all sample metadata and keep `draft: true` during review.
- Set `course` to the registered course code, quoted to preserve values such as `"1.1"`. Set `unit` to its curriculum number (`"01"` and `1` both resolve) or its full unit slug for topics and unit exams. Leave `unit` absent on course/final exams.
- Give each page a globally unique, nonempty `progressId`, such as `abstract-algebra-groups-homomorphisms` or `abstract-algebra-final-b`. Keep this ID unchanged when renaming a title, moving a file, or reordering content. Each examination variant needs its own ID.
- Remove `draft: true` when reviewed. Also remove placeholder and opt-out flags inherited from existing empty pages. Set `trackable: false` only to deliberately exclude an otherwise published topic or examination.

Explicit membership takes priority, so a page can be moved while retaining its course, unit, and completion identity. When membership metadata is absent, the registry can infer it from the exact registered course/unit directory. A topic must resolve to a registered unit; a course examination has no unit. Unknown explicit courses/units and duplicate or invalid progress IDs stop the build with an authoring error instead of silently distorting totals.

If `progressId` is omitted, a deterministic ID `page:<Quartz slug without trailing /index>` is assigned. No JavaScript edits are needed. This fallback follows the route: before moving such a page, copy its existing fallback ID into `progressId` to retain saved completions. Templates include explicit IDs to avoid this extra step. Never replace an existing explicit ID with a fallback or reuse a retired ID for different content.

The **All done** button toggles to **Undo**. Each published topic or exam contributes one item. A unit total includes its topics and exams; a course total includes all unit items plus every published course exam. Final variants count independently and never belong to a unit. Collection pages, syllabi, practice pages, drafts, placeholders, unlisted pages, `publish: false`, `published: false`, and `trackable: false` pages never count. Empty courses and units display “No published content yet” instead of a percentage. The dashboard includes all registered courses and curriculum units automatically, with dithered master and unit bars.

Progress is self-reported completion, not assessed mastery. Existing Boolean completion records and the `palisade:<baseUrl>:progress:v1` localStorage namespace are preserved; retired IDs remain stored but do not affect current totals. Changing the configured base URL changes the storage namespace. Progress survives navigation and reloads, and storage events update other tabs on the same origin. It does not sync across browsers or devices. Clearing browser data removes it. If storage cannot be read or written, controls are disabled with an explanation; malformed stored data is left untouched. No analytics is configured.

### Validation

```sh
npm test
npm run typecheck
npm run build
python -m unittest discover -s scripts -p 'test_*.py'
```

The progress tests cover a synthetic future course, automatic totals as units/topics are added, topic and examination controls, legacy IDs, toggles, final variants, empty states, blocked storage, reloads/navigation, and storage events. They also execute the actual inline Quartz resource. No new runtime dependencies are required. When a restricted environment blocks the `tsx` CLI's IPC socket, run the same test runner with `node --import tsx --test`.

## Design

The site uses self-hosted Cascadia Mono and neutral dark surfaces. Course and unit folders use native details/summary chevrons. The current page's ancestors open automatically; other branches populate on demand from a shared script to keep each HTML page small. On mobile, the course tree sits behind a Courses toggle. Every page remains reachable through collection links without JavaScript.

Theme colors and typography live in `quartz.config.yaml`; layout styling in `quartz/styles/custom.scss`; navigation and local progress in `plugins/palisade-nav/`. Content remains Markdown-first. Course metadata for the sidebar is in `plugins/palisade-nav/courses.json`.

## GitHub Pages

The build workflow checks pushes and pull requests. The Pages workflow rebuilds and publishes on every push to the default `v5` branch, and it also supports manual deployment from that branch. For one-time setup, select **Settings → Pages → Source: GitHub Actions**, then run **Palisade / Deploy to Pages** from `v5` for the first deployment. Subsequent updates to `v5` publish automatically after type checking and the build succeed. A failed build leaves the previous site online. The configured base URL is `anipiso9989-ops.github.io/Palisade`. For a custom domain, update `configuration.baseUrl` and configure DNS before enabling the CNAME plugin. GitHub Pages availability for a private repository depends on your GitHub plan. No deployment is required to use or edit the repository.
