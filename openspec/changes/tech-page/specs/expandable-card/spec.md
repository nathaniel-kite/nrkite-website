## ADDED Requirements

### Requirement: ExpandableCard renders work experience fields
The `ExpandableCard` component SHALL accept and render the following props: `logo` (image URL or React node), `company` (string), `title` (string), `location` (string), `period` (string), `shortDescription` (string), `fullDescription` (string), and `defaultExpanded` (boolean, default `false`).

#### Scenario: Card renders required fields
- **WHEN** an ExpandableCard is rendered with all required props
- **THEN** the card displays the company name, job title, location, period, and logo

---

### Requirement: Card defaults to collapsed state showing truncated description
When `defaultExpanded` is `false` (the default), the ExpandableCard SHALL display only `shortDescription` and an "Expand" button. The `fullDescription` SHALL NOT be visible.

#### Scenario: Collapsed state on mount
- **WHEN** an ExpandableCard mounts with `defaultExpanded={false}`
- **THEN** only `shortDescription` is visible and an "Expand" button is present

#### Scenario: Full description hidden when collapsed
- **WHEN** an ExpandableCard is in the collapsed state
- **THEN** `fullDescription` content is not rendered in the DOM or is hidden from view

---

### Requirement: Clicking "Expand" reveals full description and changes button label
When the user clicks the "Expand" button, the card SHALL transition to expanded state: `fullDescription` becomes visible and the button label changes to "Minimize" (or equivalent close action).

#### Scenario: Expand interaction
- **WHEN** the user clicks the "Expand" button on a collapsed card
- **THEN** `fullDescription` becomes visible and the button now reads "Minimize"

---

### Requirement: Clicking "Minimize" returns card to collapsed state
When the card is expanded and the user clicks the "Minimize" button, the card SHALL return to collapsed state: `fullDescription` is hidden and `shortDescription` is shown again.

#### Scenario: Minimize interaction
- **WHEN** the user clicks "Minimize" on an expanded card
- **THEN** `fullDescription` is hidden and the "Expand" button is shown again

---

### Requirement: Cards can be configured to start expanded
When `defaultExpanded={true}` is passed, the card SHALL mount in expanded state showing `fullDescription` and the "Minimize" button without any user interaction.

#### Scenario: Default expanded on mount
- **WHEN** an ExpandableCard mounts with `defaultExpanded={true}`
- **THEN** `fullDescription` is visible and the "Minimize" button is present on initial render

---

### Requirement: Expand/collapse state is independent per card instance
Multiple ExpandableCard instances on the same page SHALL each manage their own expand/collapse state. Toggling one card SHALL NOT affect the state of any other card.

#### Scenario: Independent state
- **WHEN** two ExpandableCards are rendered and the user expands the first one
- **THEN** only the first card is expanded; the second card remains in its prior state

---

### Requirement: ExpandableCard composes shadcn Card primitives
The `ExpandableCard` component SHALL use `CardHeader`, `CardContent`, and `CardFooter` from the existing shadcn `Card` component set to maintain consistent visual styling.

#### Scenario: Card primitives used
- **WHEN** an ExpandableCard is rendered
- **THEN** the component's DOM structure includes the shadcn Card primitive sub-components
