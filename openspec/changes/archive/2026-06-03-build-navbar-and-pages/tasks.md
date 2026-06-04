## 1. Enable SPA Mode

- [x] 1.1 Set `ssr: false` in `react-router.config.ts` to enable client-side-only rendering

## 2. Layout Shell Setup

- [x] 2.1 Create `app/layouts/app-shell.tsx` with a `<header>` wrapping the navbar and a `<main>` wrapping `<Outlet />`
- [x] 2.2 Ensure the layout uses full viewport height with Tailwind CSS classes

## 3. Navbar Component

- [x] 3.1 Create `app/components/navbar.tsx` with navigation links for Home (`/`) and Other (`/other`)
- [x] 3.2 Implement active link detection using `useLocation()` to apply active state styling
- [x] 3.3 Style the navbar using shadcn UI conventions (CSS variables, Tailwind utilities)

## 4. Other Page

- [x] 4.1 Create `app/routes/other.tsx` with a default export component rendering placeholder content
- [x] 4.2 Add a `meta` export function with page-specific title and description

## 5. Route Configuration

- [x] 5.1 Update `app/routes.ts` to define a pathless layout route wrapping the app-shell
- [x] 5.2 Add the Home index route and the `/other` route as children of the layout route

## 6. Root Layout Integration

- [x] 6.1 Update `app/root.tsx` Layout component to import and render the app-shell layout (or confirm app-shell handles layout independently)
- [x] 6.2 Update Home page meta in `app/routes/home.tsx` with a meaningful title

## 7. Verification

- [x] 7.1 Run `npm run dev` and verify both `/` and `/other` render with the navbar
- [x] 7.2 Verify clicking navbar links navigates without full page reload
- [x] 7.3 Verify active link styling updates correctly on each page
- [x] 7.4 Run `npm run typecheck` and confirm no TypeScript errors
