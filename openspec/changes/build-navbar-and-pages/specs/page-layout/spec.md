## ADDED Requirements

### Requirement: Root layout wraps page content with navbar
The root application component SHALL render the navbar above an `<Outlet />` that displays the matched route's page content.

#### Scenario: Page content renders inside layout
- **WHEN** a route matches
- **THEN** the page content appears below the navbar within the layout shell

### Requirement: Layout uses semantic HTML structure
The layout shell SHALL use semantic HTML elements (`<header>` for navbar, `<main>` for page content) for accessibility and document structure.

#### Scenario: Layout contains header and main elements
- **WHEN** the page renders
- **THEN** the DOM contains a `<header>` element wrapping the navbar and a `<main>` element wrapping the outlet content

### Requirement: Layout spans full viewport height
The layout shell SHALL use Tailwind CSS classes to ensure the page content area fills the remaining viewport height below the navbar.

#### Scenario: Content area fills available space
- **WHEN** the page has minimal content
- **THEN** the layout still extends to fill the full viewport height
