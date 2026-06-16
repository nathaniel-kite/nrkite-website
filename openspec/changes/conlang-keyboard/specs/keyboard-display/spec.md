## ADDED Requirements

### Requirement: Full QWERTY layout
The keyboard display SHALL render all five standard QWERTY rows: the number row (`` ` `` through `=` plus Backspace), the QWERTY row (Tab through `\`), the home row (Caps through `'` plus Enter), the bottom row (Shift through `/` plus Shift), and a Space bar row.

#### Scenario: All rows and keys present
- **WHEN** the keyboard component is rendered
- **THEN** all five rows are visible with their full complement of keys including structural keys (Tab, Caps Lock, Backspace, Enter, Space, Shift ×2)

---

### Requirement: Four character layers
The keyboard SHALL maintain four character layers — base, Shift, Alt, and Shift+Alt — displayed according to the active modifier state.

#### Scenario: Base layer (default)
- **WHEN** neither Shift nor Alt is active
- **THEN** each key displays its base-layer character

#### Scenario: Shift layer
- **WHEN** Shift is active and Alt is not
- **THEN** each key displays its Shift-layer character

#### Scenario: Alt layer
- **WHEN** Alt is active and Shift is not
- **THEN** each key displays its Alt-layer character

#### Scenario: Shift+Alt layer
- **WHEN** both Shift and Alt are active
- **THEN** each key displays its Shift+Alt-layer character

---

### Requirement: Shift toggle
The SHIFT modifier SHALL operate as a toggle — one click activates it, a second click deactivates it.

#### Scenario: Toggle on via keyboard key
- **WHEN** the user clicks the Shift key on the rendered keyboard
- **THEN** Shift mode becomes active and the keyboard displays the Shift layer

#### Scenario: Toggle off via keyboard key
- **WHEN** Shift mode is active and the user clicks the Shift key on the rendered keyboard
- **THEN** Shift mode becomes inactive and the keyboard returns to the previous layer

#### Scenario: Toggle via button below keyboard
- **WHEN** the user clicks the SHIFT toggle button below the keyboard
- **THEN** Shift mode toggles the same as clicking the keyboard key

---

### Requirement: Alt toggle
The ALT modifier SHALL operate as a toggle — one click activates it, a second click deactivates it.

#### Scenario: Toggle on via keyboard key
- **WHEN** the user clicks the Alt key on the rendered keyboard
- **THEN** Alt mode becomes active and the keyboard displays the Alt layer

#### Scenario: Toggle off via keyboard key
- **WHEN** Alt mode is active and the user clicks the Alt key on the rendered keyboard
- **THEN** Alt mode becomes inactive and the keyboard returns to the previous layer

#### Scenario: Toggle via button below keyboard
- **WHEN** the user clicks the ALT toggle button below the keyboard
- **THEN** Alt mode toggles the same as clicking the keyboard key

---

### Requirement: Dead key identification
Dead keys SHALL be visually distinguished from regular character keys at all times, using the primary color.

#### Scenario: Quote key styled as dead key
- **WHEN** the keyboard is rendered in any modifier state
- **THEN** the Quote key (which produces `'` in base and `"` in Shift) is rendered with primary-color text and a primary-color ring outline

---

### Requirement: Dead key mode toggle
The user SHALL be able to activate a dead key mode — `'` or `"` — by clicking toggle buttons below the keyboard. Only one dead key mode may be active at a time.

#### Scenario: Activate dead key mode
- **WHEN** the user clicks the `'` dead key toggle button (or the `"` dead key toggle button)
- **THEN** that dead key mode becomes active

#### Scenario: Deactivate by re-clicking
- **WHEN** a dead key mode is active and the user clicks its toggle button again
- **THEN** dead key mode is deactivated

#### Scenario: Mutual exclusion
- **WHEN** the `'` dead key mode is active and the user clicks the `"` dead key toggle button
- **THEN** `'` mode is deactivated and `"` mode becomes active (only one active at a time)

---

### Requirement: Dead key status text
The active dead key SHALL be communicated via a status line above the keyboard.

#### Scenario: Dead key active
- **WHEN** a dead key mode is active (either `'` or `"`)
- **THEN** a text line above the keyboard reads "Dead key: `'`" (or `"` respectively)

#### Scenario: No dead key active
- **WHEN** no dead key mode is active
- **THEN** the status text line is hidden or blank

---

### Requirement: Modifier toggles below keyboard
SHIFT and ALT SHALL each have a dedicated toggle button rendered below the keyboard, visually distinct from the keyboard keys. Dead key modes SHALL also have dedicated toggle buttons below the keyboard.

#### Scenario: Toggle buttons present
- **WHEN** the keyboard is rendered
- **THEN** a toggle bar is visible below the keyboard containing SHIFT, ALT, `'`, and `"` buttons

#### Scenario: Active state styling
- **WHEN** a modifier or dead key is active
- **THEN** its corresponding toggle button uses a filled/primary style to indicate active state

---

### Requirement: Card container
The keyboard component SHALL be rendered inside a bordered card container.

#### Scenario: Card visible
- **WHEN** the keyboard is rendered on the Language page
- **THEN** it is enclosed in a card with a visible border and subtle shadow

---

### Requirement: Responsive layout
The keyboard SHALL be responsive, remaining usable across viewport sizes.

#### Scenario: Desktop layout
- **WHEN** the viewport is wide enough to contain the full keyboard
- **THEN** all keys are visible without scrolling and maintain correct proportional widths

#### Scenario: Narrow viewport
- **WHEN** the viewport is narrower than the keyboard's minimum width
- **THEN** the keyboard container scrolls horizontally, preserving key proportions and legibility

---

### Requirement: Language page integration
The keyboard component SHALL be the primary content of the Language route, replacing the Under Construction placeholder.

#### Scenario: Under Construction removed
- **WHEN** the Language page is rendered
- **THEN** no "Under Construction" card or bulldozer icon is present

#### Scenario: Keyboard present
- **WHEN** the Language page is rendered
- **THEN** the interactive keyboard component is visible as the main page content
