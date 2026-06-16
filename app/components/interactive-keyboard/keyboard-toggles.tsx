import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Kbd } from "~/components/ui/kbd";
import { Separator } from "~/components/ui/separator";

const DEAD_KEY_LABELS: Record<string, { label: string; char: string }> = {
  "'": { label: "Diacritics", char: "'" },
  '"': { label: "Doubled Diacritics", char: '"' },
  "/": { label: "Slash", char: "/" },
};

interface KeyboardTogglesProps {
  shiftActive: boolean;
  altActive: boolean;
  deadKeyActive: "'" | '"' | '/' | null;
  onToggleShift: () => void;
  onToggleAlt: () => void;
  onToggleDeadKey: (key: "'" | '"' | '/') => void;
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
      <Button
        size="sm"
        variant="outline"
        onClick={() => onToggleDeadKey("'")}
        aria-pressed={deadKeyActive === "'"}
        className={cn(
          deadKeyActive === "'" && "bg-dead-key text-white border-dead-key hover:bg-dead-key/90 hover:text-white dark:bg-dead-key dark:border-dead-key dark:hover:bg-dead-key/90 dark:hover:text-white",
          deadKeyActive !== "'" && "text-dead-key hover:text-dead-key",
        )}
      >
        {DEAD_KEY_LABELS["'"].label} <Kbd className="text-inherit bg-gray-300/30 dark:bg-gray-700/30">{DEAD_KEY_LABELS["'"].char}</Kbd>
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={() => onToggleDeadKey('"')}
        aria-pressed={deadKeyActive === '"'}
        className={cn(
          deadKeyActive === '"' && "bg-dead-key text-white border-dead-key hover:bg-dead-key/90 hover:text-white dark:bg-dead-key dark:border-dead-key dark:hover:bg-dead-key/90 dark:hover:text-white",
          deadKeyActive !== '"' && "text-dead-key hover:text-dead-key",
        )}
      >
        {DEAD_KEY_LABELS['"'].label} <Kbd className="text-inherit bg-gray-300/30 dark:bg-gray-700/30">{DEAD_KEY_LABELS['"'].char}</Kbd>
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={() => onToggleDeadKey('/')}
        aria-pressed={deadKeyActive === '/'}
        className={cn(
          deadKeyActive === '/' && "bg-dead-key text-white border-dead-key hover:bg-dead-key/90 hover:text-white dark:bg-dead-key dark:border-dead-key dark:hover:bg-dead-key/90 dark:hover:text-white",
          deadKeyActive !== '/' && "text-dead-key hover:text-dead-key",
        )}
      >
        {DEAD_KEY_LABELS["/"].label} <Kbd className="text-inherit bg-gray-300/30 dark:bg-gray-700/30">{DEAD_KEY_LABELS["/"].char}</Kbd>
      </Button>
    </div>
  );
}
