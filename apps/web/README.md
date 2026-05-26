# TerraWatch Frontend

Vite + React + TypeScript dashboard for the TerraWatch platform.

This is the user-facing web application that displays mining site intelligence, interactive maps, risk zones, and report generation capabilities.

## Quick Start

### From the monorepo root

```bash
pnpm --filter web dev
```

### Or directly in this folder

```bash
cd apps/web
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:5173` by default.

## Environment

Copy `.env.example` to `.env` and fill in:

- `VITE_API_URL` — backend API root (e.g., `http://localhost:3001`)
- `VITE_MAPTILER_KEY` — MapTiler API key for basemaps (optional for dev)

## Available Scripts

```bash
pnpm dev            # Start Vite dev server with HMR
pnpm build          # Compile TypeScript and bundle for production
pnpm preview        # Preview production build locally
pnpm lint           # Run ESLint and fix issues
```

## Folder Structure

```
src/
├── components/      # Reusable UI components
│   ├── map/         # Map-related components
│   ├── panels/      # Side panels and modals
│   ├── topbar/      # Top navigation
│   └── ...
├── pages/           # Page-level components
├── hooks/           # React hooks (custom logic)
├── services/        # API client services
├── store/           # State management (Zustand/Context)
├── types/           # Local TypeScript types
├── utils/           # Helper functions
├── config/          # Configuration (map, API, etc.)
├── App.tsx          # Root component
├── main.tsx         # Vite entry point
└── index.css        # Global styles
```

## Shared Types

Domain types are defined in the monorepo's `@terra-watch/shared` package under `packages/shared`.

Import shared types in components and services:

```typescript
import type { MiningSite, RiskLevel, Report } from "@terra-watch/shared";
```

## Building

The build output goes to `dist/`. TypeScript compilation and Vite bundling are both run:

```bash
pnpm build
```

This runs `tsc -b && vite build`.

## Development

- HMR (Hot Module Replacement) is enabled by default in dev mode
- ESLint checks are integrated; run `pnpm lint` to fix issues
- Use TypeScript for type safety across components and services

## Further Reading

- [TerraWatch Project Documentation](../../TerraWatch_Project_Documentation.md)
- [Root README](../../README.md)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
