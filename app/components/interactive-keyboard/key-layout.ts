export interface KeyDef {
  /** Browser KeyboardEvent.code identifier */
  code: string;
  /** Base-layer character (also used as the display label for modifier keys) */
  base: string;
  /** Shift-layer character */
  shift?: string;
  /** Alt-layer character */
  alt?: string;
  /** Shift+Alt-layer character */
  shiftAlt?: string;
  /** Proportional flex-grow width — 1 = one standard key unit */
  flexGrow: number;
  /** True for keys that produce combining/dead characters */
  isDeadKey?: boolean;
  /** True for structural keys (Tab, Caps, Shift, Alt, Enter, Backspace, Space) */
  isModifier?: boolean;

  // ── Dead key ( ' ) combinations ──────────────────────────────────────────
  /** Output when ' dead key is active, base layer */
  diacritic?: string;
  /** Output when ' dead key is active, Shift layer */
  diaSft?: string;
  /** Output when ' dead key is active, Alt layer */
  diaAlt?: string;
  /** Output when ' dead key is active, Shift+Alt layer */
  diaSftAlt?: string;

  // ── Dead key ( " ) combinations ──────────────────────────────────────────
  /** Output when " dead key is active, base layer */
  dblDiacritic?: string;
  /** Output when " dead key is active, Shift layer */
  dblDiaSft?: string;
  /** Output when " dead key is active, Alt layer */
  dblDiaAlt?: string;
  /** Output when " dead key is active, Shift+Alt layer */
  dblDiaSftAlt?: string;

  // ── Dead key ( / ) combinations ──────────────────────────────────────────
  /** Output when / dead key is active, base layer */
  slash?: string;
  /** Output when / dead key is active, Shift layer */
  slashShift?: string;
  /** Output when / dead key is active, Alt layer */
  slashAlt?: string;
  /** Output when / dead key is active, Shift+Alt layer */
  slashShiftAlt?: string;
}

/** Placeholder for unassigned alt-layer characters */
const PH = "";

/**
 * All five keyboard rows in top-to-bottom order.
 * Each row's flexGrow values sum to 15 so proportions are consistent across rows.
 *
 * Row 0 — Number row  : 13 × 1u + Backspace 2u          = 15u
 * Row 1 — QWERTY row  : Tab 1.5u + 12 × 1u + \ 1.5u     = 15u
 * Row 2 — Home row    : Caps 1.75u + 11 × 1u + Enter 2.25u = 15u
 * Row 3 — Bottom row  : LShift 2.25u + 10 × 1u + RShift 2.75u = 15u
 * Row 4 — Space row   : LAlt 1.5u + Space 12u + RAlt 1.5u = 15u
 */
