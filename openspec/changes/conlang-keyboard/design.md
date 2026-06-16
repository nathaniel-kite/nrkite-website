## Context

The language page currently renders a single "Under Construction" card. The goal is to replace it with an interactive keyboard reference tool. The stack is React Router v7, shadcn/ui (radix-nova style), Tailwind v4, and OKLCH-based design tokens — no new dependencies are needed.

The keyboard is a **visual reference only** — no text input or clipboard output. Users click modifier toggles to explore different character layers.

## Goals / Non-Goals

**Goals:**
- Render a full QWERTY keyboard (all 5 rows, all standard keys) as a visual reference
- Support 4 character layers: base, Shift, Alt, Shift+Alt
- Support dead key mode for `'` and `"` (same physical key, different shift levels)
- Communicate dead key state via status text above the keyboard
- SHIFT and ALT appear both as keyboard keys (clickable toggles) and as styled toggle buttons below
- Dead key toggles appear only as buttons below the keyboard
- Responsive layout that scales gracefully from desktop to mobile

**Non-Goals:**
- Text input or clipboard output
- Physical keyboard event handling (`keydown` listeners)
- The `/` dead key (deferred)
- Populated character mappings (all non-base layers use placeholders)

## Decisions

### 1. Component tree structure

```
app/components/interactive-keyboard/
├── keyboard.tsx           ← root: state + layout
├── keyboard-key.tsx       ← single key button
├── keyboard-toggles.tsx   ← toggle bar below keyboard
└── key-layout.ts          ← all key definitions (pure data)
```

**Rationale**: Isolating data from rendering makes the placeholder-to-real-data migration trivial — the user edits only `key-layout.ts`.

### 2. Key sizing via proportional flex

Each row is a `flex` container. Keys receive a `flex` grow value proportional to their standard physical width (1u = 1 standard key unit). Standard keys get `flex: 1`. Wider keys (Backspace ≈ 2, Tab ≈ 1.5, Caps ≈ 1.75, Enter ≈ 2.25, L-Shift ≈ 2.25, R-Shift ≈ 2.75, Space ≈ 6.25) get `flex: <ratio>`.

**Rationale**: Proportional flex is the simplest approach to match physical key proportions while allowing the keyboard to naturally resize with its container. No absolute pixel math needed.

**Alternative considered**: Fixed pixel widths with CSS transforms for scaling. Rejected because it produces blurry or clipped output on some devices and is harder to maintain.

### 3. Responsive strategy

Wrap the keyboard in a `w-full overflow-x-auto` container. The keyboard itself has a `min-w-[560px]` floor so keys never become too small to read. On very narrow viewports the user scrolls horizontally. Font size is `text-xs` on the keys by default.

**Alternative considered**: CSS `scale()` transform to fit the keyboard into the viewport. Rejected because it complicates layout flow and accessibility.

### 4. State management

Three pieces of local state in `keyboard.tsx`:
```ts
const [shiftActive, setShiftActive] = useState(false)
const [altActive, setAltActive] = useState(false)
const [deadKeyActive, setDeadKeyActive] = useState<"'" | '"' | null>(null)
```

Toggling dead keys: clicking `'` or `"` activates that dead key (or deactivates if already active). Activating one dead key deactivates the other.

**Rationale**: The component is self-contained with no external consumers; no context or global state needed.

### 5. Character layer display logic

```
deadKeyActive !== null  →  show base layer (dead key state is separate from layer)
shiftActive && altActive  →  show shiftAlt layer
altActive  →  show alt layer
shiftActive  →  show shift layer
default  →  show base layer
```

Dead key mode does not change the displayed layer — it only changes the status text above the keyboard.

### 6. Dead key visual treatment

Dead keys (`'` / `"` on the Quote key) are displayed with `text-primary` and a `ring-1 ring-primary/40` outline to distinguish them from regular keys. They do **not** stay highlighted when the dead key mode is active — active state is communicated solely via the status text line.

### 7. Toggle button styling

- SHIFT and ALT toggle buttons below the keyboard use `variant="outline"` from the existing Button component, with an active state using `variant="default"` (primary fill) when toggled on.
- Dead key buttons use `variant="outline"` with `text-primary` tint, `variant="default"` (primary) when active.
- These are visually distinct from the keyboard keys above, which are rendered as plain styled `<button>` elements (not shadcn Button) to avoid import overhead in a large key array.

### 8. Card wrapper

The keyboard is wrapped in a shadcn `Card` with standard padding, matching the existing page style. A subtle `shadow shadow-muted-foreground/10` (same as the current Under Construction card) is used.

## Risks / Trade-offs

- **Placeholder content**: The keyboard will look sparse until real mappings are filled in. Acceptable — this is explicitly planned for manual completion.
- **Horizontal scroll on mobile**: The `min-w` floor means small phones will scroll. A fully fluid keyboard would require very small key labels; the scroll trade-off is preferable.
- **Quote key dual role**: The `'` key is both a dead key (base) and a dead key (shift = `"`). This means both dead key toggles control the same physical key. The implementation handles this by keying dead key state on the character (`'` vs `"`), not the physical key code.
