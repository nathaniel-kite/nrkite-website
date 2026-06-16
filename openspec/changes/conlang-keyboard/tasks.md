## 1. Key Layout Data

- [x] 1.1 Create `app/components/interactive-keyboard/key-layout.ts` with the `KeyDef` interface and all five keyboard rows
- [x] 1.2 Populate the number row (14 keys: `` ` `` through `=` plus Backspace) with base and shift values; use placeholder strings for alt and shiftAlt
- [x] 1.3 Populate the QWERTY row (14 keys: Tab through `\`) with base and shift values; placeholders for alt and shiftAlt
- [x] 1.4 Populate the home row (13 keys: Caps through `'` plus Enter); mark the Quote key as `isDeadKey: true`; placeholders for alt layers
- [x] 1.5 Populate the bottom row (12 keys: L-Shift through `/` plus R-Shift) with base and shift values; placeholders for alt and shiftAlt
- [x] 1.6 Add the Space bar row (single Space key with wide flex width)

## 2. KeyboardKey Component

- [x] 2.1 Create `app/components/interactive-keyboard/keyboard-key.tsx` accepting `keyDef`, `displayChar`, `isModifier`, `isDeadKey`, and `onClick` props
- [x] 2.2 Apply base key styles: `bg-secondary text-secondary-foreground rounded border border-border text-xs font-mono`
- [x] 2.3 Apply dead key styles: `text-primary ring-1 ring-primary/40` when `isDeadKey` is true
- [x] 2.4 Apply modifier key styles: `bg-muted text-muted-foreground` for Tab, Caps, Backspace, Enter, Space, Shift, Alt
- [x] 2.5 Apply proportional flex width via inline style or Tailwind class passed from the row data

## 3. KeyboardRow Component

- [x] 3.1 Create `app/components/interactive-keyboard/keyboard-row.tsx` that accepts a row of `KeyDef[]` and current modifier state
- [x] 3.2 Render a `flex gap-1` row container, iterating over keys and rendering `KeyboardKey` for each
- [x] 3.3 Pass the correct `displayChar` to each key based on `shiftActive`, `altActive` state

## 4. KeyboardToggles Component

- [x] 4.1 Create `app/components/interactive-keyboard/keyboard-toggles.tsx` accepting modifier state and toggle callbacks
- [x] 4.2 Render SHIFT toggle button: `variant="default"` when active, `variant="outline"` when inactive
- [x] 4.3 Render ALT toggle button: same active/inactive styling as SHIFT
- [x] 4.4 Render `'` dead key toggle button: `variant="default"` (primary) when active, `variant="outline"` with `text-primary` tint when inactive
- [x] 4.5 Render `"` dead key toggle button: same styling pattern as `'`
- [x] 4.6 Add a visual separator between the SHIFT/ALT group and the dead key group

## 5. Root Keyboard Component

- [x] 5.1 Create `app/components/interactive-keyboard/keyboard.tsx` with `shiftActive`, `altActive`, `deadKeyActive` state
- [x] 5.2 Implement `toggleShift`, `toggleAlt`, `toggleDeadKey` handlers; dead key toggle must enforce mutual exclusion
- [x] 5.3 Render the dead key status text line above the keyboard (visible only when `deadKeyActive !== null`)
- [x] 5.4 Wrap the keyboard in a `w-full overflow-x-auto` scroll container with a `min-w-[560px]` inner width
- [x] 5.5 Render all five `KeyboardRow` components, passing modifier state and toggle handlers
- [x] 5.6 Render `KeyboardToggles` below the keyboard rows
- [x] 5.7 Wrap everything in a shadcn `Card` with standard padding and `shadow shadow-muted-foreground/10`

## 6. Language Page Integration

- [x] 6.1 Remove the `BulldozerIcon` import and "Under Construction" `Card` from `app/routes/language.tsx`
- [x] 6.2 Import and render the `Keyboard` component in `language.tsx`
- [x] 6.3 Verify the page renders without errors and all modifier toggles function correctly in the browser
