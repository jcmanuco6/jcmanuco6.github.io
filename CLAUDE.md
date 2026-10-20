# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Context & Scope Rules

## Context Exclusion Guidelines (Strict)
Do NOT read, analyze, process, or search within these `/archive` paths:

- **Large Data Assets:** `AGI_HQ.kmz`, `Melbourne_Sensors_Activity.czml` (spatial datasets; parse errors / token drain).
- **Backups & Standalone Submodules:** `bkup-portfolio/`, `portfolio/`, `cesiumjs-workshop/` (isolated projects).
- **Standalone Root Files:** `geojson_to_czml.py`, `index.html`.

Also mirrored in `.claudeignore` and excluded from git via `.gitignore`.

`index-stage-office.html` (repo root) is a separate case, also gitignored:
it's a superseded CesiumJS prototype and **still has a live, hardcoded
Cesium ion token in plaintext** — do not read its token into any output,
do not commit it. The safe replacement lives at
`docs/assets/cadastral-viewer.html`. See STATUS.md §3 for the open
decision on whether to redact or delete it.

For full session history, open decisions, and what to do next, read
**STATUS.md** before starting new work — it has the accomplished/decisions/
blockers/next-steps breakdown that this file intentionally doesn't repeat.

# Portfolio Site — jcmanuco6.github.io

## Stack
- MkDocs + Material theme (mkdocs-material 9.7.7), run from the `geo_env`
  conda environment (`which mkdocs` → `/opt/homebrew/Caskroom/miniconda/base/envs/geo_env/bin/mkdocs`)
  — there is no project-local `.venv`.
- Deployed via `mkdocs gh-deploy` to the `gh-pages` branch (manual, not
  CI-driven yet — no `.github/workflows/ci.yml` exists).
- GitHub Pages requires the repo to be **public** on this account's plan —
  it goes offline automatically if the repo is private, and the Pages
  config itself gets deleted (not just access-restricted).

## Commands
- Serve locally: `mkdocs serve` (or `mkdocs serve -a 127.0.0.1:PORT` to
  avoid clobbering another running instance)
- Build (MUST pass before any commit): `mkdocs build --strict`
- Deploy: `mkdocs gh-deploy --force` — builds and force-pushes `site/` to
  `gh-pages`
- Re-point Pages at the right source after any visibility change or fresh
  repo: `gh api -X PUT repos/jcmanuco6/jcmanuco6.github.io/pages -f "source[branch]=gh-pages" -f "source[path]=/"`,
  then force a build: `gh api -X POST repos/jcmanuco6/jcmanuco6.github.io/pages/builds`
  (changing the source alone does not trigger a rebuild)

## Directory layout
```
mkdocs.yml                  # theme, nav, markdown_extensions config
docs/
  index.md                  # landing page: hero/about/projects/skills/contact
  stylesheets/extra.css     # hero, skill chips, floating-panel card style
  projects/*.md             # one file per project, slug-named
  assets/cadastral-viewer.html  # sanitized CesiumJS embed (token via
                                  # ?token= or window.CESIUM_ION_TOKEN, never hardcoded)
  cv/                        # resume PDF
  ideas-inspiration/, screenshots/   # reference material, excluded from
                                       # nav via `not_in_nav` in mkdocs.yml
site/                        # generated build output — gitignored, never hand-edit
overrides/                   # NOT currently present — removed as dead config
                              # (CSS-only theming decision, see STATUS.md §2);
                              # recreate only if a Jinja template override
                              # becomes genuinely necessary
archive/                     # excluded per Context Exclusion Guidelines above
STATUS.md                    # accomplished / decisions / blockers / next steps
PLAN.md                      # original 9-stage build checklist
```

## Stack decisions (see STATUS.md §2 for full rationale)
- Flat IA, hard cap at 5 projects — no filter/category page.
- `navigation.tabs` (persistent top bar) + per-page `hide: navigation`
  front matter (suppresses the sidebar) — gives a persistent Home/Projects/
  Resume bar without cross-linking sibling project pages.
- Auto light/dark theme (`prefers-color-scheme`), not a forced default.
- CesiumJS/Google Fonts loaded from CDN, not self-hosted — accepted risk
  that gov/enterprise firewalls may block them; a static fallback
  screenshot/GIF was decided on but is **not yet built**.
- No Jinja template overrides — CSS-only (`docs/stylesheets/extra.css`).

## Rules
- IMPORTANT: `mkdocs build --strict` must exit 0 before you commit. Broken
  internal links and orphaned nav entries fail the build. Fix them, don't
  suppress them.
- All content lives in `docs/`. Never edit `site/` — it is generated output.
- One project per file: `docs/projects/<slug>.md`. Template (see
  `cadastral-3d-pipeline.md` for the fully-realized example):
  ```markdown
  ---
  hide:
    - navigation
  ---
  # <Project Name>

  **<one-line pipeline/stack summary>**

  ## Problem
  ## Data source
  ## Pipeline
  ## Live demo        <!-- optional: only if there's a working embed/link -->
  ## Repo link
  ```
- Never commit API keys, Cesium ion tokens, or ArcGIS credentials. Ion
  tokens embedded in a viewer page must be read at runtime (query param /
  `window` global), never hardcoded — see `cadastral-viewer.html` for the
  pattern.
- Before committing, check `git status` / staged diff for anything that
  looks like a secret, even in a file that looks like static content —
  this repo has already had one real token leak caught this way
  (`index-stage-office.html`, still unresolved, see STATUS.md).

## Conventions

- `cadastral-mapbook-automation.md` is the model for every project page —
  copy its structure (`project-hero`, `chips`, `section-nav`, `case-section`,
  `wf-stepper`) for new or converted pages.
- Colors only from `--md-*` Material theme variables. No new hex colors.
- Material's own list rules beat plain class selectors — use
  `.md-typeset ol.x` / `.md-typeset ul.x`, not just `.x`, to win the
  specificity fight.
- Every `<svg>` icon carries `width`, `height`, `fill`, `stroke` attributes
  explicitly — don't rely on CSS defaults alone.
- All work happens on `main` — there's no feature-branch workflow here yet.
  Deploy: `mkdocs gh-deploy --force`, then `git push origin main`.
