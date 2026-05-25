# TerraWatch

TerraWatch is a geospatial intelligence platform for detecting, assessing, and reporting artisanal mining activity using satellite imagery, PostGIS-backed analytics, and a NestJS API.

## Project Overview

The platform is designed to replace manual, analyst-heavy GIS workflows with a browser-based system that can:

- ingest Sentinel-2 imagery and detect disturbed land
- compute contamination risk zones and community exposure
- surface site-level intelligence on a dashboard
- generate reports and alerts for field teams and decision makers
- persist spatial and operational data in PostgreSQL/PostGIS

The repository contains two primary applications:

- Backend: NestJS + TypeScript + Drizzle ORM + PostgreSQL/PostGIS
- Frontend: Vite + React + TypeScript

The larger product vision and technical design are documented in [TerraWatch_Project_Documentation.md](TerraWatch_Project_Documentation.md).

## Repository Structure

- apps/server
  - NestJS backend
  - Drizzle schema definitions
  - environment validation and configuration
  - global filters, guards, and interceptors
  - module-based API for alerts, analytics, detections, imagery, pipeline, reports, risk, scheduler, sites, and study areas
- apps/web
  - Vite React frontend
  - starter dashboard and assets
- pnpm-workspace.yaml
  - workspace configuration for apps and packages

## Technology Stack

### Backend

- Node.js
- NestJS 11
- TypeScript
- Drizzle ORM
- PostgreSQL/PostGIS
- Helmet
- class-validator / class-transformer
- Swagger
- Jest for tests

### Frontend

- Vite
- React 19
- TypeScript
- ESLint

## Current Backend Capabilities

The current backend scaffold includes:

- global configuration loading and environment validation
- database connectivity via a pooled Postgres client
- a global exception filter
- a logging interceptor
- a JWT guard placeholder
- modules for:
  - alerts
  - analytics
  - detections
  - health
  - imagery
  - pipeline
  - reports
  - risk
  - scheduler
  - sites
  - study areas

## Current Frontend Capabilities

The current frontend scaffold includes:

- Vite React application shell
- TypeScript project configuration
- starter CSS and asset structure
- basic app entry point

## Installation

### Prerequisites

- Node.js 20+
- pnpm
- PostgreSQL/PostGIS instance

### Install dependencies

From the repository root:

pnpm install

If you need to approve native build scripts for the workspace, run:

pnpm approve-builds

## Environment Variables

The backend validates environment variables during startup using its config module.

Required or commonly used variables:

- PORT
- NODE_ENV
- DATABASE_URL
- DB_SSL
- FRONTEND_URL
- PYTHON_ENGINE_URL
- ENABLE_SWAGGER

Recommended workflow:

1. Create a local environment file for apps/server
2. Set DATABASE_URL to your Postgres connection string
3. Set NODE_ENV to development or production
4. Set FRONTEND_URL to your frontend origin
5. Set PYTHON_ENGINE_URL if your geoprocessing service is running separately

## Running the Project

### Backend

From the repository root:

pnpm --filter server start:dev

If you prefer to work directly in the backend directory:

cd apps/server
pnpm start:dev

### Frontend

From the repository root:

pnpm --filter web dev

Or directly:

cd apps/web
pnpm dev

## API Surface

The backend sets a global API prefix of /api during bootstrap.

Swagger is enabled by default unless ENABLE_SWAGGER is set to false.

Typical local routes include:

- /api
- /api/docs
- /api/health

## Testing

### Backend

From apps/server:

pnpm test

pnpm test:e2e

### Frontend

From apps/web:

pnpm build

pnpm lint

## Build

### Backend

From apps/server:

pnpm build

### Frontend

From apps/web:

pnpm build

## Development Notes

- The frontend and backend are managed as separate apps under the pnpm workspace.
- The backend uses Drizzle for schema management and Postgres access.
- The backend currently exposes a global filter, logging interceptor, and validation pipe at startup.
- The root documentation in [TerraWatch_Project_Documentation.md](TerraWatch_Project_Documentation.md) contains the full product, architecture, and data flow narrative.

## Documentation

- [TerraWatch_Project_Documentation.md](TerraWatch_Project_Documentation.md)
- [TerraWatch_Folder_Structure.md](TerraWatch_Folder_Structure.md)
- apps/server/README.md
- apps/web/README.md

## Deployment

This repository is currently scaffolded for local development and iterative backend/frontend integration.

A production-ready deployment plan should include:

- environment-specific configuration for DATABASE_URL and FRONTEND_URL
- secure secret management for all runtime secrets
- a Postgres instance with PostGIS enabled
- a Python geoprocessing service if the satellite pipeline is being exercised
- a build pipeline for both apps
- CORS and host validation for frontend access

## Contributing

1. Create a feature branch
2. Make focused changes
3. Run the relevant build and test commands
4. Open a pull request with a clear summary

## Current Status

The repository contains a working scaffold for the backend and frontend, plus project documentation and a pnpm workspace configuration. The main follow-up work is to connect the data pipeline end-to-end and finalize runtime configuration for the production environment.
