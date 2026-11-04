# Joan Colon — GIS & Geospatial Data Engineering Portfolio

A professional GIS and Data Engineering portfolio built with MkDocs Material, showcasing spatial ETL pipelines, 3D web mapping, and interactive dashboards.

## Live Demo

**[jcmanuco6.github.io](https://jcmanuco6.github.io/)**

## Tech Stack

- **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** — static site generator and theme
- **Python** — site tooling, build pipeline
- **CesiumJS** — interactive 3D geospatial visualization
- **HTML / CSS** — custom components (workflow steppers, image carousels, card grids)
- **Git / GitHub Pages** — version control and hosting

## Key Features

- **Interactive 3D CesiumJS demo** — a live, explorable 3D tileset viewer with building style switching (`/demos/cesium-session1/`)
- **Spatial case studies** — in-depth project write-ups including the Maui Commute Traffic Hotspot Analyzer and the Cadastral Mapping Automation pipeline, each with a step-by-step workflow breakdown
- **Visual Certifications grid** — an image-forward card layout showcasing completed coursework and credentials
- **Custom components** — a horizontal animated workflow stepper and a swipeable image carousel, built from scratch for this site

## Local Setup (Zero to Hero)

**1. Clone the repository**

```bash
git clone https://github.com/jcmanuco6/jcmanuco6.github.io.git
cd jcmanuco6.github.io
```

**2. Set up a Python environment**

```bash
conda create -n geo_env python=3.11
conda activate geo_env
```

**3. Install dependencies**

```bash
pip install -r requirements.txt
```

**4. Run the local dev server**

```bash
mkdocs serve
```

Open the URL it prints (usually `http://127.0.0.1:8000`). The site live-reloads as you edit files.

**5. Validate before committing**

```bash
mkdocs build --strict
```

This must exit with no errors — it catches broken internal links and orphaned navigation entries.

## Project Structure

```
docs/
  index.md              # homepage
  projects/             # one file per project case study
  demos/                # standalone interactive demos (e.g. CesiumJS viewer)
  certifications/       # certifications index + certificate files
  assets/
    img/                 # images referenced across pages
    gif/                 # animated GIFs
  cv/                    # resume PDF
  stylesheets/           # extra.css, project-page.css, workflow-stepper.css, carousel.css
  javascripts/           # workflow-stepper.js, carousel.js
drafts/                  # pages kept out of the build, not yet published
mkdocs.yml               # theme, nav, and markdown extension config
```

## Deployment

Deploys are manual — no CI/CD pipeline yet.

```bash
mkdocs gh-deploy --force
```

This builds the site and force-pushes it to the `gh-pages` branch, which GitHub Pages serves directly.

## Contact

- **LinkedIn:** [linkedin.com/in/jmcolon](https://linkedin.com/in/jmcolon)
- **Email:** [jcmanuco@gmail.com](mailto:jcmanuco@gmail.com)
