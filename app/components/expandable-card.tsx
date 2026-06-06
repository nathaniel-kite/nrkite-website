import { useState } from "react";
import type { ReactNode } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "../lib/utils";
import { Button } from "~/components/ui/button";

export interface ExpandableCardProps {
  /** Primary heading text. */
  title: ReactNode;
  /** Optional secondary line (e.g. role, subtitle). */
  subtitle?: ReactNode;
  /** Optional tertiary metadata line (e.g. location, date). */
  meta?: ReactNode;
  /** Optional logo rendered to the left of title/subtitle. */
  logo?: ReactNode;
  /** Content shown when collapsed. */
  shortContent: ReactNode;
  /** Content shown when expanded. */
  fullContent: ReactNode;
  /** When true, the card mounts in the expanded state. Defaults to false. */
  defaultExpanded?: boolean;
  /** Optionally false, does not show option to expand card. */
  showExpand?: boolean;
  /** Additional CSS classes to apply to the card. */
  className?: string;
  /** Optionally apply classes to title */
  titleClass?: string;
}

export function ExpandableCard({
  title,
  subtitle,
  meta,
  logo,
  shortContent,
  fullContent,
  defaultExpanded = false,
  showExpand = true,
  className,
  titleClass = ""
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <div className="flex gap-3">
          {logo && <div className="shrink-0">{logo}</div>}
          <div className="min-w-0 flex-1">
            <CardTitle><span className={titleClass}>{title}</span></CardTitle>
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
            {meta && (
              <div className="mt-1 text-xs text-muted-foreground">{meta}</div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="text-sm text-secondary-foreground">
          {isExpanded ? fullContent : shortContent}
        </div>
      </CardContent>
      {showExpand &&
        <CardFooter className="px-4 py-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary-foreground"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <CaretUpIcon weight="bold" />
            ) : (
              <CaretDownIcon weight="bold" />
            )}
          </Button>
        </CardFooter>
      }
    </Card>
  );
}
