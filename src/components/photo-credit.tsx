import {
  formatImageCredit,
  hasAttractionPhoto,
  requiresImageAttribution,
  type Attraction,
} from "@/data/attractions";
import { cn } from "@/lib/utils";

interface PhotoCreditProps {
  attraction: Attraction;
  /** Overlay sits on the photo; caption sits below; inline is plain text. */
  variant?: "overlay" | "caption" | "inline";
  className?: string;
}

export function PhotoCredit({
  attraction,
  variant = "overlay",
  className,
}: PhotoCreditProps) {
  if (!hasAttractionPhoto(attraction) || !requiresImageAttribution(attraction)) {
    return null;
  }

  const label = `Photo: ${formatImageCredit(attraction)}`;
  const linked = Boolean(attraction.imageSourceUrl);

  if (variant === "overlay") {
    return (
      <p
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-fg/70 to-transparent px-3 pb-1.5 pt-8 text-[10px] leading-snug text-fg-on-dark/90",
          className,
        )}
      >
        {label}
      </p>
    );
  }

  if (variant === "inline") {
    return <span className={className}>{label}</span>;
  }

  return (
    <p className={cn("text-xs leading-snug text-fg-subtle", className)}>
      {linked ? (
        <a
          href={attraction.imageSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:text-fg hover:underline"
        >
          {label}
        </a>
      ) : (
        label
      )}
    </p>
  );
}
