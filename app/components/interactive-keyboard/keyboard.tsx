import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { KEYBOARD_ROWS } from "./key-layout";
import type { KeyDef, DeadKeyId } from "./key-layout";
import { KeyboardRow } from "./keyboard-row";
import { KeyboardToggles } from "./keyboard-toggles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Kbd } from "../ui/kbd";

export function Keyboard() {
  const [shiftActive, setShiftActive] = useState(false);
  const [altActive, setAltActive] = useState(false);
  const [deadKeyActive, setDeadKeyActive] = useState<DeadKeyId | null>(null);

  const toggleShift = () => setShiftActive((v) => !v);
  const toggleAlt = () => setAltActive((v) => !v);

  /** Activates a dead key; deactivates if already active (mutual exclusion). */
  const toggleDeadKey = (key: DeadKeyId) => {
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
      <CardContent className="px-4 pt-4 sm:px-6 sm:pt-4">
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
        <Accordion type="single" collapsible className="w-full border-t mt-4">
          <AccordionItem value="basic-functionality">
            <AccordionTrigger>Basic Functionality</AccordionTrigger>
            <AccordionContent className="space-y-4 text-secondary-foreground">
              <p>
                This keyboard uses dead keys, AltGr, and combining diacritics.
              </p>
              <p>
                <span className="font-bold text-foreground italic">Dead Keys.</span> Dead keys let you press two keys in sequence
                to instead send a single, different character. For example, you can type <Kbd>/</Kbd>, <Kbd>o</Kbd> to get <Kbd>ø</Kbd>.
                For all dead keys on this keyboard, you can press <Kbd>Space</Kbd> to get the original value of the character (eg. <Kbd>'</Kbd>, <Kbd>Space</Kbd> renders <Kbd>'</Kbd>).
              </p>
              <p>
                <span className="font-bold text-foreground italic">AltGr.</span> You can press the right <Kbd>Alt</Kbd> key to access extra characters. These
                can also be combined with <Kbd>Shift</Kbd> and dead keys. <Kbd>AltGr</Kbd> + <Kbd>t</Kbd> renders <Kbd>θ</Kbd>, and <Kbd>'</Kbd>, <Kbd>θ</Kbd> renders <Kbd>ᶿ</Kbd>.
              </p>
              <p>
                <span className="font-bold text-foreground italic">Combining Diacritics.</span> With rare exceptions, this keyboard uses combining diacritics, rather than precomposed
                characters. This allows you to put any diacritic on any character, subject to proper rendering. Combining diacritics go after the letter they modify:
                <Kbd>a</Kbd>, <Kbd>'</Kbd>, <Kbd>'</Kbd> renders <Kbd>á</Kbd>. You can also stack them, eg. <Kbd>ử</Kbd>.
              </p>
              <p>
                Unfortunately, combining diacritics won't render properly in non-IPA compatible fonts, and many websites cut out combining diacritics even when they support
                precomposed characters. But word processors, Discord, and plenty of other software works just fine.
              </p>
              <p>
                For this model, I've displayed the diacritics on appropriate characters, just so it's a little easier to read.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
