<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- END:nextjs-agent-rules -->

# Neural OS Portfolio

This is a single-page, OS-themed developer portfolio. The UI mimics an operating system shell; it is not a real OS or backend app.

## Architecture

- **Entry point:** `src/app/page.tsx` renders `<OSShell />` only.
- **Shell:** `src/components/os/` — boot sequence, status bar, navigation, scroll orchestration.
- **Sections:** `src/components/modules/` — one component per portfolio section (profile, projects, skills, etc.).
- **Hero / 3D:** `src/components/hero/` — landing area and Three.js visuals.
- **Shared UI:** `src/components/ui/` — reusable primitives (`ModulePanel`, `SectionHeader`, `Badge`, `Button`).
- **Content:** `src/data/` — static portfolio data. Prefer editing data files over hardcoding copy in components.
- **Types:** `src/types/index.ts` — shared interfaces (`ModuleId`, `Project`, `ProfileData`, etc.).

## Section IDs & navigation

Scroll sections use DOM `id` values that match the `ModuleId` union in `src/types/index.ts`:

`identity` · `profile` · `projects` · `stack` · `skills` · `missions` · `contact`

When adding or renaming a section, update all of:

1. `ModuleId` in `src/types/index.ts`
2. `sectionIds` in `src/components/os/OSShell.tsx`
3. The section's `id` attribute
4. Navigation labels in `src/components/os/OSNavigation.tsx`

Boot animation state is stored in `sessionStorage` under `neural-os-booted`. Do not rename without updating `OSShell.tsx`.

## Design & styling

- **Theme:** dark sci-fi OS aesthetic. Use existing tokens from `globals.css`: `void`, `graphite`, `electric`, `cyan`.
- **Panels:** glass-style surfaces — `border-white/[0.06]`, `bg-graphite/50`, `backdrop-blur-xl`. Reuse `ModulePanel` for new module content.
- **Copy tone:** terminal / system metaphors ("Module 02", "Operator Profile") — match existing section headers; keep text readable, not gimmicky.
- **Icons:** `lucide-react` only.
- **Class merging:** use `cn()` from `@/lib/utils`.

## Motion & 3D

- Reuse animation presets from `src/lib/animations.ts` (`fadeUp`, `fadeIn`, `staggerContainer`, etc.) instead of inventing new easing curves.
- Respect `prefers-reduced-motion` — follow patterns already in `globals.css`.
- Three.js / React Three Fiber is used in the hero only. Avoid adding 3D elsewhere unless explicitly requested (bundle size).

## Code conventions

- Interactive components need `"use client"` at the top.
- Import via `@/` path alias.
- New portfolio content (projects, skills, timeline, profile fields) → update `src/data/*` and types if the shape changes.
- Site metadata and OG tags live in `src/app/layout.tsx`; base URL comes from `NEXT_PUBLIC_SITE_URL` (see `.env.example`).

## What not to do

- Do not add API routes, auth, databases, or server state — this is a static marketing portfolio.
- Do not break the single-page scroll model by introducing extra App Router pages without a clear reason.
- Do not remove or bypass the boot sequence / skip link / reduced-motion handling.