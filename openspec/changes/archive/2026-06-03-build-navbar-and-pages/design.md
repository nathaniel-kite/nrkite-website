## Context

The project is a React Router v7 SPA with shadcn UI (radix-nova style, Tailwind CSS v4, CSS variables enabled). Currently it has a single index route (`home.tsx`) and a minimal `root.tsx` that only renders `<Outlet />` with no persistent layout. The application will run in SPA mode (`ssr: false`).

## Goals / Non-Goals

**Goals:**
- Create a reusable navbar component with client-side navigation links
- Add a second page ("Other") to demonstrate multi-page routing
- Establish a layout pattern where the navbar persists across route changes
- Use React Router v7's `routes.ts` for declarative route configuration
- Use shadcn UI styling conventions (CSS variables, Tailwind utilities)

**Non-Goals:**
- Authentication or protected routes
- Responsive mobile hamburger menu (navbar will be simple/horizontal for now)
- Data fetching or loaders (pages are static content for now)
- SSR/hydration optimization (SPA focus)

## Decisions

### 1. Navbar as a standalone component in `app/components/`
**Decision**: Place the navbar at `app/components/navbar.tsx` rather than inside a route file.
**Rationale**: The navbar is shared UI used by the layout shell, not tied to any single route. This keeps it reusable and separates concerns.
**Alternatives considered**: Inline navbar in `root.tsx` — rejected because it would bloat the root file and reduce reusability.

### 2. Layout via pathless layout route in `routes.ts`
**Decision**: Use a pathless layout route (`{ path: "", component: "layouts/app-shell.tsx" }`) in `routes.ts` to wrap child routes with the navbar.
**Rationale**: React Router v7's pathless routes provide a clean way to apply a layout to a group of routes without adding a URL segment. Child routes render into the layout's `<Outlet />`.
**Alternatives considered**: Putting the navbar directly in `root.tsx` — rejected because `root.tsx` is the HTML shell (head, body, scripts) and mixing layout UI there conflates concerns. A dedicated layout route is cleaner.

### 3. Active link detection via `useLocation`
**Decision**: Use React Router's `useLocation()` hook to compare `location.pathname` against link paths for active state styling.
**Rationale**: Simple, reliable, and doesn't require additional dependencies. Tailwind's conditional classes handle the visual distinction.
**Alternatives considered**: `NavLink` from React Router — viable but `useLocation` gives more control with shadcn's class-variance-authority patterns.

### 4. Route configuration style
**Decision**: Use the `index()` and `route()` helpers from `@react-router/dev/routes` in `routes.ts`.
**Rationale**: This is the React Router v7 convention for file-based routing. It's type-safe and integrates with the build system.

### 5. SPA mode (ssr: false)
**Decision**: Set `ssr: false` in `react-router.config.ts` to run as a client-side-only SPA.
**Rationale**: The project is a simple SPA with no server-rendering requirements. Disabling SSR simplifies the architecture, eliminates hydration concerns, and reduces build/deployment complexity.
**Alternatives considered**: Keeping `ssr: true` — rejected because it adds unnecessary complexity (hydration, server bundles) for a static SPA use case.

## Risks / Trade-offs

- **[Risk] Navbar grows complex**: A simple horizontal navbar may need to become a responsive sidebar or hamburger menu later.
  → **Mitigation**: Build the navbar as an isolated component so it can be swapped or extended without touching routing logic.

## Open Questions

- Should the navbar include the site logo/branding, or just navigation links?
- Is there a planned third page or more routes that would influence the layout structure?
