CLAUDE.md
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

Tradeoff: These guidelines bias toward caution over speed. For trivial tasks, use judgment.

1. Think Before Coding
   Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

State your assumptions explicitly. If uncertain, ask.
If multiple interpretations exist, present them - don't pick silently.
If a simpler approach exists, say so. Push back when warranted.
If something is unclear, stop. Name what's confusing. Ask.

2. Simplicity First

Minimum code that solves the problem. Nothing speculative.

No features beyond what was asked.
No abstractions for single-use code.
No "flexibility" or "configurability" that wasn't requested.
No error handling for impossible scenarios.
If you write 200 lines and it could be 50, rewrite it.
Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

3. Surgical Changes
   Touch only what you must. Clean up only your own mess.

When editing existing code:

Don't "improve" adjacent code, comments, or formatting.
Don't refactor things that aren't broken.
Match existing style, even if you'd do it differently.
If you notice unrelated dead code, mention it - don't delete it.
When your changes create orphans:

Remove imports/variables/functions that YOUR changes made unused.
Don't remove pre-existing dead code unless asked.
The test: Every changed line should trace directly to the user's request.

4. Goal-Driven Execution
   Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

"Add validation" → "Write tests for invalid inputs, then make them pass"
"Fix the bug" → "Write a test that reproduces it, then make it pass"
"Refactor X" → "Ensure tests pass before and after"
For multi-step tasks, state a brief plan:

1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

These guidelines are working if: fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

**Technical conventions:** The following section mirrors `.cursor/rules/claude-conventions.mdc` (Cursor rules). When changing conventions, update both files so they stay identical. Covers `.ts`/`.tsx` import order, React/hooks patterns, and SCSS/token rules (previously in separate `globs` rules).

# Project conventions (Next.js)

## Stack

- Next.js 15, App Router, TypeScript, React 19.

## Imports and aliases

- The `@/` alias maps to `./src/` (see `tsconfig.json`).
- Prefer `@/components/...`, `@/hooks/...`, `@/lib/...`, `@/styles/...` when a dedicated path entry exists.
- Avoid deep relative imports (`../../../`) when the folder has a barrel (`index.ts`).

### Order in `.ts` / `.tsx`

1. **`'use client'`** on the first line when the file uses hooks, local state, or client-only APIs (see also **Components and `"use client"`**).
2. **External packages** first (`react`, `next/*`, other libs), then a blank line.
3. **`@/`** — always use the alias. Sort `@/` imports **alphabetically by full path** (cleaner diffs, fewer visual cycles).
4. **Relative imports last**: shared `@/styles/...` globals or partials, then **`./component-name.scss`** at the **end** (after all JS/TS).
5. **`import type`** for type-only imports; may sit next to the related module or in the `@/` group while keeping alphabetical order.

```tsx
// Order example
'use client';

import { useMemo, useState } from 'react';

import { ProjectCard } from '@/components/shared/ProjectCard';
import { useI18n } from '@/contexts/I18nContext';
import type { Project } from '@/lib/github';

import '@/styles/partials/buttons.scss';

import './projects-page.scss';
```

## Folder layout

- **App Router**: `src/app/` (layouts, pages).
- **UI** under `src/components/`: feature folders in **PascalCase** (e.g. `ProjectsPage/`, `ContactPage/`).
- Feature files in paired **kebab-case**: `component-name.tsx` + `component-name.scss`.
- Subcomponents in **PascalCase** subfolders (e.g. `ContactTerminal/`, `HeroScene/`).
- **Shared**: `src/components/shared/` (e.g. `SvgIcons/`, `ProjectCard/`). Do not import feature A inside feature B without moving code to `shared/`.
- **Other**: `src/contexts/`, `src/hooks/`, `src/lib/`, `src/styles/` (tokens, partials, mixins, `globals.scss`).

## Components and `"use client"`

- Server Components by default.
- `"use client"` only when needed: local state, event handlers, or browser APIs (effects/layout that depend on the DOM).
- Place the directive on the **first line** of the file that needs it.

## React and hooks

