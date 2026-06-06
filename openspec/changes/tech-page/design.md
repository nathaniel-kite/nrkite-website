## Context

The `/tech` route (`app/routes/tech.tsx`) is currently a placeholder stub. The site uses React Router 7, React 19, Tailwind CSS v4, and shadcn/ui (style: `radix-nova`, base color: `stone`). Existing shadcn components include `Card`, `Button`, `Accordion`, `Sheet`, `DropdownMenu`, and `AlertDialog`. The page layout follows the pattern established by `home.tsx` and `language.tsx`: a `container mx-auto py-12 px-4 mt-14` root div with `font-heading` (Noto Serif Variable) for headings and `text-secondary-foreground` for body prose.

## Goals / Non-Goals

**Goals:**
- Build a content-rich `/tech` page with Bio, Education, Skills, Professional Experience, Research, and Projects sections
- Implement an `ExpandableCard` component that truncates long descriptions and expands on demand
- Populate all sections with plausible placeholder data so the layout is demonstrable immediately
- Keep components reusable and data-driven so real content can be swapped in by editing arrays

**Non-Goals:**
- No CMS, database, or API integration — all content is static data in the route file
- No animation library additions — use Tailwind transitions only
- No filtering, search, or sorting of content
- No server-side data loading (no `loader` function needed)

## Decisions

### 1. Co-locate static content data in the route file

**Decision:** Define content arrays (experience, projects, education, skills, etc.) directly in `tech.tsx`, not in a separate data file.

**Rationale:** The page is purely static and self-contained. Extracting to a separate module adds indirection with no benefit at this stage. When real data is needed, a `loader` function or CMS integration can replace the inline arrays without changing component structure.

**Alternative considered:** A `app/data/tech.ts` module. Rejected — over-engineering for a single-page feature at this size.

---

### 2. `ExpandableCard` as a local component, not a global UI primitive

**Decision:** Create `app/components/expandable-card.tsx` as a named component rather than extending `app/components/ui/card.tsx`.

**Rationale:** The expand/collapse behavior is specific to the CV use case. Patching `card.tsx` would make the shadcn component non-standard and complicate future `shadcn` upgrades. A separate component that composes the existing shadcn `Card` parts keeps the UI primitives clean.

**Alternative considered:** Overriding `card.tsx`. Rejected — breaks shadcn upgrade path.

---

### 3. Expand/collapse state managed with `useState` per card instance

**Decision:** Each `ExpandableCard` manages its own `isExpanded` state via `useState`, initialized from an `defaultExpanded` prop.

**Rationale:** Cards are independent; expanding one should not affect others. No shared state or context is needed. This is the simplest correct solution.

**Alternative considered:** A parent-level `Set<id>` of expanded IDs. Rejected — unnecessary complexity; no requirement for "expand all / collapse all".

---

### 4. Skills section as a flat badge grid, not `Accordion`

**Decision:** Render Skills as grouped badge/pill grids (one group per category) using simple `div`+`span` markup styled with Tailwind, not `Accordion` or `Card`.

**Rationale:** Skills are short labels; they don't benefit from expand/collapse. A dense badge grid is more scannable. The existing `Accordion` component remains available if a future requirement calls for it.

---

### 5. Sections stacked vertically with clear heading separators

**Decision:** Each section (Bio, Education, Skills, Experience, Research, Projects) is a visually distinct block with a `font-heading` section heading and a responsive card grid below it.

**Rationale:** Tabs or sidebar navigation would add complexity and is unnecessary for a single-scroll CV page. A scrolling layout is more universally accessible and simpler to implement.

## Risks / Trade-offs

- **Placeholder content drift** → The content arrays in `tech.tsx` will need to be replaced with real data. Risk of shipping placeholder text to production is low but non-zero. Mitigation: add a `TODO:` comment block at the top of the data section.
- **Long page scroll** → Six content sections on one page may feel long. Mitigation: use sticky nav anchor links in a future iteration; for now the page is scoped to content-only.
- **shadcn Card not designed for expand/collapse** → The `ExpandableCard` wrapper adds DOM elements around Card primitives. Mitigation: compose Card sub-components (`CardHeader`, `CardContent`, `CardFooter`) rather than wrapping the `Card` root, to preserve correct styling.
