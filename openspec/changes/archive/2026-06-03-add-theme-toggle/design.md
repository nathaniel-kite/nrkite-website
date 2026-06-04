## Context

The project uses React Router v7 with Tailwind CSS v4 (OKLCH color space, CSS variables) and shadcn/ui components. Dark mode is already configured via CSS custom properties in `app/app.css` with `@custom-variant dark (&:is(.dark *))`. The `.dark` class on a parent element activates dark mode. Currently, `prefers-color-scheme` is detected via a CSS media query but there is no JavaScript-level theme management or toggle UI. The navbar (`app/components/navbar.tsx`) is a centered flex row inside a styled `<header>` in `app-shell.tsx`.

## Goals / Non-Goals

**Goals:**
- Theme state management via React context with `light`, `dark`, `system` options
- Persist user choice in localStorage
- Default to `system` (matching current behavior)
- Dropdown menu toggle in navbar with sun/moon icon animation
- Icon transitions: sun visible in light mode, moon visible in dark mode
- System option respects `prefers-color-scheme` dynamically

**Non-Goals:**
- Per-page or per-component theme overrides
- Theme transition animations on color changes
- Accessibility beyond standard dropdown menu patterns

## Decisions

### 1. Custom ThemeProvider (not next-themes)
**Decision**: Implement a custom `ThemeProvider` following the shadcn Vite guide pattern rather than using the `next-themes` package.
**Rationale**: `next-themes` is optimized for Next.js SSR. This project is SPA-only (`ssr: false`), so a simple context-based provider is sufficient and avoids unnecessary dependencies. The shadcn Vite guide provides a proven pattern that works well with client-side rendering.
**Alternatives considered**: `next-themes` — rejected because it's Next.js-specific and adds SSR hydration logic we don't need.

### 2. ThemeProvider wraps children in root.tsx Layout
**Decision**: Wrap the `{children}` in the `Layout` component of `root.tsx` with `ThemeProvider`.
**Rationale**: This is the highest-level React component that renders the `<html>` shell, ensuring all descendants have access to the theme context. The `useEffect` in ThemeProvider will toggle the `.dark` class on `document.documentElement`.
**Alternatives considered**: Wrapping in `app-shell.tsx` — rejected because `root.tsx` is the true root and wrapping there ensures the context is available everywhere, including error boundaries.

### 3. ModeToggle placed in header, right of navbar links
**Decision**: Add the `ModeToggle` component inside the `<header>` in `app-shell.tsx`, positioned to the right of the centered navbar links using a flex layout with `justify-between`.
**Rationale**: The header already spans full width. By changing the header's flex layout from just containing `<Navbar />` to a three-section layout (left spacer, centered nav, right toggle), the links stay centered in the viewport while the toggle sits at the right edge.
**Alternatives considered**: Putting the toggle inside the `Navbar` component — rejected because it would break the centered alignment of the nav links (the toggle would shift the center point).

### 4. DropdownMenu for mode selection
**Decision**: Use shadcn's `DropdownMenu` component with three items (Light, Dark, System) rather than a simple toggle button.
**Rationale**: Three options (not just two) require a menu. The dropdown pattern is the shadcn standard for this use case and matches the official documentation.
**Alternatives considered**: Three-state toggle button — rejected because a three-position toggle is less discoverable and harder to use than a dropdown with labeled options.

### 5. Icon animation via CSS classes
**Decision**: Use the shadcn pattern of overlapping Sun/Moon icons with `scale`/`rotate` CSS transitions rather than a single icon that changes.
**Rationale**: This is the documented shadcn pattern, gives a polished feel, and works correctly with the `.dark` class selector that the ThemeProvider manages.

## Risks / Trade-offs

- **[Risk] Flash of wrong theme on reload**: Since this is client-side only, there's a brief moment before React hydrates where the page may show the wrong theme.
  → **Mitigation**: Add a small inline `<script>` in `root.tsx` that runs before React to set the initial `.dark` class based on localStorage. This is the standard approach for SPA theme management.

- **[Risk] DropdownMenu not yet installed**: The project doesn't have the `dropdown-menu` shadcn component.
  → **Mitigation**: Install it via `npx shadcn add dropdown-menu` as the first implementation step.

## Open Questions

- None — the shadcn Vite dark mode guide provides a clear, complete pattern.