export const KEYBOARD_ROWS: KeyDef[][] = [
  // ── Row 0: Number row ────────────────────────────────────────────────────
  [
    { code: "Backquote",  base: "`",  shift: "~", alt: "≈", shiftAlt: "≉", flexGrow: 1, diacritic: "à", diaSft: "ã", diaAlt: "a̰", diaSftAlt: "n͊", dblDiacritic: "ȁ", dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit1",     base: "1",  shift: "!", alt: "¡", shiftAlt: "˥", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit2",     base: "2",  shift: "@", alt: PH, shiftAlt: "˦", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit3",     base: "3",  shift: "#", alt: PH, shiftAlt: "˧", flexGrow: 1, diacritic: PH, diaSft: "s̻", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit4",     base: "4",  shift: "$", alt: PH, shiftAlt: "˨", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit5",     base: "5",  shift: "%", alt: PH, shiftAlt: "˩", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit6",     base: "6",  shift: "^", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: PH, diaSft: "â", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit7",     base: "7",  shift: "&", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit8",     base: "8",  shift: "*", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: PH, diaSft: "n̽", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit9",     base: "9",  shift: "(", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: PH, diaSft: "t͡s", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Digit0",     base: "0",  shift: ")", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: PH, diaSft: "a͜u", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Minus",      base: "-",  shift: "_", alt: "—", shiftAlt: PH, flexGrow: 1, diacritic: "ā", diaSft: "ṉ", diaAlt: "PH", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Equal",      base: "=",  shift: "+", alt: "≈", shiftAlt: PH, flexGrow: 1, diacritic: "a͈", diaSft: "n̟", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Backspace",  base: "⌫",  flexGrow: 2,    isModifier: true },
  ],

  // ── Row 1: QWERTY row ────────────────────────────────────────────────────
  [
    { code: "Tab",          base: "Tab", flexGrow: 1.5, isModifier: true },
    { code: "KeyQ",         base: "q",  shift: "Q", alt: "ʔ", shiftAlt: "ʕ", flexGrow: 1, diacritic: "tʼ", diaSft: "ˁ", diaAlt: "ˀ", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyW",         base: "w",  shift: "W", alt: "ʍ", shiftAlt: "ɰ", flexGrow: 1, diacritic: "ʷ", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyE",         base: "e",  shift: "E", alt: "ǝ", shiftAlt: "ɛ", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyR",         base: "r",  shift: "R", alt: "ɾ", shiftAlt: "ɹ", flexGrow: 1, diacritic: "ʵ", diaSft: "a˞", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyT",         base: "t",  shift: "T", alt: "θ", shiftAlt: "ʈ", flexGrow: 1, diacritic: "n̪", diaSft: "n͆", diaAlt: "ᶿ", diaSftAlt: "s̺", dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyY",         base: "y",  shift: "Y", alt: "ɥ", shiftAlt: "ʏ", flexGrow: 1, diacritic: "n̡", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyU",         base: "u",  shift: "U", alt: "ɯ", shiftAlt: "ʊ", flexGrow: 1, diacritic: "ă", diaSft: "a̯", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyI",         base: "i",  shift: "I", alt: "ɪ", shiftAlt: "ɨ", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyO",         base: "o",  shift: "O", alt: "ɔ", shiftAlt: "ɤ", flexGrow: 1, diacritic: "å", diaSft: "n̥", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: "ø", slashShift: "Ø", slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyP",         base: "p",  shift: "P", alt: "ɓ", shiftAlt: "ɗ", flexGrow: 1, diacritic: "n̼", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "BracketLeft",  base: "[",  shift: "{", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "BracketRight", base: "]",  shift: "}", alt: PH, shiftAlt: PH, flexGrow: 1, diacritic: "p̚", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Backslash",    base: "\\", shift: "|", alt: "ˈ", shiftAlt: "ˌ", flexGrow: 1.5, diacritic: "l̸", diaSft: "n̩", diaAlt: "ŋ̍", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
  ],

  // ── Row 2: Home row ──────────────────────────────────────────────────────
  [
    { code: "CapsLock",  base: "Caps",  flexGrow: 1.75, isModifier: true },
    { code: "KeyA",      base: "a",  shift: "A", alt: "æ", shiftAlt: "ɑ", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyS",      base: "s",  shift: "S", alt: "ʃ", shiftAlt: "ʂ", flexGrow: 1, diacritic: "ş", diaSft: "ˢ", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyD",      base: "d",  shift: "D", alt: "ð", shiftAlt: "ɖ", flexGrow: 1, diacritic: "ᵈ", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyF",      base: "f",  shift: "F", alt: "ɸ", shiftAlt: "ⱱ", flexGrow: 1, diacritic: "n̼", diaSft: "ᶲ", diaAlt: "ᶲ", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyG",      base: "g",  shift: "G", alt: "ɣ", shiftAlt: "ɢ", flexGrow: 1, diacritic: PH, diaSft: "ᶢ", diaAlt: "ˠ", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyH",      base: "h",  shift: "H", alt: "ɦ", shiftAlt: "ʜ", flexGrow: 1, diacritic: "ʰ", diaSft: "ʱ", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyJ",      base: "j",  shift: "J", alt: "ʝ", shiftAlt: "ɟ", flexGrow: 1, diacritic: "ʲ", diaSft: PH, diaAlt: PH, diaSftAlt: "ᶡ", dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyK",      base: "k",  shift: "K", alt: "ʎ", shiftAlt: "ɠ", flexGrow: 1, diacritic: "ᵏ", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyL",      base: "l",  shift: "L", alt: "ɬ", shiftAlt: "ɫ", flexGrow: 1, diacritic: "ˡ", diaSft: "ᶫ", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: "ł", slashShift: "Ł", slashAlt: PH, slashShiftAlt: PH },
    { code: "Semicolon", base: ";",  shift: ":", alt: "ː", shiftAlt: PH, flexGrow: 1, diacritic: "p̓", diaSft: "ṡ", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Quote",     base: "'",  shift: '"', alt: "·", shiftAlt: PH, flexGrow: 1, isDeadKey: true, diacritic: "á", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: "a̋", dblDiaSft: "ä", dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Enter",     base: "Enter", flexGrow: 2.25, isModifier: true },
  ],

  // ── Row 3: Bottom row ────────────────────────────────────────────────────
  [
    { code: "ShiftLeft",  base: "Shift", flexGrow: 2.25, isModifier: true },
    { code: "KeyZ",       base: "z",  shift: "Z", alt: "ʒ", shiftAlt: "ʀ", flexGrow: 1, diacritic: PH, diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyX",       base: "x",  shift: "X", alt: "χ", shiftAlt: "ʁ", flexGrow: 1, diacritic: "ˣ", diaSft: "n͓", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyC",       base: "c",  shift: "C", alt: "ɕ", shiftAlt: "ʑ", flexGrow: 1, diacritic: "ą", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyV",       base: "v",  shift: "V", alt: "ʌ", shiftAlt: "ʋ", flexGrow: 1, diacritic: "č", diaSft: "t̬", diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyB",       base: "b",  shift: "B", alt: "β", shiftAlt: "ʙ", flexGrow: 1, diacritic: "ᵇ", diaSft: PH, diaAlt: "ᵝ", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyN",       base: "n",  shift: "N", alt: "ɲ", shiftAlt: "ŋ", flexGrow: 1, diacritic: "ⁿ", diaSft: "ᵑ", diaAlt: "ᶮ", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "KeyM",       base: "m",  shift: "M", alt: "ɱ", shiftAlt: "ɴ", flexGrow: 1, diacritic: "ᵐ", diaSft: "ᶯ", diaAlt: "ᶬ", diaSftAlt: "ᶰ", dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Comma",      base: ",",  shift: "<", alt: "⟨", shiftAlt: "«", flexGrow: 1, diacritic: "ț", diaSft: "̘n", diaAlt: "v̝", diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Period",     base: ".",  shift: ">", alt: "⟩", shiftAlt: "»", flexGrow: 1, diacritic: "ṇ", diaSft: "n̙", diaAlt: "l̞", diaSftAlt: PH, dblDiacritic: "b̤", dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "Slash",      base: "/",  shift: "?", alt: "¿", shiftAlt: PH, flexGrow: 1, isDeadKey: true, diacritic: "r̷", diaSft: PH, diaAlt: PH, diaSftAlt: PH, dblDiacritic: PH, dblDiaSft: PH, dblDiaAlt: PH, dblDiaSftAlt: PH, slash: PH, slashShift: PH, slashAlt: PH, slashShiftAlt: PH },
    { code: "ShiftRight", base: "Shift", flexGrow: 2.75, isModifier: true },
  ],

  // ── Row 4: Space row ─────────────────────────────────────────────────────
  [
    { code: "AltLeft",  base: "Alt",  flexGrow: 1.5,  isModifier: true },
    { code: "Space",    base: "",     flexGrow: 12,   isModifier: true },
    { code: "AltRight", base: "Alt",  flexGrow: 1.5,  isModifier: true },
  ],
];