- **Rules of Hooks**: call hooks only at the top level of a function component or custom hook — never inside conditions, loops, or nested plain functions.
- **Lists**: give each item a **stable `key`** (id/slug). Avoid array index as `key` when order can change or items are inserted/removed.
- **`useEffect`**: keep effects focused; list **all reactive values** used inside in the dependency array (or justify an intentional omission with a short comment). Return a **cleanup** for subscriptions, listeners, timers, and `requestAnimationFrame` ids.
- **Derived data**: prefer computing values during render when they follow from props/state; avoid mirroring the same information in extra state.
- **`useMemo` / `useCallback`**: use when they **prevent real work** (expensive computation, stable reference for a memoized child) — not by default on every handler.
- **`useRef`**: use for DOM nodes and mutable values that should **not** trigger re-renders when updated.
- **Custom hooks**: follow the **`use`** + **camelCase** filename rule (`useScrollSpy.ts`), export a single hook (or a small cohesive set), and keep side effects and browser APIs inside hooks or client components — see **Hooks** for placement under `src/hooks/`.

## Variants (CVA)

- Use **CVA** (`class-variance-authority`) for component variants. Add the dependency when a component needs CVA and the package is not yet in the project.
- For a few conditional classes, **`cn()`** alone is enough; add CVA when several named variants share a stable prop API.

## Classes (`cn`)

- Merge conditional classes with **`cn()`** from `@/lib/utils` (built on **clsx**). If Tailwind is added later, you may extend the helper with `tailwind-merge` in the same file.

## Styles (SCSS)

- **No external SCSS/CSS utility frameworks** (Tailwind, Bootstrap Sass stacks, similar) for component styling: use co-located `*.scss`, tokens under `src/styles/tokens/`, and project partials/mixins — not third-party class-based styling layers.
- **No `@apply`** except in `src/styles/globals.scss`.
- **Mobile-first**; breakpoint naming aligned with **sm**, **md**, **lg**, **xl** (Sass variables, media queries, or tokens under `src/styles/`, following existing patterns).

### `@use` and paths

- Use **`@use`** (not `@import`). Breakpoint tokens: `@use '../../styles/tokens/breakpoints' as bp;` (adjust `../` depth to the file location).
- Optional mixins: `src/styles/mixins/_responsive.scss` — `mobile` = `max-width: $bp-mobile`, `desktop` = above that.

### Responsive

- **Preferred**: base styles for the **narrowest** viewport; scale up with **`min-width`** or `@include desktop { … }` when using the mixin.
- **Legacy code** that already uses **`@media (max-width: bp.$bp-mobile)`** / **`bp.$bp-md`**: keep the same pattern within that file so one component does not mix two models.

## Tokens

- Prefer **custom tokens** in `src/styles/` (variables, partials) instead of repeated raw values.
- Colors, text, and surfaces: **`var(--…)`** from `src/styles/tokens/_colors.scss` (`data-theme` themes). Do not introduce stray hex/rgb unless briefly documented as an exception.
- Spacing: **`var(--space-*)`** from `tokens/_spacing.scss`. Radii and borders: **`var(--border-radius-*)`**, **`var(--border-width-*)`**. Global typography/layout: **`var(--font-mono)`**, **`var(--font-sans)`**, and variables from `tokens/_layout.scss` where appropriate.
- **New reusable values** → add them to the right token file and use the variable instead of repeated magic numbers.

## Hooks

- Location: `src/hooks/`.
- File name: **`use`** prefix + **camelCase** for the rest (e.g. `useScrollSpy.ts`, `useMediaQuery.ts`).
- Import: `@/hooks/useScrollSpy` (or the matching name).

## File names

- Feature components and pages: paired **kebab-case** `.tsx` + `.scss`.
- Feature folders: **PascalCase**.

## Exports (barrels)

- Folders with a public API: **`index.ts`** with `export { X } from './x'`.
- Import from `@/components/FolderName` when a barrel exists instead of deep paths.

## Prettier

- Follow repo formatting; use `npm run format` / `npm run format:check` when preparing changes.
