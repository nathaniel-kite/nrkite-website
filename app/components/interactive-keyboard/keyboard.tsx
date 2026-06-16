import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { KEYBOARD_ROWS } from "./key-layout";
import type { KeyDef } from "./key-layout";
import { KeyboardRow } from "./keyboard-row";
import { KeyboardToggles } from "./keyboard-toggles";

export function Keyboard() {
  const [shiftActive, setShiftActive] = useState(false);
  const [altActive, setAltActive] = useState(false);
  const [deadKeyActive, setDeadKeyActive] = useState<"'" | '"' | '/' | null>(null);

  const toggleShift = () => setShiftActive((v) => !v);
  const toggleAlt = () => setAltActive((v) => !v);

  /** Activates a dead key; deactivates if already active (mutual exclusion). */
  const toggleDeadKey = (key: "'" | '"' | '/') => {
    setDeadKeyActive((current) => (current === key ? null : key));
  };

  /** Handles clicks on keyboard keys — only Shift and Alt keys are interactive. */
  const handleKeyClick = (keyDef: KeyDef) => {
    switch (keyDef.code) {
      case "ShiftLeft":
      case "ShiftRight":
        toggleShift();
        break;
      case "AltRight":
        toggleAlt();
        break;
      default:
        break;
    }
  };

  return (
    <Card className="shadow shadow-muted-foreground/10">
      <CardContent className="p-4 sm:p-6">
        {/* Keyboard */}
        <div className="w-full overflow-x-auto">
          <div className="flex flex-col gap-1 min-w-[560px]">
            {KEYBOARD_ROWS.map((row, rowIndex) => (
              <KeyboardRow
                key={rowIndex}
                keys={row}
                shiftActive={shiftActive}
                altActive={altActive}
                deadKeyActive={deadKeyActive}
                onKeyClick={handleKeyClick}
                onDeadKeyToggle={toggleDeadKey}
              />
            ))}
          </div>
        </div>

        {/* Toggle bar */}
        <KeyboardToggles
          shiftActive={shiftActive}
          altActive={altActive}
          deadKeyActive={deadKeyActive}
          onToggleShift={toggleShift}
          onToggleAlt={toggleAlt}
          onToggleDeadKey={toggleDeadKey}
        />
      </CardContent>
    </Card>
  );
}
