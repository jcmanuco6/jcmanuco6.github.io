---
hide:
  - navigation
---

<div class="project-hero" markdown>

<div class="carousel" aria-label="Project images" markdown>
<div class="carousel__track" markdown>

<div class="carousel__slide" markdown>

![Green-light theme map of La Parguera and Guánica](../assets/img/parguera-guanica-green-light-theme-map.png)

Green-light theme map, La Parguera – Guánica
{ .carousel__caption }

</div>

<div class="carousel__slide" markdown>

![Multi-AOI map sheet of La Parguera](../assets/img/Parguera_new_multi_aoi.png)

Multi-AOI map sheet · [Open full PDF](../assets/img/Parguera_new_multi_aoi.pdf)
{ .carousel__caption }

</div>

<div class="carousel__slide" markdown>

![Reclassified imagery tile, Rincón](../assets/img/Rincon-ReClass-imagery-tile-2023-04-12-02-47-am.png)

Reclassified imagery tile, Rincón
{ .carousel__caption }

</div>

<div class="carousel__slide" markdown>

![Classification review of an imagery tile, Rincón](../assets/img/rincon-imagery-tile-class-review.png)

Classification review of an imagery tile, Rincón
{ .carousel__caption }

</div>

</div>
<button type="button" class="carousel__btn carousel__btn--prev" aria-label="Previous image">‹</button>
<button type="button" class="carousel__btn carousel__btn--next" aria-label="Next image">›</button>
<div class="carousel__dots"></div>
</div>

# Reality Capture Workflow

<p class="project-subtitle">Deep learning land cover classification of drone and satellite imagery to map human activity and recreation pressure on Puerto Rico's coast.</p>

<ul class="chips">
<li>Drone Imagery</li>
<li>Satellite Imagery</li>
<li>Deep Learning</li>
<li>Land Cover</li>
<li>ArcGIS Pro</li>
<li>Open Source</li>
</ul>

</div>

<nav class="section-nav">
<a href="#problem">Problem</a>
<a href="#objective">Objective</a>
<a href="#data">Data</a>
<a href="#pipeline">Pipeline</a>
<a href="#result">Result</a>
<a href="#links">Links</a>
</nav>

<div class="case-section" markdown>

## Problem

Local government needed spatial evidence of anthropogenic activity and recreation pressure in Puerto Rico's coastal zone to support planning and resource preservation decisions.

</div>

<div class="case-section" markdown>

## Objective

Classify high-resolution satellite and drone imagery for each study area, choose the right land cover classes through data analysis, validate them with field data, and calculate the area of each class. The deliverables were a GIS layer for each area of interest, delivered as Shapefile or GeoJSON.

</div>

<div class="case-section" markdown>

## Data

- High-resolution satellite imagery
- Drone (UAV) imagery
- Field data for class validation
- Coverage: coastal study areas in Puerto Rico, including ncón and La Parguera – Guánica

</div>

<div class="case-section">
<h2 id="pipeline">Pipeline</h2>
<p>A hybrid workflow combining open-source tools and ArcGIS Pro, built around deep learning classification.</p>
<div class="wf-stepper" data-single="false">
  <div class="wf-stepper__head">
    <p class="wf-stepper__intro">Follow the process. Expand a step for the details.</p>
    <button type="button" class="wf-play" aria-pressed="true">Pause animation</button>
  </div>
  <ol class="wf-steps">
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg></span>
          <span class="wf-card__index">01</span>
        </div>
        <h3 class="wf-card__title">Imagery Input</h3>
        <div class="wf-card__panel" id="wf-p1" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Collected high-resolution satellite and drone imagery for each study area as the raster input for the workflow.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p1"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/></svg></span>
          <span class="wf-card__index">02</span>
        </div>
        <h3 class="wf-card__title">Segmentation &amp; Class Design</h3>
        <div class="wf-card__panel" id="wf-p2" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Split the imagery into segments and analyzed the data to decide which land cover classes to map.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p2"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l3 3.5M7 17l3-3.5M14 10.5L17 7M14 13.5L17 17"/></svg></span>
          <span class="wf-card__index">03</span>
        </div>
        <h3 class="wf-card__title">Deep Learning Classification</h3>
        <div class="wf-card__panel" id="wf-p3" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Classified the segments with a deep learning methodology, combining open-source tools with ArcGIS Pro.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p3"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span>
          <span class="wf-card__index">04</span>
        </div>
        <h3 class="wf-card__title">Reclassification &amp; QC</h3>
        <div class="wf-card__panel" id="wf-p4" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Refined the first results through reclassification, validated the classes with field data, and checked integrity, completeness and agreed standards.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p4"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M12 11v6"/><path d="M9 14l3 3 3-3"/></svg></span>
          <span class="wf-card__index">05</span>
        </div>
        <h3 class="wf-card__title">Area Calculation &amp; Export</h3>
        <div class="wf-card__panel" id="wf-p5" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Calculated the area of each class, exported one GIS layer per area of interest as Shapefile or GeoJSON, and stored the results on the NAS server.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p5"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
  </ol>
</div>
</div>

<div class="case-section" markdown>

## Result

- Completed the full segment workflow, from raster input to final vector output.
- Classified and refined the segments, then validated them through quality control.
- Delivered GIS layers for each area of interest as Shapefile or GeoJSON, ready for desktop and web GIS.
- Stored the dataset in an organized folder structure on the NAS server for easy access.
- Gave local government processed coastal land cover data to support planning and preservation decisions.

</div>

<div class="case-section" markdown>

## Links

- [Story Map](https://storymaps.arcgis.com/stories/d25ee620cdfe4e52853f89161dc8d1b5)

</div>
