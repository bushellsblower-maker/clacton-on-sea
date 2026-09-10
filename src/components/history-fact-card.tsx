import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface HistoryFactCardProps {
  fact: string;
  /** Research source URL — the only outbound link on a history fact. */
  sourceUrl: string;
  /** 1-based timeline number. Omit for compact overview cards. */
  index?: number;
  variant?: "plain" | "timeline" | "numbered";
  className?: string;
}

/**
 * Whole-card press opens `sourceUrl` in a new tab.
 * History facts have a single source; that URL is always used.
 */
export function HistoryFactCard({
  fact,
  sourceUrl,
  index,
  variant = "plain",
  className,
}: HistoryFactCardProps) {
  const numbered = variant === "timeline" || variant === "numbered";

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-xl text-inherit no-underline"
    >
      <Card
        className={cn(
          "h-full shadow-none transition-shadow group-hover:shadow-md",
          variant === "plain" && "min-w-0 border-border/80",
          className,
        )}
      >
        <CardContent
          className={cn(
            numbered
              ? variant === "timeline"
                ? "flex gap-4 p-5"
                : "flex gap-3 p-4"
              : "space-y-2 p-4",
          )}
        >
          {variant === "timeline" && index != null && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-subtle font-display text-sm font-semibold tabular-nums text-fg">
              {index}
            </span>
          )}
          {variant === "numbered" && index != null && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-fg tabular-nums">
              {index}
            </span>
          )}
          <div className="min-w-0 space-y-1.5">
            <p className="text-sm leading-relaxed text-fg">{fact}</p>
            <span className="inline-flex items-center gap-1 text-xs text-fg-subtle">
              Opens source
              <ExternalLink className="h-3 w-3" />
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
