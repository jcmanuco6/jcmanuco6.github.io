# Project Status — joancolon portfolio (jcmanuco6.github.io)

Last updated: 2026-10-18, project-page refactor session.

## 0. Latest session (2026-10-18)

- Refactored 3 of the 6 live project pages to a new, denser case-study
  template (Gokul-GPN-style: hook line, `.at-a-glance` metadata block,
  numbered collapsible workflow steps via `pymdownx.details`, Results &
  Impact, optional Links) — zero `[PLACEHOLDER]` tags or empty `[]()` links
  remain on these 3:
  - `docs/projects/cadastral-3d-pipeline.md` → retitled **"3D Cadastral
    Digital Twin & Cloud Pipeline"**; Problem/Data content fully replaced
    with the real PDAL/Laspy/cjio/PyVista LiDAR-to-CityJSON pipeline (the
    prior FME-based narrative was a placeholder guess, now superseded).
    Live demo iframe kept, moved under Results & Impact.
  - `docs/projects/spatial-etl-pipeline.md` → retitled **"Cadastral
    Mapping Automation Guide (POC)"**; same template, existing prose
    restructured into 3 workflow steps. CRS/record-count specifics and
    Links were never supplied — omitted rather than re-placeholdered
    (same precedent as empty Links on other pages).
  - New `docs/projects/deep-learning-land-use-classification.md` —
    **"Deep Learning Parcel Land-Use Classification"**, full content
    supplied directly by you, no gaps.
- `docs/stylesheets/extra.css`: added `.at-a-glance` block style (bordered
  panel, reuses existing `ul.skills` chip CSS inside it — no new chip
  styling needed).
- Dropped `mermaid` fenced diagrams on these 3 pages — `mkdocs.yml` never
  had the `custom_fences`/`mermaid.js` wiring Material needs to render
  them, so they were almost certainly showing as plain text. Replaced with
  `pymdownx.details` numbered steps (already enabled, no config change).
  **`analytics-map.md` and `reality-capture.md` still have unrendered
  mermaid blocks** — not touched this pass, carry the same bug.
- `mkdocs.yml` nav and `docs/index.md` project-card grid updated for all 3
  (2 retitled, 1 new card added, icon `:material-brain:` for the DL card).
- Site now has **6 live project cards**, not 5 — see updated §2 decision
  row below. `analytics-map.md`, `system-architecture.md`,
  `reality-capture.md` were deliberately left untouched in their old
  template/stub state this pass.

## 1. What's been accomplished

- Scaffolded an MkDocs + Material portfolio site from a docs-only staging
  folder (resume PDF, a design-inspiration screenshot, and a standalone
  CesiumJS prototype) into a buildable, deployable static site.
- `mkdocs.yml`: Material theme, Inter/JetBrains Mono fonts, auto light/dark
  palette, `navigation.tabs` for a persistent top bar, `content.code.copy`
  + supporting highlight extensions, native Material grid-card syntax enabled.
- `docs/index.md`: single-page-ish landing page — Hero, About, Projects
  (5-card grid), Skills (chip list), Contact.
- `docs/projects/*.md`: 5 case-study pages. `cadastral-3d-pipeline.md` is
  fully written, including an embedded, sanitized CesiumJS 3D Tiles viewer.
  The other 4 (`spatial-etl-pipeline`, `analytics-map`, `system-architecture`,
  `reality-capture`) are structured stubs (headings only, TODO comments).
- `docs/assets/cadastral-viewer.html`: a sanitized copy of the original
  `index-stage-office.html` prototype — the hardcoded Cesium ion token was
  removed; the viewer now reads a token from `?token=` or
  `window.CESIUM_ION_TOKEN` and shows a clear gate message if neither is set.
- `docs/stylesheets/extra.css`: hero layout, skill chips, and a
  floating-panel card treatment (shadow + hover lift) for the project grid.
- Ran a structured stakeholder interview (AskUserQuestion, 3 rounds) to pin
  down information architecture, embedding strategy, and theming — see
  §2 for the decisions captured. **The interview was not finished** — a
  planned 4th round (project-page vs. landing-page content split, NDA/repo
  edge cases, resume-link stability) never ran, and `SPEC.md` was never
  written.
- Verified `mkdocs build --strict` exits 0 after every file change, all the
  way through the session — no suppressed warnings, no orphaned nav, no
  broken links.
- Browser-tested (Chrome, via claude-in-chrome) the homepage and the
  cadastral project page: grid cards, skill chips, contact icon, and the
  viewer's token-gate all render correctly in both dark/light checks.
