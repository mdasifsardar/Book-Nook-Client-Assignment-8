<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# BookNook

Next.js 16.4.3 App Router + React 19.3, written in **JavaScript (no TypeScript)**, styled with Tailwind CSS v4 and shadcn/ui (`base-nova`). The app is still the create-next-app scaffold; routes live in `src/app`.

## Commands

- `npm run dev` — Turbopack dev server at http://localhost:3000.
- `npm run lint` — runs bare `eslint` over the repo. This is the only automated check; there is no test runner, typecheck script, or CI.
- `npm run build` / `npm start` — production build and serve.

## Conventions and gotchas

- Use `.js` / `.jsx` only. `components.json` sets `"tsx": false`; do not introduce TypeScript or `.tsx` files.
- Path alias `@/*` maps to `src/*` (`jsconfig.json`).
- shadcn components use **`@base-ui/react` primitives, not Radix**. Add them with `npx shadcn@latest add <name>`; they land in `src/components/ui` with the `base-nova` style.
- Class merging uses the `cn` package (`import { cn } from "cn"`), re-exported from `@/lib/utils`. Do not add `clsx` or `tailwind-merge`.
- Tailwind v4 has **no `tailwind.config.*`**. Theme tokens and light/dark values live in `src/app/globals.css` under `@theme inline`, `:root`, and `.dark`; edit design tokens there. The Tailwind/Turbopack CSS loader is wired in `next.config.mjs` (`turbopack.rules`) — keep it.
- React Compiler is enabled (`reactCompiler: true` plus `babel-plugin-react-compiler` in devDependencies).
- `experimental.agentFeedback` is enabled, so `next dev` may inject additional managed `<!-- BEGIN:nextjs-... -->` blocks into this file. Keep those blocks and commit `AGENTS.md` with your changes.
- `README.md` is unmodified create-next-app boilerplate (it still references `app/page.js`); trust `package.json` scripts and the actual `src/app` layout instead.
