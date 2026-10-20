# Joan Colon — Portfolio Site

MkDocs Material portfolio for Joan Colon, Geospatial Data Engineer. Live at [jcmanuco6.github.io](https://jcmanuco6.github.io/).

## Tech Stack

- [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- Extensions enabled (see [`mkdocs.yml`](mkdocs.yml)): `attr_list`, `md_in_html`, `admonition`, `tables`, `pymdownx.details`, `pymdownx.superfences`, `pymdownx.highlight`, `pymdownx.inlinehilite`, `pymdownx.snippets`, `pymdownx.emoji`
- Fonts: Inter (text), IBM Plex Mono (code)
- Custom CSS: [`extra.css`](docs/stylesheets/extra.css), [`project-page.css`](docs/stylesheets/project-page.css), [`workflow-stepper.css`](docs/stylesheets/workflow-stepper.css), [`carousel.css`](docs/stylesheets/carousel.css)
- Custom JS: [`workflow-stepper.js`](docs/javascripts/workflow-stepper.js), [`carousel.js`](docs/javascripts/carousel.js)

## Quick Start (local)

1. Open a terminal in the repo root — the folder containing `mkdocs.yml`.
2. Activate the environment:
   - Already have the `geo_env` conda environment set up? `conda activate geo_env`
   - Starting fresh? No `requirements.txt` or `environment.yml` existed in this repo, so a minimal [`requirements.txt`](requirements.txt) was added from what `mkdocs.yml` needs:
     ```
     conda create -n geo_env python=3.11
     conda activate geo_env
     pip install -r requirements.txt
     ```
3. Serve locally: `mkdocs serve`, then open the URL it prints (usually `http://127.0.0.1:8000`). It live-reloads as you edit files.
4. Before committing: `mkdocs build --strict` — must exit 0. It catches broken links and orphaned nav entries that `serve` won't flag.

## Deploy

No GitHub Actions workflow exists — deploys are manual.

1. `mkdocs gh-deploy --force` — builds the site and force-pushes it to the `gh-pages` branch
2. `git push origin main` — backs up the source

## Project Structure

```
docs/
  index.md          # homepage
  projects/          # one file per project case study
  assets/img/         # images referenced by pages
  stylesheets/         # extra.css, project-page.css, workflow-stepper.css, carousel.css
  javascripts/         # workflow-stepper.js, carousel.js
  snippets/           # workflow-stepper.html reference markup
drafts/               # pages kept out of the build — see "Restoring a draft"
```

## Adding a new project page

Copy [`docs/projects/cadastral-mapbook-automation.md`](docs/projects/cadastral-mapbook-automation.md) as the template. A finished page has:

- `project-hero` — image (optional) → title → subtitle → `chips`
- `section-nav` — one link per section
- `case-section` — each section wrapped in its own card
- `wf-stepper` — workflow steps as interactive cards, not a plain list

Gotchas:

- No blank lines inside the `wf-stepper` HTML block — Python-Markdown breaks it apart otherwise
- Each panel's `id="wf-pN"` must be unique on the page and match its toggle button's `aria-controls`
- Escape `&` as `&amp;` inside HTML (titles, headings)
- Add the new page to `mkdocs.yml`'s `nav:` and to the project grid in `docs/index.md`

## Components

**Workflow stepper** — [`workflow-stepper.css`](docs/stylesheets/workflow-stepper.css) / [`workflow-stepper.js`](docs/javascripts/workflow-stepper.js), reference markup in [`docs/snippets/workflow-stepper.html`](docs/snippets/workflow-stepper.html). A horizontal row of numbered, expandable cards connected by an animated dotted line. To add a step, copy one `<li class="wf-step">` block, bump the index and `wf-p` id, and pick a new icon.

**Image carousel** — [`carousel.css`](docs/stylesheets/carousel.css) / [`carousel.js`](docs/javascripts/carousel.js). A swipeable slide track with prev/next arrows, dots, and click-to-enlarge. To add a slide, copy one `<div class="carousel__slide" markdown>` block. With a single slide, the arrows and dots hide automatically.

## Images

- Filenames: lowercase-with-hyphens (some existing images predate this and don't follow it yet)
- PNG, roughly 1600px wide
- Under 500 KB
- No personal data — no owner names, no internal file paths visible in the image itself

## Restoring a draft

Pages in `drafts/` are kept out of the build. To restore one, e.g. `analytics-map.md`:

1. `git mv drafts/analytics-map.md docs/projects/analytics-map.md`
2. Add it back to `mkdocs.yml`'s `nav:` and to the project grid in `docs/index.md`
3. `mkdocs build --strict`
