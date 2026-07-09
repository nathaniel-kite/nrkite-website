export type DeadKeyId =
  | "apostrophe"
  | "quote"
  | "slash"
  | "retroflex"
  | "clicks"
  | "implosives"
  | "laterals"
  | "dorsals"
  | "alveolopalatals"
  | "vowels"
  | "nonIpa";

export interface DeadKeyOutput {
  base?: string;
  shift?: string;
  alt?: string;
  shiftAlt?: string;
}

export const DEAD_KEYS: Record<DeadKeyId, { label: string; char: string; type: "dead" | "extended" }> = {
  apostrophe:      { label: "Diacritics",        char: "'", type: "dead" },
  quote:           { label: "Doubled Diacritics", char: '"', type: "dead" },
  slash:           { label: "Slash",             char: "/", type: "dead" },
  retroflex:       { label: "Retroflex",         char: "ɻ", type: "extended" },
  clicks:          { label: "Clicks",            char: "!", type: "extended" },
  implosives:      { label: "Implosives",        char: "ɓ", type: "extended" },
  laterals:        { label: "Laterals",          char: "ʟ", type: "extended" },
  dorsals:         { label: "Dorsals",           char: "ʡ", type: "extended" },
  alveolopalatals: { label: "Alveolopalatals",   char: "ȵ", type: "extended" },
  vowels:          { label: "Vowels",            char: "ǝ", type: "extended" },
  nonIpa:          { label: "Other",           char: "þ", type: "extended" },
};

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

  /** Dead key outputs keyed by dead key ID */
  deadKeyOutputs?: Partial<Record<DeadKeyId, DeadKeyOutput>>;
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
    { code: "Backquote",  base: "`",  shift: "~", alt: "≈", shiftAlt: "≉", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "à", shift: "ã", alt: "a̰", shiftAlt: "l̴" },
      quote:      { base: "ȁ" },
    }},
    { code: "Digit1",     base: "1",  shift: "!", alt: "¡", shiftAlt: "˥", flexGrow: 1 },
    { code: "Digit2",     base: "2",  shift: "@", alt: "ɻ", shiftAlt: "˦", flexGrow: 1, isDeadKey: true },
    { code: "Digit3",     base: "3",  shift: "#", alt: "!", shiftAlt: "˧", flexGrow: 1, isDeadKey: true, deadKeyOutputs: {
      apostrophe: { shift: "s̻"}
    }},
    { code: "Digit4",     base: "4",  shift: "$", alt: "ɓ", shiftAlt: "˨", flexGrow: 1, isDeadKey: true },
    { code: "Digit5",     base: "5",  shift: "%", alt: "ʟ", shiftAlt: "˩", flexGrow: 1, isDeadKey: true },
    { code: "Digit6",     base: "6",  shift: "^", alt: "ʡ", shiftAlt: PH, flexGrow: 1, isDeadKey: true, deadKeyOutputs: {
      apostrophe: { shift: "â"}
    }},
    { code: "Digit7",     base: "7",  shift: "&", alt: "ȵ", shiftAlt: PH, flexGrow: 1, isDeadKey: true },
    { code: "Digit8",     base: "8",  shift: "*", alt: "ǝ", shiftAlt: PH, flexGrow: 1, isDeadKey: true },
    { code: "Digit9",     base: "9",  shift: "(", alt: "þ", shiftAlt: "⸨", flexGrow: 1, isDeadKey: true },
    { code: "Digit0",     base: "0",  shift: ")", alt: PH, shiftAlt: "⸩", flexGrow: 1 },
    { code: "Minus",      base: "-",  shift: "_", alt: "–", shiftAlt: "–", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ā", shift: "ṉ"}
    }},
    { code: "Equal",      base: "=",  shift: "+", alt: "≠", shiftAlt: "≠", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "t͈", shift: "n̟", alt: "n͊", shiftAlt: "n͊"}
    }},
    { code: "Backspace",  base: "⌫",  flexGrow: 2,    isModifier: true },
  ],

  // ── Row 1: QWERTY row ────────────────────────────────────────────────────
  [
    { code: "Tab",          base: "Tab", flexGrow: 1.5, isModifier: true },
    { code: "KeyQ",         base: "q",  shift: "Q", alt: "ʔ", shiftAlt: "ʕ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "tʼ", shift: "ˁ", alt: "ˀ", shiftAlt: "ˤ" },
      implosives: { base: "ʠ" },
      dorsals: { base: "ʡ" }
    }},
    { code: "KeyW",         base: "w",  shift: "W", alt: "ʍ", shiftAlt: "ɰ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ʷ"}
    }},
    { code: "KeyE",         base: "e",  shift: "E", alt: "ǝ", shiftAlt: "ɛ", flexGrow: 1, deadKeyOutputs: {
      vowels:  { base: "ɘ", shift: "ɞ", alt: "ɘ", shiftAlt: "ɜ" },
      nonIpa:  { alt: "Ə" },
    }},
    { code: "KeyR",         base: "r",  shift: "R", alt: "ɾ", shiftAlt: "ɹ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ʳ", shift: "a˞", alt: "ʶ", shiftAlt: "ʵ" },
      retroflex: { base: "ɻ", alt: "ɽ", shiftAlt: "ɻ" },
      clicks: { base: "‼" },
      implosives: { base: "ᶑ" },
      laterals: { base: "ɭ", alt: "ɺ" },
      dorsals: { base: "ʀ" }
    }},
    { code: "KeyT",         base: "t",  shift: "T", alt: "θ", shiftAlt: "ʈ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "n̪", shift: "n͆", alt: "ᶿ", shiftAlt: "s̺" },
      retroflex: { base: "ʈ", },
      clicks: { base: "ǀ", shiftAlt: "‼" },
      implosives: { base: "ƭ" },
      alveolopalatals: { base: "ȶ" },
      nonIpa: { base: "þ", shift: "Þ" },
    }},
    { code: "KeyY",         base: "y",  shift: "Y", alt: "ɥ", shiftAlt: "ʏ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "t̡"},
      laterals: { base: "ʎ" }
    }},
    { code: "KeyU",         base: "u",  shift: "U", alt: "ɯ", shiftAlt: "ʊ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ă", shift: "a̯" },
      vowels: { base: "ʉ" },
    }},
    { code: "KeyI",         base: "i",  shift: "I", alt: "ɪ", shiftAlt: "ɨ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ṡ" },
      slash: { base: "ı", shift: "İ" },
      nonIpa: { base: "ı", shift: "İ" },
    }},
    { code: "KeyO",         base: "o",  shift: "O", alt: "ɔ", shiftAlt: "ɤ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "å", shift: "n̥" },
      slash:      { base: "ø", shift: "Ø" },
      vowels:     { base: "ɵ", shift: "ɶ" },
    }},
    { code: "KeyP",         base: "p",  shift: "P", alt: "ɓ", shiftAlt: "ɗ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ᵖ", shift: "ᵗ"},
      clicks: { base: "ʘ" },
      implosives: { base: "ƥ" }
    }},
    { code: "BracketLeft",  base: "[",  shift: "{", alt: "⟦", shiftAlt: "⟪", flexGrow: 1},
    { code: "BracketRight", base: "]",  shift: "}", alt: "⟧", shiftAlt: "⟫", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "p̚" },
    }},
    { code: "Backslash",    base: "\\", shift: "|", alt: "ˈ", shiftAlt: "ˌ", flexGrow: 1.5, deadKeyOutputs: {
      apostrophe: { base: "l̸", shift: "n̩", alt: "ŋ̍" }
    }},
  ],

  // ── Row 2: Home row ──────────────────────────────────────────────────────
  [
    { code: "CapsLock",  base: "Caps",  flexGrow: 1.75, isModifier: true },
    { code: "KeyA",      base: "a",  shift: "A", alt: "æ", shiftAlt: "ɑ", flexGrow: 1, deadKeyOutputs: {
      vowels: { base: "ɐ", alt: "ɶ", shiftAlt: "ɒ" },
    }},
    { code: "KeyS",      base: "s",  shift: "S", alt: "ʃ", shiftAlt: "ʂ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ş", shift: "ˢ" },
      retroflex: { base: "ʂ" },
      laterals: { shift: "ʪ" },
      nonIpa: { base: "ʦ", shift: "ȿ", alt: "ʧ", shiftAlt: "Ȿ" },
    }},
    { code: "KeyD",      base: "d",  shift: "D", alt: "ð", shiftAlt: "ɖ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ᵈ", alt: "ᶞ" },
      retroflex: { base: "ɖ" },
      implosives: { base: "ɗ", shiftAlt: "ᶑ" },
      alveolopalatals: { base: "ȡ" }
    }},
    { code: "KeyF",      base: "f",  shift: "F", alt: "ɸ", shiftAlt: "ⱱ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "n̼", shift: "ᶠ", alt: "ᶲ" },
    }},
    { code: "KeyG",      base: "g",  shift: "G", alt: "ɣ", shiftAlt: "ɢ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ᶢ", alt: "ˠ" },
      implosives: { base: "ɠ", shift: "ʛ", shiftAlt: "ʛ" },
      laterals: { base: "ɫ" }
    }},
    { code: "KeyH",      base: "h",  shift: "H", alt: "ɦ", shiftAlt: "ʜ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ʰ", alt: "ʱ" },
      dorsals: { base: "ħ", shift: "ʜ", alt: "ʢ"}
    }},
    { code: "KeyJ",      base: "j",  shift: "J", alt: "ʝ", shiftAlt: "ɟ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ʲ", shiftAlt: "ᶡ" },
      implosives: { base: "ʄ", shiftAlt: "ʄ"},
      laterals: { base: "ʎ" }
    }},
    { code: "KeyK",      base: "k",  shift: "K", alt: "ɡ", shiftAlt: "ʎ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ᵏ" },
      implosives: { base: "ƙ" }
    }},
    { code: "KeyL",      base: "l",  shift: "L", alt: "ɬ", shiftAlt: "ɫ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ˡ", shift: "ᶫ" },
      slash:      { base: "ł", shift: "Ł" },
      retroflex: { base: "ɭ", alt: "ꞎ" },
      clicks: { base: "ǁ" },
      laterals: { base: "ꞎ", shift: "ʟ" },
      alveolopalatals: { base: "ȴ" }
    }},
    { code: "Semicolon", base: ";",  shift: ":", alt: "ː", shiftAlt: PH, flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "p̓", shift: "ṡ" },
    }},
    { code: "Quote",     base: "'",  shift: '"', alt: "·", shiftAlt: PH, flexGrow: 1, isDeadKey: true, deadKeyOutputs: {
      apostrophe: { base: "á", alt: "ư" },
      quote:      { base: "a̋", shift: "ä" },
      retroflex: { base: "̢"}
    }},
    { code: "Enter",     base: "Enter", flexGrow: 2.25, isModifier: true },
  ],

  // ── Row 3: Bottom row ────────────────────────────────────────────────────
  [
    { code: "ShiftLeft",  base: "Shift", flexGrow: 2.25, isModifier: true },
    { code: "KeyZ",       base: "z",  shift: "Z", alt: "ʒ", shiftAlt: "ʑ", flexGrow: 1, deadKeyOutputs: {
      retroflex: { base: "ʐ" },
      laterals: { base: "ɮ", shift: "ʫ" },
      alveolopalatals: { base: "ʑ" },
      nonIpa: { base: "ʣ", shift: "ɀ", alt: "ʤ", shiftAlt: "Ɀ" },
    }},
    { code: "KeyX",       base: "x",  shift: "X", alt: "χ", shiftAlt: "ʁ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ˣ", shift: "n͓", alt: "ᵡ" },
      clicks: { base: "ǁ" }
    }},
    { code: "KeyC",       base: "c",  shift: "C", alt: "ɕ", shiftAlt: "ʐ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ą", shift: "ả" },
      clicks: { base: "ǂ" },
      implosives: { base: "ƈ" },
      alveolopalatals: { base: "ɕ" },
      nonIpa: { alt: "Ɀ" },
    }},
    { code: "KeyV",       base: "v",  shift: "V", alt: "ʋ", shiftAlt: "ʌ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "č", shift: "t̬" },
    }},
    { code: "KeyB",       base: "b",  shift: "B", alt: "β", shiftAlt: "ʙ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ᵇ", alt: "ᵝ" },
      implosives: { base: "ɓ" }
    }},
    { code: "KeyN",       base: "n",  shift: "N", alt: "ɲ", shiftAlt: "ŋ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ⁿ", shift: "ᶯ", alt: "ᶮ", shiftAlt: "ᵑ" },
      retroflex: { base: "ɳ" },
      alveolopalatals: { base: "ȵ" },
      nonIpa: { alt: "Ŋ" },
    }},
    { code: "KeyM",       base: "m",  shift: "M", alt: "ɱ", shiftAlt: "ɴ", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ᵐ", shift: "ᶯ", alt: "ᶬ", shiftAlt: "ᶰ" },
    }},
    { code: "Comma",      base: ",",  shift: "<", alt: "⟨", shiftAlt: "«", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ț", shift: "n̘", alt: "v̝" },
    }},
    { code: "Period",     base: ".",  shift: ">", alt: "⟩", shiftAlt: "»", flexGrow: 1, deadKeyOutputs: {
      apostrophe: { base: "ṇ", shift: "n̙", alt: "l̞" },
      quote:      { base: "b̤" },
    }},
    { code: "Slash",      base: "/",  shift: "?", alt: "¿", shiftAlt: PH, flexGrow: 1, isDeadKey: true, deadKeyOutputs: {
      apostrophe: { base: "r̷" },
      slash: { base: "⫽" },
      laterals: { base: "ł" }
    }},
    { code: "ShiftRight", base: "Shift", flexGrow: 2.75, isModifier: true },
  ],

  // ── Row 4: Space row ─────────────────────────────────────────────────────
  [
    { code: "AltLeft",  base: "Alt",  flexGrow: 1.5,  isModifier: true },
    { code: "Space",    base: "",     flexGrow: 12,   isModifier: true },
    { code: "AltRight", base: "Alt",  flexGrow: 1.5,  isModifier: true },
  ],
];
