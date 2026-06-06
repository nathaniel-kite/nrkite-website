## ADDED Requirements

### Requirement: Page renders all six content sections
The Tech page SHALL render the following sections in order: Bio, Education, Skills, Professional Experience, Research, and Projects. Each section SHALL be identified by a visible heading using the `font-heading` typeface.

#### Scenario: All sections present
- **WHEN** a visitor navigates to `/tech`
- **THEN** the page displays headings for Bio, Education, Skills, Professional Experience, Research, and Projects

---

### Requirement: Bio section displays a personal summary card
The Bio section SHALL render a single shadcn `Card` containing a name, a one-line professional tagline, and a short paragraph bio.

#### Scenario: Bio card visible
- **WHEN** the Tech page loads
- **THEN** a Card is visible with a name, tagline, and bio paragraph

---

### Requirement: Education section displays degree cards
The Education section SHALL render one shadcn `Card` per degree entry. Each card SHALL display: institution name, degree and field of study, graduation year, and an optional one-line note.

#### Scenario: Education cards rendered
- **WHEN** the Tech page loads
- **THEN** at least one Card is rendered in the Education section containing institution name and degree information

---

### Requirement: Skills section displays categorized badge grids
The Skills section SHALL group skills by category (e.g., Languages, Frameworks, Tools). Each category SHALL display its label and a set of pill/badge elements for each skill.

#### Scenario: Skills grouped by category
- **WHEN** the Tech page loads
- **THEN** skills are displayed in visually distinct category groups, each with a label and pill badges

---

### Requirement: Professional Experience section uses ExpandableCard components
The Professional Experience section SHALL render one `ExpandableCard` per job entry. Cards SHALL be ordered reverse-chronologically (most recent first).

#### Scenario: Experience cards rendered
- **WHEN** the Tech page loads
- **THEN** at least two ExpandableCards are visible in the Professional Experience section, in reverse-chronological order

---

### Requirement: Research section displays research entry cards
The Research section SHALL render one shadcn `Card` per research project or publication. Each card SHALL display: title, institution/venue, year range, and a brief description.

#### Scenario: Research cards rendered
- **WHEN** the Tech page loads
- **THEN** at least one Card is rendered in the Research section with title, venue, and description

---

### Requirement: Projects section displays project cards
The Projects section SHALL render one shadcn `Card` per project. Each card SHALL display: project name, a one-line summary, technology tags, and an optional link.

#### Scenario: Project cards rendered
- **WHEN** the Tech page loads
- **THEN** at least two project Cards are visible, each showing a name, summary, and technology tags

---

### Requirement: Page is responsive
The card grids in each section SHALL reflow from a single column on mobile to two or three columns on wider viewports.

#### Scenario: Single column on small screens
- **WHEN** the viewport width is below the `md` Tailwind breakpoint (768px)
- **THEN** all card grids render in a single column

#### Scenario: Multi-column on large screens
- **WHEN** the viewport width is at or above the `lg` Tailwind breakpoint (1024px)
- **THEN** card grids in Experience, Projects, and Research render in at least two columns

---

### Requirement: Page sets correct document metadata
The Tech page SHALL export a `meta` function that sets a descriptive page title and description.

#### Scenario: Title tag set
- **WHEN** the Tech page is loaded
- **THEN** the document `<title>` contains "Tech" and the site name
