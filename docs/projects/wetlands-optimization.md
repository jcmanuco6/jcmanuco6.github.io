---
hide:
  - navigation
---

<div class="project-hero" markdown>

<a href="../../assets/img/wetlands-este-costa-vis-1950.png" target="_blank" rel="noopener"><img src="../../assets/img/wetlands-este-costa-vis-1950.png" alt="Wetlands dataset, Costa Este map view"></a>

# Wetlands Dataset Optimization & Web Publishing

<p class="project-subtitle">Optimizing large-scale geospatial datasets for high-performance web deployment across ArcGIS Online and GeoServer.</p>

<ul class="chips">
<li>Python</li>
<li>PostgreSQL/PostGIS</li>
<li>GeoPackage</li>
<li>GDAL</li>
<li>GeoServer</li>
<li>ArcGIS Online</li>
</ul>

</div>

<nav class="section-nav">
<a href="#problem">Problem</a>
<a href="#workflow">Workflow</a>
<a href="#results-impact">Results &amp; Impact</a>
</nav>

<div class="case-section" markdown>

## Problem

Large geographic databases (GDB) often become unwieldy and slow when deployed directly to web platforms. The challenge was to optimize a massive wetlands dataset to ensure fast rendering, data integrity, and seamless interoperability across ArcGIS Online and GeoServer without losing critical classification data.

</div>

<div class="case-section">
<h2 id="workflow">Workflow</h2>
<div class="wf-stepper" data-single="false">
  <div class="wf-stepper__head">
    <p class="wf-stepper__intro">Follow the process. Expand a step for the details.</p>
    <button type="button" class="wf-play" aria-pressed="true">Pause animation</button>
  </div>
  <ol class="wf-steps">
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></span>
          <span class="wf-card__index">01</span>
        </div>
        <h3 class="wf-card__title">Format Conversion</h3>
        <div class="wf-card__panel" id="wf-p1" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Migrated the heavy GDB into GeoPackage (GPKG) to drastically improve processing speeds and manipulation.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p1"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/></svg></span>
          <span class="wf-card__index">02</span>
        </div>
        <h3 class="wf-card__title">Spatial Tiling</h3>
        <div class="wf-card__panel" id="wf-p2" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Generated a spatial grid to segment the dataset into manageable quads for efficient processing.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p2"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/></svg></span>
          <span class="wf-card__index">03</span>
        </div>
        <h3 class="wf-card__title">Masking &amp; Filtering</h3>
        <div class="wf-card__panel" id="wf-p3" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Applied spatial masks to isolate wetland features and filtered out noise by setting a minimum area threshold.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p3"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 15l2 2 4-4"/></svg></span>
          <span class="wf-card__index">04</span>
        </div>
        <h3 class="wf-card__title">Attribute Validation</h3>
        <div class="wf-card__panel" id="wf-p4" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Used Python and PostGIS SQL queries to inspect and validate the <code>GeneralClass</code> field, confirming the presence of Estuarine and Palustrine wetland types. Verified data consistency across GPKG, GeoJSON, and Shapefile formats.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p4"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></span>
          <span class="wf-card__index">05</span>
        </div>
        <h3 class="wf-card__title">Web Optimization</h3>
        <div class="wf-card__panel" id="wf-p5" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Applied Visvalingam simplification and PostGIS procedures to reduce file size while maintaining geometric fidelity for web publishing.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p5"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
  </ol>
</div>

</div>

<div class="case-section" markdown>

## Results & Impact { #results-impact }

Delivered a highly optimized, interoperable dataset successfully deployed to AGOL and GeoServer. The pipeline maintained 100% data integrity across multiple export formats, enabling fast, responsive web mapping for environmental analysis.

</div>
