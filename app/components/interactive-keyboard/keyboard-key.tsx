import { cn } from "~/lib/utils";
import type { KeyDef, DeadKeyId } from "./key-layout";
import { DEAD_KEYS } from "./key-layout";

interface KeyboardKeyProps {
  keyDef: KeyDef;
  /** The character to display, pre-computed by the parent based on active modifier state */
  displayChar: string;
  /** True only when this key is currently showing a dead key character (not a combined result) */
  isDeadKeyDisplay: boolean;
  /** The dead key ID this key represents when acting as a dead key, or null */
  deadKeyId: DeadKeyId | null;
  /** Current active dead key, used to show status on the space bar */
  deadKeyActive: DeadKeyId | null;
  /** Whether Shift mode is active */
  shiftActive: boolean;
  /** Whether Alt mode is active */
  altActive: boolean;
  onClick?: () => void;
  onDeadKeyClick?: (deadKey: DeadKeyId) => void;
}

export function KeyboardKey({
  keyDef,
  displayChar,
  isDeadKeyDisplay,
  deadKeyId,
  deadKeyActive,
  shiftActive,
  altActive,
  onClick,
  onDeadKeyClick,
}: KeyboardKeyProps) {
  const isModifier = keyDef.isModifier ?? false;
  const isSpace = keyDef.code === "Space";
  const isShiftKey = keyDef.code === "ShiftLeft" || keyDef.code === "ShiftRight";
  const isAltKey = keyDef.code === "AltRight";
  const isShiftAltKey = isShiftKey || isAltKey;
  const isDeadKeyExtended = deadKeyId ? DEAD_KEYS[deadKeyId].type === "extended" : false;
  const isActiveKeyExtended = deadKeyActive ? DEAD_KEYS[deadKeyActive].type === "extended" : false;

  return (
    <button
      style={{ flexGrow: keyDef.flexGrow, flexShrink: 0, flexBasis: 0 }}
      onClick={() => {
        if (isDeadKeyDisplay && deadKeyId) {
          onDeadKeyClick?.(deadKeyId);
        } else {
          onClick?.();
        }
      }}
      className={cn(
        // Base layout
        "flex items-center justify-center min-h-9 px-1 rounded border",
        "text-lg font-sans leading-none transition-colors select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        // Regular character key
        !isModifier && !isDeadKeyDisplay && [
          "bg-secondary text-secondary-foreground border-border",
          "hover:bg-secondary/70 active:scale-95",
        ],
        // Modifier key (Tab, Caps, Shift, Alt, Enter, Backspace, Space)
        isModifier && [
          "bg-muted text-muted-foreground border-border",
          "hover:bg-muted/70",
          // Shift and Alt keys are clickable toggles; others are inert
          !isShiftAltKey && "cursor-default pointer-events-none",
        ],
        // Shift/Alt active state — primary background
        isShiftKey && shiftActive && [
          "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
        ],
        isAltKey && altActive && [
          "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
        ],
        // Dead key styling — color ring, only when displaying dead key char
        isDeadKeyDisplay && isDeadKeyExtended && [
          "bg-secondary border-ext-key/40 text-ext-key ring-1 ring-ext-key/40",
          "hover:bg-secondary/70 active:scale-95",
        ],
        isDeadKeyDisplay && !isDeadKeyExtended && [
          "bg-secondary border-dead-key/40 text-dead-key ring-1 ring-dead-key/40",
          "hover:bg-secondary/70 active:scale-95",
        ],
      )}
      // Non-interactive modifier keys are purely decorative
      tabIndex={isModifier && !isShiftAltKey ? -1 : undefined}
      aria-label={isModifier ? keyDef.base : undefined}
    >
      {isSpace && deadKeyActive !== null ? (
        <span className={cn("text-xs", isActiveKeyExtended ? "text-ext-key" : "text-dead-key")}>
          {DEAD_KEYS[deadKeyActive].label}
        </span>
      ) : (
        <span className={cn(isModifier && "text-xs")}>{displayChar}</span>
      )}
    </button>
  );
}
