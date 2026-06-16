import type { KeyDef } from "./key-layout";
import { KeyboardKey } from "./keyboard-key";

interface KeyboardRowProps {
  keys: KeyDef[];
  shiftActive: boolean;
  altActive: boolean;
  deadKeyActive: "'" | '"' | '/' | null;
  onKeyClick: (key: KeyDef) => void;
  onDeadKeyToggle: (deadKey: "'" | '"' | '/') => void;
}

/**
 * Resolves which character to display on a key given the current modifier state.
 * Modifier keys always show their base label regardless of any modifier state.
 *
 * Priority:
 *   1. Dead key active → use the appropriate dia* / dblDia* / slash* field ('' if undefined)
 *   2. Shift+Alt → shiftAlt layer
 *   3. Alt → alt layer
 *   4. Shift → shift layer
 *   5. Default → base layer
 */
function getDisplayChar(
  key: KeyDef,
  shiftActive: boolean,
  altActive: boolean,
  deadKeyActive: "'" | '"' | '/' | null,
): string {
  if (key.isModifier) return key.base;

  if (deadKeyActive === "'") {
    if (shiftActive && altActive) return key.diaSftAlt ?? "";
    if (altActive)               return key.diaAlt    ?? "";
    if (shiftActive)             return key.diaSft     ?? "";
    return key.diacritic ?? "";
  }

  if (deadKeyActive === '"') {
    if (shiftActive && altActive) return key.dblDiaSftAlt ?? "";
    if (altActive)               return key.dblDiaAlt    ?? "";
    if (shiftActive)             return key.dblDiaSft     ?? "";
    return key.dblDiacritic ?? "";
  }

  if (deadKeyActive === '/') {
    if (shiftActive && altActive) return key.slashShiftAlt ?? "";
    if (altActive)               return key.slashAlt      ?? "";
    if (shiftActive)             return key.slashShift     ?? "";
    return key.slash ?? "";
  }

  if (shiftActive && altActive) return key.shiftAlt ?? key.base;
  if (altActive)               return key.alt      ?? key.base;
  if (shiftActive)             return key.shift    ?? key.base;
  return key.base;
}

/**
 * Returns the dead key char this key represents when no dead key is active.
 * Returns null if this key is not a dead key or a dead key is already active.
 */
function getDeadKeyChar(
  key: KeyDef,
  shiftActive: boolean,
  altActive: boolean,
  deadKeyActive: "'" | '"' | '/' | null,
): "'" | '"' | '/' | null {
  if (!key.isDeadKey || deadKeyActive !== null) return null;
  if (shiftActive && altActive) return key.shiftAlt === "'" ? "'" : key.shiftAlt === '"' ? '"' : key.shiftAlt === '/' ? '/' : null;
  if (altActive)               return key.alt === "'" ? "'" : key.alt === '"' ? '"' : key.alt === '/' ? '/' : null;
  if (shiftActive)             return key.shift === "'" ? "'" : key.shift === '"' ? '"' : key.shift === '/' ? '/' : null;
  return key.base === "'" ? "'" : key.base === '"' ? '"' : key.base === '/' ? '/' : null;
}

export function KeyboardRow({
  keys,
  shiftActive,
  altActive,
  deadKeyActive,
  onKeyClick,
  onDeadKeyToggle,
}: KeyboardRowProps) {
  return (
    <div className="flex gap-1">
      {keys.map((key) => {
        const displayChar = getDisplayChar(key, shiftActive, altActive, deadKeyActive);
        const deadKeyChar = getDeadKeyChar(key, shiftActive, altActive, deadKeyActive);
        const isDeadKeyDisplay = deadKeyChar !== null;

        return (
          <KeyboardKey
            key={key.code}
            keyDef={key}
            displayChar={displayChar}
            isDeadKeyDisplay={isDeadKeyDisplay}
            deadKeyChar={deadKeyChar}
            deadKeyActive={deadKeyActive}
            shiftActive={shiftActive}
            altActive={altActive}
            onDeadKeyClick={onDeadKeyToggle}
            onClick={() => onKeyClick(key)}
          />
        );
      })}
    </div>
  );
}
