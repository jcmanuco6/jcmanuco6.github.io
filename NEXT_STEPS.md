# Next Steps

## Done today

- Rewrote `cadastral-mapbook-automation.md`: renamed from `spatial-etl-pipeline.md`, new hero/content/styling, section cards, removed the redundant Role table
- Converted `cadastral-3d-pipeline.md` and `deep-learning-land-use-classification.md` to the `project-hero` / `chips` / `section-nav` / `case-section` / `wf-stepper` template, normalized `<svg>` icon attributes across pages
- Renamed `system-architecture.md` → `crim-cadastral-portal.md`, rewrote its content to match the template
- Replaced the workflow-step grid with the reusable workflow stepper component (`docs/stylesheets/workflow-stepper.css`, `docs/javascripts/workflow-stepper.js`) across all project pages
- Added the image carousel component (`docs/stylesheets/carousel.css`, `docs/javascripts/carousel.js`); built out `reality-capture.md`'s carousel to 4 slides (Parguera/Guánica maps + 2 Rincón classification tiles)
- Moved `analytics-map.md` to `drafts/` (kept out of the build) and removed its nav entry and homepage card
- Added a subtle Puerto Rico ridge-map background to the homepage hero
- Simplified and rewrote the homepage hero (new title, subtitle, eyebrow, CTA copy) and the About section body
- Made page headings consistent site-wide (`.md-typeset h1, h2`), removed unused `.at-a-glance` CSS
- Added `README.md` and `requirements.txt`; added a Conventions section to `CLAUDE.md`

## Tomorrow — waiting on images and a workflow from the office

- [ ] Copy new images into `docs/assets/img/` (lowercase-hyphen names, PNG ~1600px, <500 KB, no personal data)
- [ ] Add a hero carousel to `cadastral-mapbook-automation.md` (keep current image as slide 1)
- [ ] Add a hero carousel to `deep-learning-land-use-classification.md`
- [ ] Add the new office workflow (details coming tomorrow)
- [ ] Fix the CesiumJS Bootcamp Viewer demo: diagnose first (console errors, ion token URL restrictions, `navigation.instant`, container height, relative paths), propose the fix, wait for OK
- [ ] Check dark-mode contrast of the hero accent color
- [ ] Certifications page (see certifications prompt)
- [ ] Final: `mkdocs build --strict`, check every page on desktop + phone

## Go live (only after everything above is done)

- [ ] `mkdocs gh-deploy --force`
- [ ] `git push origin main`
- [ ] Check https://jcmanuco6.github.io/

## Open decisions

- CV vs Cadastral Mapping page (CV: PostGIS/GDAL/SQL, page: ArcPy/mapbook)
- Reality Capture: results stored on NAS or cloud GIS server?
