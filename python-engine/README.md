# TerraWatch Python Engine

This directory contains the Python-based geoprocessing engine for TerraWatch.

The engine is designed to:

- ingest Sentinel-2 satellite imagery
- compute spectral indices and change detection
- vectorize detected mining sites
- generate PDF reports
- communicate results back to the NestJS backend via HTTP

## Quick start

1. Create a local `.env` file based on `.env.example`
2. Install dependencies with `pip install -r requirements.txt`
3. Start the service with `uvicorn main:app --reload --host 0.0.0.0 --port 8000`

## Endpoints

- `GET /health` — health check
- `POST /run` — start a pipeline run
- `POST /report` — generate a PDF report

## Notes

The Python engine is intentionally separated from the NestJS backend because raster processing and GeoTIFF handling are best supported in the Python ecosystem.
