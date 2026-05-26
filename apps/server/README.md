# TerraWatch Backend

NestJS-based REST API for the TerraWatch platform.

This service provides geospatial intelligence endpoints for detecting, assessing, and reporting artisanal mining activity. It orchestrates the Python geoprocessing engine, manages the PostGIS database, and exposes a RESTful API consumed by the React frontend.

## Quick Start

### From the monorepo root

```bash
pnpm --filter server start:dev
```

### Or directly in this folder

```bash
cd apps/server
pnpm install
pnpm start:dev
```

## Environment

Copy `.env.example` to `.env` and fill in:

- `DATABASE_URL` — PostgreSQL connection string (with PostGIS)
- `PORT` — server port (default 3000)
- `NODE_ENV` — development or production
- `PYTHON_ENGINE_URL` — URL of the Python geoprocessing service
- `ENABLE_SWAGGER` — true or false (default true)

## Available Scripts

```bash
pnpm start              # Run in production mode
pnpm start:dev         # Run in watch mode
pnpm start:debug       # Run with debugger attached
pnpm start:prod        # Run compiled dist/ in production mode

pnpm build             # Compile TypeScript
pnpm lint              # Run ESLint and fix issues
pnpm format            # Format code with Prettier

pnpm test              # Run unit tests with Jest
pnpm test:watch        # Run tests in watch mode
pnpm test:cov          # Generate coverage report
pnpm test:e2e          # Run end-to-end tests
```

## Architecture

The backend is organized by feature modules:

- `alerts/` — Alert detection and delivery
- `analytics/` — Trends and reporting data
- `detections/` — Change detection results
- `health/` — Health check endpoints
- `imagery/` — Satellite scene management and tile serving
- `pipeline/` — Orchestration of the Python geoprocessing engine
- `reports/` — PDF report generation
- `risk/` — Risk zone computation and contamination analysis
- `scheduler/` — Cron jobs for automated pipeline runs
- `sites/` — Mining site CRUD and queries
- `study-areas/` — Study area management

## Shared Types

Domain types are defined in the monorepo's `@terra-watch/shared` package under `packages/shared`.

Import shared types in your services:

```typescript
import type { MiningSite, RiskLevel, Detection } from '@terra-watch/shared';
```

## Database

The backend uses Drizzle ORM with PostgreSQL + PostGIS.

Schema definitions are in `src/db/schema/`.

Configuration is in `drizzle.config.ts`.

## API Documentation

Swagger documentation is available at `/api/docs` when `ENABLE_SWAGGER=true`.

## Testing

Tests follow the pattern `*.spec.ts` for unit tests and `*.e2e.spec.ts` for integration tests.

```bash
pnpm test           # All tests
pnpm test:watch     # Watch mode
pnpm test:e2e       # End-to-end tests
```

## Further Reading

- [TerraWatch Project Documentation](../../TerraWatch_Project_Documentation.md)
- [Root README](../../README.md)
- [NestJS Docs](https://docs.nestjs.com)
