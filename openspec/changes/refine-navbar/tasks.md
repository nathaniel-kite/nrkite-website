## 1. Header Styling in App Shell

- [x] 1.1 Update `app/layouts/app-shell.tsx` header element to have full-width translucent dark grey background
- [x] 1.2 Add shadow beneath the header (`shadow-md` or equivalent)
- [x] 1.3 Add sticky positioning to the header (`sticky top-0 z-50`)
- [x] 1.4 Add backdrop blur for translucency effect (`backdrop-blur`)

## 2. Navbar Component Simplification

- [x] 2.1 Replace `NavigationMenu` primitive with a simple `<nav>` element in `app/components/navbar.tsx`
- [x] 2.2 Remove `NavigationMenu` imports that are no longer needed
- [x] 2.3 Use flexbox to center links: `flex justify-center items-center`
- [x] 2.4 Add medium gap between links (`gap-4`)

## 3. Link Styling

- [x] 3.1 Set base link text color to a light value that works on dark grey (e.g., `text-gray-200`)
- [x] 3.2 Add subtle hover state (`hover:text-white/80` or similar)
- [x] 3.3 Add smooth transition (`transition-colors`)
- [x] 3.4 Preserve active link detection via `useLocation()` with `font-bold` or equivalent distinction

## 4. Verification

- [x] 4.1 Run `npm run dev` and verify navbar renders as full-width translucent dark grey bar
- [x] 4.2 Verify shadow appears beneath the navbar
- [x] 4.3 Verify navbar stays fixed at top when scrolling page content
- [x] 4.4 Verify links are centered with medium gaps
- [x] 4.5 Verify hover highlighting is subtle and visible in both light and dark modes
- [x] 4.6 Verify active link styling still works correctly
- [x] 4.7 Run `npm run typecheck` and confirm no TypeScript errors
