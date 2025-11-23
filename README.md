# AI No-Code Platform

## Project Structure

*   **apps/web**: Frontend application (Nuxt 3 + Vue 3 + Tailwind CSS)
*   **apps/api**: Backend application (NestJS)

## Prerequisites

*   Node.js (v18+)
*   pnpm (recommended) or npm

## Getting Started

### 1. Install Dependencies

Run this from the root directory:

```bash
pnpm install
# or
npm install
```

### 2. Install Packages for Specific Apps

To add a package to a specific application (e.g., `web` or `api`), use the `--filter` flag:

```bash
# Add a package to the frontend (web)
pnpm add <package-name> --filter web

# Add a package to the backend (api)
pnpm add <package-name> --filter api
```

Alternatively, you can navigate to the directory:

```bash
cd apps/web
pnpm add <package-name>
```

### 3. Start Development Servers

You can start the services separately:

**Frontend (Web):**
```bash
pnpm dev:web
# or
cd apps/web && pnpm dev
```
Access at: http://localhost:3000

**Backend (API):**
```bash
pnpm dev:api
# or
cd apps/api && pnpm start:dev
```
Access at: http://localhost:3001

## Troubleshooting

If you encounter issues with `oxc-parser` or native bindings during install:
1.  Try deleting `node_modules` and `pnpm-lock.yaml`.
2.  Run `pnpm install` again.
3.  Ensure you are on a supported architecture (Mac ARM64 is supported but sometimes requires a fresh install).
