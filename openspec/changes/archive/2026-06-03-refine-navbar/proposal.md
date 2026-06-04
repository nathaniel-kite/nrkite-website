## Why

The current navbar is a minimal navigation component that lacks visual polish and modern UX patterns. It has no background styling, no shadow, no sticky positioning, and uses the shadcn `NavigationMenu` primitive which adds unnecessary complexity for a simple horizontal nav. The links are left-aligned (via the container) rather than centered, and hover states are not well-defined.

## What Changes

- Replace the current navbar background with a translucent dark grey bar that spans the full viewport width
- Apply the same dark grey background in both light and dark modes for consistency
- Add a subtle shadow beneath the navbar for visual depth
- Make the navbar sticky so it remains visible during scroll
- Center the navigation links horizontally with medium spacing between them
- Implement subtle, theme-appropriate hover highlighting for links in both light and dark modes

## Capabilities

### New Capabilities
- `navbar-styling`: Full-width translucent dark grey navbar with shadow, sticky positioning, centered links, and subtle hover states

### Modified Capabilities
- `navigation`: Simplified from shadcn `NavigationMenu` primitive to direct styled links; active state detection preserved

## Impact

- **Modified files**: `app/components/navbar.tsx` (complete restyle), `app/layouts/app-shell.tsx` (header wrapper may need adjustment)
- **No new dependencies**: Uses existing Tailwind CSS v4 utilities and CSS variables
- **No breaking changes**: Navigation links and routing behavior remain identical; only visual presentation changes
