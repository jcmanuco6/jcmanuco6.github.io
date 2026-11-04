---
hide:
  - navigation
---

<div class="project-hero" markdown>

# Deep Learning Parcel Land-Use Classification

<p class="project-subtitle">Automated cadastral land-use classification and seed labeling pipeline using DuckDB, GeoParquet, and ArcGIS Pro's PyTorch deep learning framework.</p>

<ul class="chips">
<li>DuckDB</li>
<li>GeoParquet</li>
<li>Python</li>
<li>PyTorch</li>
<li>ArcGIS Pro 3.5 (Image Analyst)</li>
<li>GDAL</li>
<li>Mapshaper</li>
</ul>

</div>

<nav class="section-nav">
<a href="#problem-statement">Problem Statement</a>
<a href="#data-technical-architecture">Data &amp; Technical Architecture</a>
<a href="#results-impact">Results &amp; Impact</a>
</nav>

<div class="case-section" markdown>

## Problem Statement

Manual parcel land-use classification and structural updates for county property assessment are slow, labor-intensive, and lack standardized training data sets when scaling across regional municipal archives.

</div>

<div class="case-section">
<h2 id="data-technical-architecture">Data &amp; Technical Architecture</h2>
<div class="wf-stepper" data-single="false">
  <div class="wf-stepper__head">
    <p class="wf-stepper__intro">Follow the process. Expand a step for the details.</p>
    <button type="button" class="wf-play" aria-pressed="true">Pause animation</button>
  </div>
  <ol class="wf-steps">
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg></span>
          <span class="wf-card__index">01</span>
        </div>
        <h3 class="wf-card__title">Spatial Ingestion &amp; AOI Sub-Sampling</h3>
        <div class="wf-card__panel" id="wf-p1" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Ingested county-level raw GeoParquet parcel datasets into a local DuckDB workspace (<code>parcels-workspace.db</code>) and sub-sampled an Area of Interest (AOI) subset across Makawao-Pukalani-Kula using spatial SQL and Mapshaper.</p>
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
        <h3 class="wf-card__title">Schema Modification &amp; Seed Categorization</h3>
        <div class="wf-card__panel" id="wf-p2" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Engineered a schema-modification pipeline in DuckDB, appending a short-integer <code>class_ID</code> field to map zoning distributions into 4 distinct land-use training classes (Residential, Agriculture, Sealed/Roads, Open Space/Forestry).</p>
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
        <h3 class="wf-card__title">GPU-Accelerated Chip Generation &amp; Training</h3>
        <div class="wf-card__panel" id="wf-p3" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Configured ArcGIS Pro's Image Analyst extension with an <code>arcgis_deeplearning</code> custom Conda clone (PyTorch, deep-learning-essentials 3.5, NVIDIA Quadro RTX 4000 GPU acceleration) to export 256×256 training chips (TIFF format) for model training via the <code>Train Deep Learning Model</code> tool (<code>.dlpk</code> output).</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p3"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
  </ol>
</div>
</div>

<div class="case-section" markdown>

## Results & Impact

- Established a robust, reproducible spatial ETL and active learning preparation pipeline that bridges open-source spatial DuckDB workflows with Esri's deep learning framework, dramatically cutting dataset preparation overhead for municipal land-use modeling.

</div>
