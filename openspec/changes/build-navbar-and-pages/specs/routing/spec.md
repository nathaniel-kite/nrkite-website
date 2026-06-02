## ADDED Requirements

### Requirement: Application runs in SPA mode
The React Router configuration SHALL set `ssr: false` in `react-router.config.ts` to enable client-side-only rendering (SPA mode).

#### Scenario: Build produces client-only output
- **WHEN** the application builds with `npm run build`
- **THEN** the output contains only client-side JavaScript with no server rendering

#### Scenario: Dev server serves SPA
- **WHEN** running `npm run dev`
- **THEN** the dev server serves the application as a client-rendered SPA without server-side rendering

### Requirement: Home route serves the index page
The route configuration SHALL map the root path `/` to the Home page component (`app/routes/home.tsx`).

#### Scenario: Visiting root path renders Home
- **WHEN** the user visits `/`
- **THEN** the Home page component is rendered within the layout outlet

### Requirement: Other route serves the Other page
The route configuration SHALL map the path `/other` to the Other page component (`app/routes/other.tsx`).

#### Scenario: Visiting /other renders Other page
- **WHEN** the user visits `/other`
- **THEN** the Other page component is rendered within the layout outlet

### Requirement: Routes are defined via routes.ts
All routes SHALL be configured using React Router v7's file-based route configuration in `app/routes.ts` using the `index()` and `route()` helpers from `@react-router/dev/routes`.

#### Scenario: Route config exports valid RouteConfig
- **WHEN** the application builds
- **THEN** `routes.ts` exports a valid `RouteConfig` array satisfying the type system

### Requirement: Each page defines metadata
Each page route SHALL export a `meta` function that returns page-specific title and description metadata.

#### Scenario: Home page has correct meta
- **WHEN** the Home page renders
- **THEN** the document title is set to a Home-specific title

#### Scenario: Other page has correct meta
- **WHEN** the Other page renders
- **THEN** the document title is set to an Other-specific title
