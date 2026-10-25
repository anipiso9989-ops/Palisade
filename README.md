# Palisade

**Mastery over memorization. Depth over breadth. Excellence by default.**

An independent, text-first mathematics education project for ambitious students, built with **Quartz 5.0.0**. A dark-first interface with layered charcoal surfaces, off-white typography, mint accents, and an interactive dotted world map.

## Current state

An empty academic scaffold. The initial catalog has six clearly labeled planned course shells. There are **no authored lessons, syllabi, practice sets, solutions, or examinations** yet.

| Course | Title                  | Level        |
| ------ | ---------------------- | ------------ |
| 1.1    | Precalculus            | Preparatory  |
| 2.1    | Calculus I             | Foundational |
| 2.2    | Calculus II            | Foundational |
| 2.3    | Calculus III           | Foundational |
| 2.4    | Linear Algebra         | Foundational |
| 2.5    | Differential Equations | Foundational |

## Run locally

Node 24 and npm 10.9.2+ recommended.

```sh
npm ci
npm run plugins
npm run dev
```

Open the address printed by Quartz (normally `http://localhost:8080`).

```sh
npm run typecheck
npm run build
```

## Included

- Responsive dark design, accessible focus states, and readable mathematical typography.
- Quartz search, Markdown navigation, KaTeX, drafts, and a local navigation plugin.
- Browser-local completion tracking for future published articles, with an honest empty state today.
- Authoring templates for units, articles, practice, and examinations.
- CI builds and automatic GitHub Pages deployment on every push to `v5` (after Pages is enabled).

Start with [the authoring guide](docs/palisade/AUTHORING.md). The mission is to cultivate world-class mathematical thinkers through intellectual excellence. Original curriculum quality comes before catalog expansion.

## Website deployment

The project site uses `https://anipiso9989-ops.github.io/Palisade/`. Enable **Settings → Pages → Source: GitHub Actions** once, then each push to `v5` rebuilds and deploys the site automatically. The workflow also supports manual deployment from `v5`. A failed build leaves the previous deployment in place.

GitHub Free requires a public repository for Pages; private source requires a supported paid plan. The address `palisade.github.io` requires control of the GitHub account or organization named `palisade`.

## Technology and licensing

Quartz engine: [jackyzha0/quartz](https://github.com/jackyzha0/quartz), upstream commit `97a2d05f80c4c50534959b1d0d41cc4b3895625e` (v5 branch). Quartz's MIT license remains in [LICENSE.txt](LICENSE.txt). No separate license for future educational content is selected here. Independent project; no affiliation with MIT, the National Park Service, or Rocky Mountain National Park.

## Dark design and world map

The home-page canvas adapts the supplied React component for Quartz's static, Preact-rendered pages; no React runtime, Tailwind, or hydration is needed. The original upload is retained in `plugins/palisade-nav/reference/world_map_component.tsx`. The production adaptation in `plugins/palisade-nav/world-map.js` preserves its embedded silhouette, land-dot extraction, dithered shimmer, cursor interpolation, radial glow, and cursor ring.

The map observes container resizing, pauses outside the viewport and in hidden tabs, renders a static map for reduced motion, and cleans up listeners and animation frames on navigation. It has no geographic analytics or location claims. The silhouette is embedded and makes no network requests.

Design reference: [Dark Mode Design Expert](https://github.com/curiositech/some_claude_skills/blob/main/.claude/skills/dark-mode-design-expert/SKILL.md), particularly semantic color tokens, tonal elevation, and contrast. Palisade intentionally stays dark regardless of OS preference; both Quartz palettes match, and the initial theme is set before paint so code highlighting also uses dark colors.
