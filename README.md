# Palisade

**Mastery over memorization. Depth over breadth. Excellence by default.**

An independent, text-first mathematics education project for ambitious students, built with **Quartz 5.0.0**. A quiet academic interface inspired by Rocky Mountain National Park: spruce green, warm paper, granite, alpine blue, and original contour linework.

## Current state

An empty academic scaffold. The initial catalog has six clearly labeled planned course shells. There are **no authored lessons, syllabi, practice sets, solutions, or examinations** yet.

| Course | Title | Level |
| --- | --- | --- |
| 1.1 | Precalculus | Preparatory |
| 2.1 | Calculus I | Foundational |
| 2.2 | Calculus II | Foundational |
| 2.3 | Calculus III | Foundational |
| 2.4 | Linear Algebra | Foundational |
| 2.5 | Differential Equations | Foundational |

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

- Responsive light and dark themes, accessible focus states, and readable mathematical typography.
- Quartz search, Markdown navigation, KaTeX, drafts, and a local navigation plugin.
- Browser-local completion tracking for future published articles, with an honest empty state today.
- Authoring templates for units, articles, practice, and examinations.
- CI builds and an optional, manually triggered GitHub Pages deployment workflow.

Start with [the authoring guide](docs/palisade/AUTHORING.md). The mission is to cultivate world-class mathematical thinkers through intellectual excellence. Original curriculum quality comes before catalog expansion.

## Technology and licensing

Quartz engine: [jackyzha0/quartz](https://github.com/jackyzha0/quartz), upstream commit `97a2d05f80c4c50534959b1d0d41cc4b3895625e` (v5 branch). Quartz's MIT license remains in [LICENSE.txt](LICENSE.txt). No separate license for future educational content is selected here. Independent project; no affiliation with MIT, the National Park Service, or Rocky Mountain National Park.
