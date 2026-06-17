import type { KeyDef, DeadKeyId } from "./key-layout";
import { DEAD_KEYS } from "./key-layout";
import { KeyboardKey } from "./keyboard-key";

interface KeyboardRowProps {
  keys: KeyDef[];
  shiftActive: boolean;
  altActive: boolean;
  deadKeyActive: DeadKeyId | null;
  onKeyClick: (key: KeyDef) => void;
  onDeadKeyToggle: (deadKey: DeadKeyId) => void;
}

/**
 * Resolves which character to display on a key given the current modifier state.
 * Modifier keys always show their base label regardless of any modifier state.
 *
 * Priority:
 *   1. Dead key active → use the appropriate deadKeyOutputs ('' if undefined)
 *   2. Shift+Alt → shiftAlt layer
 *   3. Alt → alt layer
 *   4. Shift → shift layer
 *   5. Default → base layer
 */
function getDisplayChar(
  key: KeyDef,
  shiftActive: boolean,
  altActive: boolean,
  deadKeyActive: DeadKeyId | null,
): string {
  if (key.isModifier) return key.base;

  if (deadKeyActive) {
    const outputs = key.deadKeyOutputs?.[deadKeyActive];
    if (outputs) {
      if (shiftActive && altActive) return outputs.shiftAlt ?? "";
      if (altActive)               return outputs.alt      ?? "";
      if (shiftActive)             return outputs.shift    ?? "";
      return outputs.base ?? "";
    }
    return "";
  }

  if (shiftActive && altActive) return key.shiftAlt ?? key.base;
  if (altActive)               return key.alt      ?? key.base;
  if (shiftActive)             return key.shift    ?? key.base;
  return key.base;
}

/**
 * Returns the dead key ID this key represents when no dead key is active.
 * Returns null if this key is not a dead key or a dead key is already active.
 */
function getDeadKeyId(
  key: KeyDef,
  shiftActive: boolean,
  altActive: boolean,
  deadKeyActive: DeadKeyId | null,
): DeadKeyId | null {
  if (!key.isDeadKey || deadKeyActive !== null) return null;

  // Determine which character this key is currently showing
  let char: string | undefined;
  if (shiftActive && altActive) char = key.shiftAlt;
  else if (altActive)           char = key.alt;
  else if (shiftActive)         char = key.shift;
  else                          char = key.base;

  // Look up which dead key ID matches this character
  for (const [id, info] of Object.entries(DEAD_KEYS)) {
    if (char === info.char) return id as DeadKeyId;
  }
  return null;
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
        const deadKeyId = getDeadKeyId(key, shiftActive, altActive, deadKeyActive);
        const isDeadKeyDisplay = deadKeyId !== null;

        return (
          <KeyboardKey
            key={key.code}
            keyDef={key}
            displayChar={displayChar}
            isDeadKeyDisplay={isDeadKeyDisplay}
            deadKeyId={deadKeyId}
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
