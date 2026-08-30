# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Context & Scope Rules

## Context Exclusion Guidelines (Strict)
Do NOT read, analyze, process, or search within these `/archive` paths:

- **Large Data Assets:** `AGI_HQ.kmz`, `Melbourne_Sensors_Activity.czml` (spatial datasets; parse errors / token drain).
- **Backups & Standalone Submodules:** `bkup-portfolio/`, `portfolio/`, `cesiumjs-workshop/` (isolated projects).
- **Standalone Root Files:** `geojson_to_czml.py`, `index.html`.

These are also mirrored in `.claudeignore`. Focus analysis strictly on the active root in pwd, unless explicitly instructed otherwise.

## Current state of this root
Not a git repo (no `.git`), no `mkdocs.yml`, no `.venv`, no `.github/` yet at this level.
This directory is a **staging area** for the portfolio site described below — content
(`docs/cv/`, `docs/screenshots/`, `docs/ideas-inspiration/`) is being collected here before
the MkDocs site is scaffolded. Don't assume the build commands below work yet; check for
`mkdocs.yml` before running them.

`index-stage-office.html` (root) is a standalone CesiumJS prototype, not part of the MkDocs
build — a CityJSON → FME → 3D Tiles building viewer (color-by-height / color-by-year-built
styling, click-to-inspect attributes). It currently has a **Cesium ion access token hardcoded
in plaintext** (the `ION_TOKEN` const) — flag this before this file is ever committed or shared;
move it to a config/env value first.

# Portfolio Site — joancolon.github.io

## Stack (target, once scaffolded)
- MkDocs + Material theme (mkdocs-material), Python venv at `.venv`
- Deployed to GitHub Pages via `.github/workflows/ci.yml`

## Commands
- Serve locally: `mkdocs serve`
- Build (MUST pass before any commit): `mkdocs build --strict`
- Deploy: push to `main` — CI handles it

## Rules
- IMPORTANT: `mkdocs build --strict` must exit 0 before you commit. Broken
  internal links and orphaned nav entries fail the build. Fix them, don't
  suppress them.
- All content lives in `docs/`. Never edit `site/` — it is generated output.
- Theme overrides go in `overrides/`, never in the installed package.
- One project per file: `docs/projects/<slug>.md`
- Every project page needs: problem, data source, pipeline, live URL, repo link.
- Never commit API keys, Cesium ion tokens, or ArcGIS credentials.

## Planned nav structure (from docs/ideas-inspiration/design-ideas.md)
Four sections: Data Pipelines & Engineering, 3D & Reality Capture, Analytics & Maps,
System Architecture. Reference links and template inspirations are in that file.
