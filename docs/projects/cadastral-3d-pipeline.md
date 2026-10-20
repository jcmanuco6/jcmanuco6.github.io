---
hide:
  - navigation
---

<div class="project-hero" markdown>

# 3D Cadastral Digital Twin & Cloud Pipeline

<p class="project-subtitle">Automated end-to-end spatial ETL pipeline converting raw LiDAR point clouds and 2D building footprints into LoD1 CityJSON models and enterprise 3D streaming assets.</p>

<ul class="chips">
<li>Python</li>
<li>PDAL</li>
<li>Laspy</li>
<li>CityJSON</li>
<li>PyVista</li>
<li>Cesium 3D Tiles</li>
<li>ArcGIS SLPK</li>
<li>glTF</li>
</ul>

</div>

<nav class="section-nav">
<a href="#problem-statement">Problem Statement</a>
<a href="#data-technical-architecture">Data &amp; Technical Architecture</a>
<a href="#results-impact">Results &amp; Impact</a>
</nav>

<div class="case-section" markdown>

## Problem Statement

Manual 3D asset creation requires tedious desktop click-throughs and fails to scale when converting municipal LiDAR and flat 2D building footprints into interactive digital twins.

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
        <h3 class="wf-card__title">Raw LAZ Ingestion &amp; Ground Filtering</h3>
        <div class="wf-card__panel" id="wf-p1" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Ingested raw LAZ tile sets and 2D building vectors; executed automated ground classification and filtering via PDAL and Laspy.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p1"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M8 7l4-4 4 4"/><path d="M8 17l4 4 4-4"/><path d="M3 21h18"/></svg></span>
          <span class="wf-card__index">02</span>
        </div>
        <h3 class="wf-card__title">Normalized Height Extraction</h3>
        <div class="wf-card__panel" id="wf-p2" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Programmatically computed building heights above ground by comparing rooftop Z-max values against ground surface models.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p2"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/></svg></span>
          <span class="wf-card__index">03</span>
        </div>
        <h3 class="wf-card__title">CityJSON LoD1 Generation</h3>
        <div class="wf-card__panel" id="wf-p3" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Serialized extracted building volumes into structured LoD1 3D CityJSON prisms using <code>cjio</code>.</p>
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
        <h3 class="wf-card__title">Geometry Validation &amp; Compilation</h3>
        <div class="wf-card__panel" id="wf-p4" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Ran automated mesh verification via PyVista (PLY/OBJ) and compiled assets into a unified spatial repository.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p4"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
    <li class="wf-step">
      <article class="wf-card">
        <div class="wf-card__top">
          <span class="wf-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M4 15v4a2 2 0 002 2h12a2 2 0 002-2v-4"/></svg></span>
          <span class="wf-card__index">05</span>
        </div>
        <h3 class="wf-card__title">Multi-Format Export</h3>
        <div class="wf-card__panel" id="wf-p5" aria-hidden="true">
          <div class="wf-card__panel-inner">
            <p>Exported streaming-optimized formats including Cesium 3D Tiles, ArcGIS Scene Layers (.SLPK), and raw mesh packages.</p>
          </div>
        </div>
        <button type="button" class="wf-toggle" aria-expanded="false" aria-controls="wf-p5"><span class="wf-toggle__label">Details</span> <span class="wf-toggle__icon" aria-hidden="true">+</span></button>
      </article>
    </li>
  </ol>
</div>
</div>

<div class="case-section" markdown>

## Results & Impact

- Eliminated manual desktop bottlenecks, delivering a fully automated CLI-driven pipeline that scales 3D municipal asset production.
- Successfully embedded an interactive web demo featuring real color-by-height/year-built styling and full attribute table interrogation.

<iframe
  src="/projects/cadastral-demo/"
  style="width:100%; height:600px; border:1px solid var(--md-default-fg-color--lightest); border-radius:8px;"
  loading="lazy">
</iframe>

</div>
