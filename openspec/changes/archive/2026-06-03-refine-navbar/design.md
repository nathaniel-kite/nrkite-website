## Context

The project uses React Router v7 with Tailwind CSS v4 (OKLCH color space, CSS variables) and shadcn/ui components. The current navbar (`app/components/navbar.tsx`) uses the shadcn `NavigationMenu` primitive wrapped in a `container mx-auto` div, which constrains it to a centered content width rather than full-bleed. The header in `app-shell.tsx` has no styling of its own.

## Goals / Non-Goals

**Goals:**
- Full-width translucent dark grey navbar background (consistent across light/dark modes)
- Subtle shadow beneath the navbar
- Sticky positioning (`position: sticky`)
- Centered navigation links with medium gaps
- Subtle hover highlighting appropriate for both light and dark themes
- Preserve active link detection and current link set

**Non-Goals:**
- Adding new navigation links or routes
- Responsive hamburger menu (out of scope)
- Changing the routing or active-link detection logic
- Adding a logo/brand to the navbar

## Decisions

### 1. Move styling from `NavigationMenu` to the `<header>` wrapper
**Decision**: Apply the full-width background, shadow, and sticky positioning on the `<header>` element in `app-shell.tsx` rather than on the navbar component itself.
**Rationale**: The header naturally spans the full viewport width, making it the right element for the full-bleed background and shadow. The navbar component can focus purely on the link layout.
**Alternatives considered**: Styling on the navbar component itself — rejected because the `container` class or any width constraint would prevent the full-bleed background effect.

### 2. Fixed dark grey color (not theme-variable)
**Decision**: Use a hardcoded dark grey value (e.g., `bg-gray-900/80` or equivalent OKLCH) with backdrop blur for translucency, rather than a CSS variable that changes between themes.
**Rationale**: The requirement specifies the same color in both light and dark modes. Using a fixed dark grey with alpha transparency ensures consistency and the translucent effect.
**Alternatives considered**: Defining a new CSS variable like `--navbar-bg` — rejected because it would need to be the same value in both `:root` and `.dark`, adding indirection without benefit.

### 3. Simplify away from `NavigationMenu` primitive
**Decision**: Replace the shadcn `NavigationMenu` component with a simpler `<nav>` element containing styled `<Link>` elements.
**Rationale**: The `NavigationMenu` primitive is designed for dropdown menus and adds unnecessary DOM complexity and default styles that fight against the desired full-width, centered-link layout. Direct links are simpler and give full control over spacing and hover states.
**Alternatives considered**: Keeping `NavigationMenu` and overriding its styles — rejected because it would require fighting the component's built-in layout logic.

### 4. Centered links via flexbox
**Decision**: Use `flex justify-center items-center gap-4` on the nav container to center links with medium spacing.
**Rationale**: Flexbox centering is straightforward and responsive. `gap-4` (1rem) provides medium spacing that works well for a small set of links.

### 5. Hover states using opacity/brightness
**Decision**: Use `hover:text-white/80` (or similar subtle opacity shift) for hover highlighting, with `transition-colors` for smoothness.
**Rationale**: Since the navbar background is dark grey in both themes, light text with a subtle opacity increase on hover works well in both contexts. This avoids needing separate light/dark hover rules.

## Risks / Trade-offs

- **[Risk] Losing `NavigationMenu` features**: If dropdown menus are needed later, we'd need to reintroduce `NavigationMenu` or another solution.
  → **Mitigation**: The navbar component is isolated; it can be swapped back to `NavigationMenu` if needed without affecting other code.

- **[Risk] Hardcoded color may not match future design system**: Using a fixed grey instead of a CSS variable means it won't automatically adapt if a design token changes.
  → **Mitigation**: The color value (`gray-900/80` or equivalent) is a standard Tailwind utility and easy to find/replace if needed.

## Open Questions

- None — requirements are clear and achievable with existing tooling.
