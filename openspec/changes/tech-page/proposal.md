## Why

The `/tech` route exists as a stub with no content. This change builds it into an interactive CV page that showcases career history, projects, and skills in a polished, expandable format — giving visitors a compelling overview of professional background without navigating away from the site.

## What Changes

- Replace the `tech.tsx` stub with a fully-populated interactive CV page
- Add a reusable `ExpandableCard` component for work experience entries (expand/collapse in place)
- Populate all sections with plausible placeholder content ready for real data
- New sections: Bio, Education, Skills, Professional Experience, Research, Projects

## Capabilities

### New Capabilities

- `tech-page`: The `/tech` route page with Bio, Education, Skills, Professional Experience, Research, and Projects sections, each rendered using shadcn Card components
- `expandable-card`: A shadcn Card variant that supports an expand/collapse toggle, an optional default-expanded state, and truncated vs. full description display

### Modified Capabilities

<!-- None — no existing specs to modify -->

## Impact

- `app/routes/tech.tsx` — replaced entirely
- New component `app/components/expandable-card.tsx` (or co-located in the route)
- No new routes, dependencies, or API changes required; all content is static
- No breaking changes
