## ADDED Requirements

### Requirement: Navbar renders on all routed pages
The navbar SHALL be rendered as a persistent component within the app layout shell, visible on every page that uses the layout route.

#### Scenario: Navbar visible on Home page
- **WHEN** the user navigates to `/`
- **THEN** the navbar is rendered at the top of the viewport

#### Scenario: Navbar visible on Other page
- **WHEN** the user navigates to `/other`
- **THEN** the navbar is rendered at the top of the viewport

### Requirement: Navbar contains navigation links to all top-level pages
The navbar SHALL contain clickable links for each top-level route (Home, Other) that use React Router's `<Link>` component for client-side navigation.

#### Scenario: Clicking Home link navigates to home
- **WHEN** the user clicks the "Home" link in the navbar
- **THEN** the URL changes to `/` and the Home page content renders without a full page reload

#### Scenario: Clicking Other link navigates to other page
- **WHEN** the user clicks the "Other" link in the navbar
- **THEN** the URL changes to `/other` and the Other page content renders without a full page reload

### Requirement: Navbar indicates the active page
The navbar SHALL visually distinguish the link corresponding to the current route using an active state styling (e.g., different color, underline, or font weight).

#### Scenario: Home link shows active state on home route
- **WHEN** the current route is `/`
- **THEN** the Home link in the navbar displays an active visual indicator

#### Scenario: Other link shows active state on other route
- **WHEN** the current route is `/other`
- **THEN** the Other link in the navbar displays an active visual indicator

### Requirement: Navbar uses shadcn UI components
The navbar SHALL be built using shadcn UI primitives (e.g., Button, or styled div elements with Tailwind utility classes consistent with the shadcn theme).

#### Scenario: Navbar respects theme variables
- **WHEN** the application theme changes (light/dark)
- **THEN** the navbar colors and styles update according to shadcn CSS variables
