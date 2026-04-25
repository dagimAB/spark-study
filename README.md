# Spark Study

Spark Study is a Vite + React + TypeScript UI for a flashcard-style learning workspace (deck list, card editor with live preview, and a basic study/flip flow).

This repository currently focuses on the **front-end experience**. Most data is **in-memory** (refresh will reset decks/cards/stats) until a persistence layer is added.

## Requirements

- Node.js (recommended: Node 20+)
- npm (comes with Node)

## Quick start (run the UI)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Common commands

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

## What’s implemented in the UI

- Deck list + selection
- Add deck / add card
- Card editor (front/back) with simple tool buttons (adds formatted snippets)
- Study mode (flip card + “Know” / “Review again” actions)
- Theme toggle (light/dark)
- Basic in-page undo/redo for card edits (session-only)

## Notes / current limitations

- No persistence yet (decks/cards reset on refresh)
- No authentication or syncing
- “Spaced review”, “version history”, and “30 days recovery” are UI concepts that need real data + logic

See the implementation checklist in task.md for the next steps toward a production-ready app.

## Tech stack

- Vite
- React 18 + TypeScript
- Tailwind CSS
- shadcn/ui components (Radix UI primitives)
- React Router
- TanStack Query (installed and wired in the app shell)

## Project structure

- `src/pages/Index.tsx`: main UI screen (decks, editor, study)
- `src/App.tsx`: router + providers
- `src/components/ui/`: reusable UI components