- Compared the homepage against `docs/screenshots/ideal-design.png` (a
  Downtown Alliance NYC 3D-map app screenshot used as design inspiration).
  Concluded a literal 1:1 layout match wasn't appropriate — it's a
  single-viewport map-app UI, not a scrolling content page — and that its
  actual design language already lives in `cadastral-viewer.html`. Carried
  over one legitimate stylistic cue (floating-panel cards) to the homepage.
- `git init`, `.gitignore` (excludes `site/`, `.DS_Store`, `.claude/`,
  `archive/`, and — deliberately — `index-stage-office.html`, which still
  has a live plaintext token), first commit `9bf80fd`.
- Created `github.com/jcmanuco6/jcmanuco6.github.io`, pushed `main`.
- `mkdocs gh-deploy --force` → `gh-pages` branch; Pages source pointed at
  `gh-pages`/`/` via `gh api` (auto-config had pointed at `main`, which is
  markdown source, not built HTML — had to fix and force a fresh Pages
  build via `POST /pages/builds` before it actually went live).
- Site went live at `https://jcmanuco6.github.io/`, verified 200 on the
  homepage and a project page.
- Per your request, the repo was then set **private** for an unfinished-
  content audit — see §3, this took Pages offline as a side effect.

## 2. Decisions & frameworks — the *why*

| Decision | Why |
|---|---|
| Hard cap at 5 projects, flat IA, no filter/category page | Simplicity over scale — you don't expect to outgrow 5 projects soon enough to justify building filtering UI now. **Temporarily broken, 2026-10-18**: site now has 6 live project cards after adding the Deep Learning project during the case-study refactor; you explicitly chose to leave `analytics-map.md`/`system-architecture.md`/`reality-capture.md` untouched rather than cut one. Still an open decision — see §4 |
| Project pages have no sidebar cross-nav to each other, but a persistent Home/Projects/Resume top bar | Resolved a real tension: `navigation.tabs` (global, gives the persistent bar) is independent of the left sidebar, which per-page `hide: navigation` front matter still suppresses — so "isolated pages" and "persistent nav" aren't actually in conflict |
| About stays a short homepage blurb, no dedicated page | Resume PDF carries the depth; keeps the single-page feel |
| CDN (cesium.com, Google Fonts) + a planned static fallback, not full self-hosting | Self-hosting avoids the risk that gov/enterprise firewalls block external CDNs — exactly this site's target audience — but was judged not worth the repo-size and version-maintenance cost *yet*; a fallback screenshot/GIF was chosen as the mitigation instead. **Not yet built** (see §3) |
| Cesium ion token: scoped public token, eager load | You picked simplicity (no click-to-load step) over the more defensive click-gate pattern, on the understanding a token scoped to one asset ID is safe client-side. **Not yet reconciled with the actual code** — see §3 |
| Eager iframe load (not lazy/click-to-load) | Accepted the bandwidth/perf cost for a simpler, always-visible demo |
| Auto theme (OS `prefers-color-scheme`), not forced light default | Chose personalization over guaranteed-consistent print/screenshot appearance |
| Cesium viewer keeps its own fixed dark UI, doesn't adapt to site theme | Treated as an embedded "app," not part of the page's own design system — less work, and a common pattern for demo embeds |
| CSS-only theming, no Jinja `overrides/` template | You confirmed the default Material page structure is enough; the empty `overrides/` dir and `custom_dir` config were removed as dead weight |
| No existing brand constraints | Black/indigo/Inter/JetBrains Mono is a default I chose, not a constraint from an existing brand — free to change |
| `content.code.copy` + `pymdownx.highlight`/`inlinehilite`/`snippets` enabled now, even with no code blocks yet | Cheap to add up front; avoids a broken/undecorated code block the first time a project page includes an FME/Python/CLI snippet |
| Reference screenshot judged not a literal page-layout template | It's a fixed-viewport GIS app screenshot (filter sidebar, floating zoom/compass cluster, popup card) — structurally incompatible with a scrolling resume/portfolio page. Its real analog in this project is `cadastral-viewer.html`, which already borrows its dark-panel, floating-control aesthetic |
| `index-stage-office.html` excluded from git rather than fixed in place | It's a superseded draft; the safe replacement (`docs/assets/cadastral-viewer.html`) already exists, so redacting the old file wasn't worth doing before a decision on whether to keep it at all |
| Repo made private for a content audit | Your explicit request. Tradeoff flagged before doing it: GitHub Pages requires a public repo (or a paid plan) on this account, so this took the live site offline as a direct, immediate side effect, not just an access restriction |

## 3. Current state and blockers — exact status

