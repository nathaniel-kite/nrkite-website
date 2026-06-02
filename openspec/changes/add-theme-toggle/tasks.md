## 1. Install Dropdown Menu Component

- [x] 1.1 Run `npx shadcn add dropdown-menu` to install the shadcn dropdown-menu component

## 2. Create Theme Provider

- [x] 2.1 Create `app/components/theme-provider.tsx` with React context for theme state
- [x] 2.2 Implement `ThemeProvider` component with `defaultTheme="system"` and localStorage persistence
- [x] 2.3 Add `useEffect` to toggle `.dark` class on `document.documentElement` based on theme state
- [x] 2.4 Handle `system` theme by checking `prefers-color-scheme` via `window.matchMedia`
- [x] 2.5 Export `useTheme` hook for consuming components

## 3. Wrap Root Layout with ThemeProvider

- [x] 3.1 Import `ThemeProvider` in `app/root.tsx`
- [x] 3.2 Wrap `{children}` in the `Layout` component with `<ThemeProvider defaultTheme="system" storageKey="nrkite-ui-theme">`
- [x] 3.3 Add inline script to prevent flash of wrong theme on initial load

## 4. Create Mode Toggle Component

- [x] 4.1 Create `app/components/mode-toggle.tsx` following shadcn Vite pattern
- [x] 4.2 Use `DropdownMenu` with `DropdownMenuTrigger`, `DropdownMenuContent`, and three `DropdownMenuItem`s (Light, Dark, System)
- [x] 4.3 Add Sun/Moon icons from `lucide-react` with CSS transition animations
- [x] 4.4 Use `useTheme()` hook to call `setTheme()` on menu item click

## 5. Integrate ModeToggle into Navbar Layout

- [x] 5.1 Update `app/layouts/app-shell.tsx` header to use flex layout with `justify-between items-center`
- [x] 5.2 Position `ModeToggle` on the right side of the header, after the centered navbar links
- [x] 5.3 Ensure navbar links remain centered in the viewport (not shifted by the toggle)

## 6. Verification

- [ ] 6.1 Run `npm run dev` and verify page loads with system theme by default
- [ ] 6.2 Verify clicking the toggle opens dropdown with Light/Dark/System options
- [ ] 6.3 Verify selecting Light/Dark applies the correct theme immediately
- [ ] 6.4 Verify selecting System respects `prefers-color-scheme`
- [ ] 6.5 Verify theme persists across page reloads (localStorage)
- [ ] 6.6 Verify sun/moon icon transitions correctly between themes
- [ ] 6.7 Verify no flash of wrong theme on reload
- [ ] 6.8 Run `npm run typecheck` and confirm no TypeScript errors
