import { useEffect, useMemo, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  Clock,
  MapPin,
  Search,
  Star,
  Wallet,
  X,
} from "lucide-react";
import {
  attractions,
  CATEGORIES,
  type Attraction,
  type AttractionCategory,
} from "@/data/attractions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AttractionPhoto } from "@/components/attraction-photo";
import { PhotoCredit } from "@/components/photo-credit";
import { cn } from "@/lib/utils";
import { useGuideStore } from "@/store/guide-store";

interface AttractionsProps {
  focusId?: string | null;
  onClearFocus?: () => void;
}

export function AttractionsSection({
  focusId,
  onClearFocus,
}: AttractionsProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AttractionCategory | "all">("all");
  const [selected, setSelected] = useState<Attraction | null>(null);
  const toggle = useGuideStore((s) => s.toggleAttraction);
  const savedIds = useGuideStore((s) => s.savedAttractionIds);

  useEffect(() => {
    if (focusId) {
      const a = attractions.find((x) => x.id === focusId);
      if (a) setSelected(a);
    }
  }, [focusId]);

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        a.name.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.includes(q))
      );
    });
  }, [query, category]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Hotspots
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Places you'll remember
        </h1>
        <p className="max-w-2xl text-fg-muted">
          From Beachy Head to the Pier, Towner to Sovereign Harbour — every
          signature Eastbourne experience in one guide.
        </p>
      </header>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hotspots, tags, vibes…"
            className="pl-10"
            aria-label="Search attractions"
          />
        </div>
        <p className="text-sm text-fg-muted tabular-nums sm:shrink-0">
          {filtered.length} place{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        <FilterChip
          active={category === "all"}
          onClick={() => setCategory("all")}
          label="All"
        />
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c}
            active={category === c}
            onClick={() => setCategory(c)}
            label={c}
          />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => {
          const isSaved = savedIds.includes(a.id);
          return (
            <Card
              key={a.id}
              className={cn(
                "overflow-hidden transition-shadow hover:shadow-md",
                selected?.id === a.id && "ring-2 ring-ring",
              )}
            >
              <button
                type="button"
                className="block w-full text-left"
                onClick={() => {
                  setSelected(a);
                  onClearFocus?.();
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AttractionPhoto attraction={a} />
                  <PhotoCredit attraction={a} />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="bg-bg-elevated/95">
                      {a.category}
                    </Badge>
                    {a.featured && (
                      <Badge className="bg-primary text-primary-fg">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </button>
              <CardContent className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {a.name}
                    </h3>
                    <p className="text-sm text-fg-muted">{a.tagline}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={isSaved ? "Remove from saved" : "Save place"}
                    onClick={() => toggle(a.id)}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="h-4 w-4 text-accent" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-fg-subtle">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-warn text-warn" />
                    <span className="font-medium tabular-nums text-fg">
                      {a.rating}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {a.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Wallet className="h-3.5 w-3.5" />
                    {a.price}
                  </span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => setSelected(a)}
                >
                  View details
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-border-strong bg-bg-subtle/50 px-6 py-12 text-center">
          <p className="font-medium">No hotspots match your search</p>
          <p className="mt-1 text-sm text-fg-muted">
            Try another category or clear your filters.
          </p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Reset filters
          </Button>
        </div>
      )}

      {selected && (
        <AttractionDetail
          attraction={selected}
          isSaved={savedIds.includes(selected.id)}
          onToggleSave={() => toggle(selected.id)}
          onClose={() => {
            setSelected(null);
            onClearFocus?.();
          }}
        />
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 shrink-0 rounded-full border px-3.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-fg"
          : "border-border bg-bg-elevated text-fg-muted hover:border-border-strong hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}

function AttractionDetail({
  attraction: a,
  isSaved,
  onToggleSave,
  onClose,
}: {
  attraction: Attraction;
  isSaved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-fg/40 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="attraction-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-bg-elevated shadow-lg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[21/9] sm:aspect-[2/1]">
          <AttractionPhoto attraction={a} loading="eager" />
          <PhotoCredit attraction={a} />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated/95 text-fg shadow-sm"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                <Badge variant="accent">{a.category}</Badge>
                {a.tags.slice(0, 3).map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              <h2
                id="attraction-title"
                className="font-display text-2xl font-semibold tracking-tight"
              >
                {a.name}
              </h2>
              <p className="mt-1 text-fg-muted">{a.tagline}</p>
            </div>
            <Button
              variant={isSaved ? "secondary" : "default"}
              onClick={onToggleSave}
            >
              {isSaved ? (
                <BookmarkCheck className="h-4 w-4" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
              {isSaved ? "Saved" : "Save"}
            </Button>
          </div>

          <PhotoCredit attraction={a} variant="caption" />

          <p className="leading-relaxed text-fg">{a.description}</p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Clock, label: "Duration", value: a.duration },
              { icon: Wallet, label: "Price", value: a.price },
              {
                icon: Star,
                label: "Rating",
                value: `${a.rating} (${a.reviews.toLocaleString()})`,
              },
              { icon: MapPin, label: "Best time", value: a.bestTime },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-bg-subtle p-3">
                <item.icon className="mb-1.5 h-4 w-4 text-accent" />
                <p className="text-[11px] font-semibold uppercase tracking-wider text-fg-subtle">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm font-medium leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-2 font-display font-semibold">Highlights</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {a.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-fg-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-display font-semibold">Local tips</h3>
            <ul className="space-y-2">
              {a.tips.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-fg-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-2 rounded-lg bg-accent-soft px-3 py-3 text-sm text-accent">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{a.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