**Live site:** `https://jcmanuco6.github.io/` → **404**. Not a bug — GitHub
disabled the Pages *configuration itself* the moment the repo went private
(confirmed: `GET /repos/.../pages` now 404s, not just the site). Code and
both branches (`main`, `gh-pages`) are untouched and safe.

**Repo:** `jcmanuco6/jcmanuco6.github.io`, **private**. 2 commits on `main`
(`9bf80fd` initial, plus the untracked `.gitignore`/etc. that followed —
check `git log` for the exact current head), one deploy on `gh-pages`.

**`SPEC.md`: does not exist.** The interview that was supposed to produce it
got interrupted (you pivoted to asking for an implementation plan mid-round).
Rounds 1–3 answers are captured in §2 above; round 4 (project-vs-landing
content split, NDA/private-repo edge cases, resume-filename stability) was
never asked.

**Content gaps (all marked with `<!-- TODO -->` comments in the files
themselves, invisible on the rendered site):**
- `docs/projects/spatial-etl-pipeline.md`, `analytics-map.md`,
  `system-architecture.md`, `reality-capture.md` — structure only, no real
  problem/data-source/pipeline content.
- `docs/index.md` — About paragraph is generic placeholder text; GitHub and
  LinkedIn contact links are commented-out TODOs (only email is live);
  Skills list is my best guess from context, not confirmed against your
  actual stack.
- `docs/projects/cadastral-3d-pipeline.md` — Problem section and Repo link
  are still empty.

**Two decisions from §2 that were never actually implemented:**
1. Static screenshot/GIF fallback for no-WebGL/blocked-CDN visitors —
   decided, not built. Needs a real Cesium ion asset live first (current
   `ASSET_ID = 5163049` in the viewer may or may not still be valid/yours).
2. "Scoped public token, eager load" — the actual viewer code
   (`docs/assets/cadastral-viewer.html`) still implements the *older*
   click-through/query-param token-gate pattern from before that decision
   was made. These two need reconciling: either bake in a scoped token, or
   consciously keep the gate and update §2's record of the decision.

**Unresolved from earlier in the session:**
- `index-stage-office.html` (repo root, gitignored, not pushed) still has a
  real, live, plaintext Cesium ion token. You never said whether to redact
  it or delete the file — it's just sitting there on local disk.
- Resume PDF filename is dated (`Joan_Colon_Resume_26-08-29.pdf`) — every
  refresh will break the direct link from `mkdocs.yml`'s nav and the hero
  button unless a stable-filename convention is adopted.
- No `.github/workflows/ci.yml` yet — deploys are manual (`mkdocs gh-deploy`),
  not the CI-driven flow the original CLAUDE.md described as the target.
- No favicon/branding beyond the default Material one.

## 4. Next steps — resume blueprint

Do these in order when you're back:

1. **Decide repo visibility.** If you want the live site back before the
   audit is done: `gh repo edit jcmanuco6/jcmanuco6.github.io --visibility public`,
   then re-enable Pages (source `gh-pages`/`/`, trigger a build via
   `POST /repos/.../pages/builds` — the same two steps that were needed the
   first time, since a visibility flip wipes the Pages config). If staying
   private through the audit: nothing to do here, just know the URL 404s
   until you flip it.
2. **Resolve `index-stage-office.html`.** Either redact the token and keep
   the file, or delete it outright. Currently in limbo.
3. **Reconcile the Cesium token strategy.** Pick one: update
   `cadastral-viewer.html` to bake in a scoped-by-asset public token
   (matches the stated decision), or keep the click/query-param gate and
   update §2 to reflect that as the real decision.
4. **Finish the interview, write `SPEC.md`.** Resume round 4 (content split,
   edge cases, resume-link stability) via the same AskUserQuestion pattern
   used for rounds 1–3, then write the spec doc that was originally asked
   for and never delivered.
5. **Fill the 4 stub project pages** with real problem/data/pipeline
   content — or explicitly cut the flat-5 count if fewer than 5 real
   projects exist yet.
6. **Fill the homepage TODOs**: real About paragraph, GitHub/LinkedIn
   links, a verified Skills list, the cadastral project's repo link.
7. **Capture the fallback screenshot/GIF** for the cadastral viewer once a
   real, confirmed Ion asset is live.
8. **(Optional) Set up `.github/workflows/ci.yml`** for automated
   build+deploy, replacing the manual `mkdocs gh-deploy` flow.
9. **Re-verify and redeploy**: `mkdocs build --strict`, a quick browser
   check, then `git push` + `mkdocs gh-deploy --force` for a refreshed live
   version once visibility is public again.
