## 1. ExpandableCard Component

- [x] 1.1 Create `app/components/expandable-card.tsx` with props: `logo`, `company`, `title`, `location`, `period`, `shortDescription`, `fullDescription`, `defaultExpanded`
- [x] 1.2 Implement `useState(defaultExpanded)` for expand/collapse state
- [x] 1.3 Render `CardHeader` with logo, company, title, location, and period
- [x] 1.4 Render `CardContent` showing `shortDescription` when collapsed, `fullDescription` when expanded
- [x] 1.5 Render `CardFooter` with an "Expand" / "Minimize" `Button` that toggles state
- [x] 1.6 Verify expand/collapse toggles correctly and each instance is independent

## 2. Tech Page — Static Content Data

- [x] 2.1 Define bio data (name, tagline, bio paragraph) as a constant in `tech.tsx`
- [x] 2.2 Define education array (institution, degree, field, year, note) with 2–3 placeholder entries
- [x] 2.3 Define skills object grouped by category (Languages, Frameworks, Tools, Other) with placeholder skills
- [x] 2.4 Define experience array (company, logo placeholder, title, location, period, shortDescription, fullDescription, defaultExpanded) with 3–4 entries
- [x] 2.5 Define research array (title, venue, year, description) with 1–2 placeholder entries
- [x] 2.6 Define projects array (name, summary, tags, link) with 3–4 placeholder entries

## 3. Tech Page — Layout and Sections

- [x] 3.1 Replace stub `tech.tsx` with a full component; add `meta` export with title "Tech | Nrkite"
- [x] 3.2 Add Bio section: single `Card` with name, tagline, and bio paragraph
- [x] 3.3 Add Education section: responsive card grid, one `Card` per degree entry
- [x] 3.4 Add Skills section: category label + badge/pill grid for each skill group
- [x] 3.5 Add Professional Experience section: list of `ExpandableCard` components from experience array
- [x] 3.6 Add Research section: card grid with title, venue, year, and description per entry
- [x] 3.7 Add Projects section: card grid with name, summary, technology tags, and optional link per entry
- [x] 3.8 Apply `container mx-auto py-12 px-4 mt-14` root wrapper and `font-heading` section headings

## 4. Responsiveness and Polish

- [x] 4.1 Ensure card grids use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or 2-col) where appropriate
- [x] 4.2 Verify Skills badge grid wraps cleanly on small screens
- [x] 4.3 Verify ExpandableCard expand/collapse works on mobile (touch)
- [x] 4.4 Check page at `sm`, `md`, and `lg` breakpoints; fix any layout issues
- [x] 4.5 Add `TODO:` comment block above content arrays to flag placeholder data for future replacement
