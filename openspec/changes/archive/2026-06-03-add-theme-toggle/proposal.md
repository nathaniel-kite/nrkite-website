## Why

The project currently has dark mode CSS variables defined in `app.css` and respects `prefers-color-scheme` via a media query, but provides no way for users to manually override their system preference. Users who prefer a specific theme regardless of their OS setting have no control. Additionally, the navbar has empty space on the right side that is a natural fit for a theme toggle.

## What Changes

- Add a `ThemeProvider` React context that manages theme state (`light`, `dark`, `system`) with localStorage persistence
- Wrap the app layout with `ThemeProvider` (default: `system`)
- Create a `ModeToggle` component using a shadcn DropdownMenu with Sun/Moon icons from lucide-react
- Place the `ModeToggle` on the right side of the navbar
- Install the `dropdown-menu` shadcn component (not yet present in the project)

## Capabilities

### New Capabilities
- `theme-management`: Client-side theme switching between light, dark, and system default with localStorage persistence and `.dark` class toggling on `<html>`
- `mode-toggle-ui`: Dropdown menu trigger in navbar with sun/moon icon animation, offering Light/Dark/System options

### Modified Capabilities
- `navigation`: Navbar gains a mode toggle component on the right side alongside centered navigation links

## Impact

- **New files**: `app/components/theme-provider.tsx`, `app/components/mode-toggle.tsx`, `app/components/ui/dropdown-menu.tsx`
- **Modified files**: `app/root.tsx` (wrap with ThemeProvider), `app/layouts/app-shell.tsx` (include ModeToggle in header), `app/components/navbar.tsx` (accept ModeToggle or restructure layout)
- **New dependency**: `@radix-ui/react-dropdown-menu` (via shadcn dropdown-menu component)
- **No breaking changes**: Default theme is `system`, matching current behavior
