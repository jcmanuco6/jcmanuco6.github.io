---
hide:
  - navigation
---
# 3D Cadastral Pipeline

**CityJSON → FME → OGC 3D Tiles → CesiumJS**

## Problem

<!-- TODO: one paragraph — who needed this and what they couldn't do before it existed.
     e.g. "County assessor's office needed to visually audit building height and
     year-built data across N parcels without opening individual CAD/GIS files." -->

## Data source

- Building geometry: CityJSON LOD1 <!-- TODO: source (county open data portal, LiDAR-derived, etc.) -->
- Attributes: parcel ID, master parcel ID, height (m), ground elevation (m), year built,
  total units, centroid X/Y, height source
- Projection: EPSG:6634 → reprojected to WGS84 for the web viewer

## Pipeline

1. CityJSON source data ingested and validated
2. FME workbench: geometry cleanup, attribute joins, coordinate transform (EPSG:6634 → WGS84)
3. Export to 3D Tiles (Cesium ion pipeline)
4. Served through CesiumJS with attribute-driven styling

<!-- TODO: swap in a real architecture diagram (Mermaid is supported — see
     docs/ideas-inspiration/design-ideas.md for the planned "System Architecture" page). -->

## Live demo

Color-by-height and color-by-year-built styling, click any building for its full
attribute table.

<iframe
  src="../../assets/cadastral-viewer.html"
  style="width:100%; height:600px; border:1px solid var(--md-default-fg-color--lightest); border-radius:8px;"
  loading="lazy">
</iframe>

!!! note "Running this yourself"
    The viewer above needs a Cesium ion access token scoped to this asset — append
    `?token=YOUR_TOKEN` to the iframe's `src`, or set `window.CESIUM_ION_TOKEN` before
    the page's script runs. Scope the token to this one asset ID in the
    [Cesium ion dashboard](https://ion.cesium.com/tokens) before publishing; a
    client-side token restricted this way is the supported pattern for public
    CesiumJS demos — it is not a server secret.

## Repo link

<!-- TODO: link the repo (or note if private/available on request) -->
