## Why

The Language page currently shows only an "Under Construction" placeholder. A Conlanging Keyboard reference tool gives visitors a visual, interactive way to explore the custom keyboard layout — understanding which characters appear in each modifier mode without requiring any written documentation.

## What Changes

- Remove the "Under Construction" card from `app/routes/language.tsx`
- Add a new interactive keyboard component that renders a full QWERTY keyboard layout
- Keyboard displays different character layers based on active modifier state (normal, Shift, Alt, Shift+Alt)
- Dead keys (`'`, `"`) are visually distinct and can be toggled as active modes
- Active dead key state is communicated via status text above the keyboard
- Modifier toggles (SHIFT, ALT, dead keys) appear both as keys on the keyboard and as dedicated toggle buttons beneath it
- All character mappings use placeholders (to be filled in manually later)

## Capabilities

### New Capabilities

- `keyboard-display`: Full-keyboard visual reference component with modifier layer switching and dead key mode support

### Modified Capabilities

<!-- None -->

## Impact

- `app/routes/language.tsx` — replaces the Under Construction card with the keyboard component
- New component tree under `app/components/interactive-keyboard/`
- No new dependencies required — uses existing React, Tailwind v4, and shadcn/ui primitives
