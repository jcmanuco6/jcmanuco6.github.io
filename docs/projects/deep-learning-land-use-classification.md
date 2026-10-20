---
hide:
  - navigation
---
# Deep Learning Parcel Land-Use Classification

**Automated cadastral land-use classification and seed labeling pipeline using DuckDB, GeoParquet, and ArcGIS Pro's PyTorch deep learning framework.**

<div class="at-a-glance" markdown>

| | |
|---|---|
| **Role** | Geospatial Data Engineer & Developer |
| **Deliverable** | Trained Model Package (.dlpk), Active Learning Training Chips, Spatial SQL Pipeline |

<ul class="skills">
<li>DuckDB</li>
<li>GeoParquet</li>
<li>Python</li>
<li>PyTorch</li>
<li>ArcGIS Pro 3.5 (Image Analyst)</li>
<li>GDAL</li>
<li>Mapshaper</li>
</ul>

</div>

## Problem Statement

Manual parcel land-use classification and structural updates for county property assessment are slow, labor-intensive, and lack standardized training data sets when scaling across regional municipal archives.

## Data & Technical Architecture

??? note "Step 1 — Spatial Ingestion & AOI Sub-Sampling"
    Ingested county-level raw GeoParquet parcel datasets into a local DuckDB workspace (`parcels-workspace.db`) and sub-sampled an Area of Interest (AOI) subset across Makawao-Pukalani-Kula using spatial SQL and Mapshaper.

??? note "Step 2 — Schema Modification & Seed Categorization"
    Engineered a schema-modification pipeline in DuckDB, appending a short-integer `class_ID` field to map zoning distributions into 4 distinct land-use training classes (Residential, Agriculture, Sealed/Roads, Open Space/Forestry).

??? note "Step 3 — GPU-Accelerated Chip Generation & Training"
    Configured ArcGIS Pro's Image Analyst extension with an `arcgis_deeplearning` custom Conda clone (PyTorch, deep-learning-essentials 3.5, NVIDIA Quadro RTX 4000 GPU acceleration) to export 256×256 training chips (TIFF format) for model training via the `Train Deep Learning Model` tool (`.dlpk` output).

## Results & Impact

- Established a robust, reproducible spatial ETL and active learning preparation pipeline that bridges open-source spatial DuckDB workflows with Esri's deep learning framework, dramatically cutting dataset preparation overhead for municipal land-use modeling.
