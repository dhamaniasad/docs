# Repository Guidelines

## Project Structure & Module Organization
- `docs.json`: Mintlify site config, navigation, theme, redirects.
- Content: MD/MDX pages under `getting-started/`, `integrations/`, `features/`, `platforms/`, `api-reference/`, `teams/`, plus `index.mdx` and `feedback.mdx`.
- Assets: images in `images/`, icons/logos in `logo/` and `public/`.
- Components: shared MDX components in `components/`.

## Build, Test, and Development Commands
- `npm i -g mint`: installs the Mintlify CLI.
- `mint dev`: runs a local docs server at `http://localhost:3000`.
- `mint update`: updates the CLI if you hit local issues.
- Optional: `mint build` outputs a static build (useful for CI checks).

## Coding Style & Naming Conventions
- Write concise, task‑oriented docs. Prefer short sections and concrete examples.
- Use sentence‑case headings; keep filenames kebab‑case (e.g., `how-it-works.mdx`).
- Link internal pages by path (e.g., `[Intro](/getting-started/introduction)`).
- Keep lines readable (~100 chars) and wrap long code blocks.
- Images: place in `images/` and reference with absolute paths (e.g., `/images/foo.png`).

## Testing Guidelines
- No unit tests in this repo. Validate by running `mint dev` and checking:
  - Sidebar/nav items match `docs.json`.
  - Links resolve, images load, and code blocks render.
  - Redirects defined in `docs.json` behave as expected.

## Commit & Pull Request Guidelines
- Commits: use clear, imperative messages (e.g., `update dashboard page`, `fix broken link`).
- PRs: include a brief summary, screenshots for visual changes, and links to any related issues/feedback.
- Keep diffs focused; group unrelated edits into separate PRs.

## Contributor Checklists & Agent Notes
- Always reference and follow `CLAUDE.md` alongside this guide. It includes repo‑specific checklists (e.g., updating `lastUpdated` fields and cross‑referencing the main MemoryPlugin repo) that PRs are expected to satisfy.

## Security & Configuration Tips
- Do not include secrets or API keys in docs/examples. Use placeholders like `YOUR_API_KEY`.
- Email independence: the email you use for MemoryPlugin does not need to match emails used in ChatGPT, Claude, TypingMind, or other tools. Access is tied to your MemoryPlugin account/API credentials, not external emails.

## Architecture Overview
- The site is powered by Mintlify; content is Markdown/MDX rendered via the Mintlify CLI. Navigation, theming, analytics, and redirects are centrally managed in `docs.json`. OpenAPI content is sourced from `openapi.json` under `api-reference/`.
