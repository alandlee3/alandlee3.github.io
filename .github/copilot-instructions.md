<!-- Copilot instructions for alandlee3.github.io (Create React App) -->

# Copilot / AI Assistant Guidance

Overview

- This is a small single-page site bootstrapped with Create React App (see `package.json`).
- Routing uses `HashRouter` (see `src/index.js`) and route definitions live in `src/App.js`.

Quick tasks & commands

- Start dev server: `npm start` (runs `react-scripts start`).
- Build for production: `npm run build` (outputs to `build/`).
- Run tests: `npm test`.
- Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages -d build`).

Architecture & key patterns

- React + react-router-dom v6 with `HashRouter` (see `src/index.js`). Use hash paths in raw anchors (e.g. `/#/notes/...`) and prefer `<Link to="/path">` for internal navs (see `src/NavButton.js` and `src/NavBar.js`).
- Routes and page components are defined in `src/App.js` (e.g. `Route path="/notes/6.036" element={<Notes course="6.036" />}`).
- Per-component CSS files live next to components (e.g. `src/NavBar.css`, `src/Notes.css`). Follow that convention.
- Components are simple functional components with default exports. Keep changes minimal and local to the affected component file.

Static assets and Notes PDFs

- Static PDFs and other non-JS assets are served from `public/Notes/` (and copied into `build/Notes/` on build). `src/Notes.js` references them via relative paths (e.g. `src="./Notes/Introduction to ML.pdf"` inside an `<iframe>`). When adding or renaming PDFs, update `public/Notes/` and the conditionals in `src/Notes.js`.

Project-specific conventions & gotchas

- Hash-based routing: `HashRouter` is used to keep client routing working on GitHub Pages. Use `/#/...` when linking with plain anchors; `Link` works normally.
- Routing vs anchors: Some links in `src/Notes.js` are plain anchors using `href="/#/notes/6.006"` — preserve hash style when adding anchors that should load client routes.
- No TypeScript; keep JavaScript and default exports. Avoid introducing TS unless you convert project and adjust build config.
- Bundle/file names are hashed in `build/static/` — do not hardcode those filenames.

Examples to reference while editing

- Routes: [src/App.js](src/App.js#L1-L40)
- Router setup: [src/index.js](src/index.js#L1-L40)
- Nav patterns: [src/NavBar.js](src/NavBar.js#L1-L40) and [src/NavButton.js](src/NavButton.js#L1-L40)
- Notes & static PDFs: [src/Notes.js](src/Notes.js#L1-L200) and `public/Notes/`
- Build & deploy: [package.json](package.json#L1-L120)

When changing behavior

- If you add routes, update both `src/App.js` (route) and any navigation UI in `src/NavBar.js`.
- If you add or rename static PDFs, put them under `public/Notes/` and update `src/Notes.js` or refactor `Notes` to use a programmatic mapping (preferred if adding many files).

Testing & debugging tips

- Dev server: open http://localhost:3000 after `npm start`.
- Console warnings appear in browser devtools and terminal; unit tests use Create React App default testing setup.
- To debug routing issues on GitHub Pages, ensure `homepage` in `package.json` is set correctly (already set to `https://alandlee3.github.io`).

If you need clarification

- Ask the repo owner whether new static assets should be added under `public/Notes/` or hosted elsewhere.
- If you plan to change routing strategy (HashRouter → BrowserRouter), note this requires deployment config changes for GitHub Pages.

Please review and tell me if any sections need more examples or deeper detail.
