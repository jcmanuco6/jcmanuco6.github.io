# PLAN.md — Build joancolon.github.io

Staging → live MkDocs site. Check off as done.

## 0. Security fix (do first)
- [ ] `index-stage-office.html`: pull hardcoded `ION_TOKEN` out of source.
      Move to env/config, add placeholder in repo, add real token to `.gitignore`'d file.

## 1. Repo init
- [ ] `git init` at root
- [ ] `.gitignore`: `.venv/`, `site/`, `__pycache__/`, secrets file
- [ ] `python3 -m venv .venv && source .venv/bin/activate`
- [ ] `pip install mkdocs-material mkdocs`
- [ ] `pip freeze > requirements.txt`

## 2. Scaffold MkDocs
- [ ] `mkdocs new .` (or hand-write `mkdocs.yml` since `docs/` already exists)
- [ ] `mkdocs.yml`: set `theme: material`, `site_name`, `site_url` (joancolon.github.io), `repo_url`
- [ ] `mkdocs serve` — confirm it boots against existing `docs/` content

## 3. Nav structure (per docs/ideas-inspiration/design-ideas.md)
- [ ] Create `docs/projects/` — one file per project, slug-named
- [ ] Create 4 section landing pages/nav groups in `mkdocs.yml`:
  - Data Pipelines & Engineering
  - 3D & Reality Capture
  - Analytics & Maps
  - System Architecture
- [ ] Wire `nav:` in `mkdocs.yml` to match

## 4. Migrate staged content
- [ ] `docs/cv/Joan_Colon_Resume_26-08-29.pdf` → link from an About/Resume page
- [ ] `docs/screenshots/ideal-design.png` → use as visual reference for theme/homepage styling, not published as-is
- [ ] Turn `index-stage-office.html` (fixed token) into a project page under `docs/projects/`
      (embed via iframe or link to a hosted standalone build — MkDocs pages are markdown, not raw HTML apps)

## 5. Project pages
- [ ] For each project, required sections: problem, data source, pipeline, live URL, repo link
- [ ] First page: the CesiumJS 3D building viewer (CityJSON → FME → 3D Tiles)

## 6. Theme
- [ ] `overrides/` dir for any Material theme overrides (never touch installed package)
- [ ] Apply fonts/colors from `docs/screenshots/ideal-design.png` reference

## 7. Validate
- [ ] `mkdocs build --strict` — must exit 0, fix broken links/orphaned nav before proceeding
- [ ] Re-run after every content addition

## 8. CI/CD
- [ ] `.github/workflows/ci.yml`: build with `--strict`, deploy `site/` to GitHub Pages on push to `main`
- [ ] Confirm GitHub Pages source set to CI-published branch (e.g. `gh-pages`)

## 9. Go live
- [ ] Create GitHub repo `joancolon.github.io`
- [ ] Push `main`
- [ ] Verify CI run + deployed site
- [ ] Confirm no secrets in history (`git log -p | grep -i token` before first push)

## Excluded from this build
`archive/` (kmz, czml, bkup-portfolio/, portfolio/, cesiumjs-workshop/, geojson_to_czml.py,
index.html) — isolated/legacy, not part of this site.
