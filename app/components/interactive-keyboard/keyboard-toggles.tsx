import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Kbd } from "~/components/ui/kbd";
import { Separator } from "~/components/ui/separator";
import { DEAD_KEYS } from "./key-layout";
import type { DeadKeyId } from "./key-layout";

const DEAD_KEY_ORDER: DeadKeyId[] = [
  "apostrophe", "quote", "slash",
  "retroflex", "clicks", "implosives",
  "laterals", "dorsals", "alveolopalatals",
  "vowels", "nonIpa",
];

interface KeyboardTogglesProps {
  shiftActive: boolean;
  altActive: boolean;
  deadKeyActive: DeadKeyId | null;
  onToggleShift: () => void;
  onToggleAlt: () => void;
  onToggleDeadKey: (key: DeadKeyId) => void;
}

export function KeyboardToggles({
  shiftActive,
  altActive,
  deadKeyActive,
  onToggleShift,
  onToggleAlt,
  onToggleDeadKey,
}: KeyboardTogglesProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap mt-4 pt-4 border-t border-border">
      {/* Modifier toggles */}
      <Button
        size="sm"
        variant={shiftActive ? "default" : "outline"}
        onClick={onToggleShift}
        aria-pressed={shiftActive}
      >
        Shift
      </Button>

      <Button
        size="sm"
        variant={altActive ? "default" : "outline"}
        onClick={onToggleAlt}
        aria-pressed={altActive}
      >
        Alt
      </Button>

      <Separator orientation="vertical" className="h-6" />

      {/* Dead key toggles */}
      {/* Dead keys */}
      {DEAD_KEY_ORDER.filter(id => DEAD_KEYS[id].type === "dead").map((id) => {
        const info = DEAD_KEYS[id];
        const isActive = deadKeyActive === id;
        return (
          <Button
            key={id}
            size="sm"
            variant="outline"
            onClick={() => onToggleDeadKey(id)}
            aria-pressed={isActive}
            className={cn(
              isActive && "bg-dead-key text-white border-dead-key hover:bg-dead-key/90 hover:text-white dark:bg-dead-key dark:border-dead-key dark:hover:bg-dead-key/90 dark:hover:text-white",
              !isActive && "text-dead-key hover:text-dead-key",
            )}
          >
            {info.label} <Kbd className="text-inherit bg-gray-300/30 dark:bg-gray-700/30">{info.char}</Kbd>
          </Button>
        );
      })}

      <Separator orientation="vertical" className="h-6" />

      {/* Extended keys */}
      {DEAD_KEY_ORDER.filter(id => DEAD_KEYS[id].type === "extended").map((id) => {
        const info = DEAD_KEYS[id];
        const isActive = deadKeyActive === id;
        return (
          <Button
            key={id}
            size="sm"
            variant="outline"
            onClick={() => onToggleDeadKey(id)}
            aria-pressed={isActive}
            className={cn(
              isActive && "bg-ext-key text-white border-ext-key hover:bg-ext-key/90 hover:text-white dark:bg-ext-key dark:border-ext-key dark:hover:bg-ext-key/90 dark:hover:text-white",
              !isActive && "text-ext-key hover:text-ext-key",
            )}
          >
            {info.label} <Kbd className="text-inherit bg-gray-300/30 dark:bg-gray-700/30">{info.char}</Kbd>
          </Button>
        );
      })}
    </div>
  );
}
