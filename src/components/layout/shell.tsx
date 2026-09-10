import { useState } from "react";
import {
  CalendarDays,
  Compass,
  Info,
  Map,
  Menu,
  Route,
  Waves,
  X,
  Bookmark,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGuideStore } from "@/store/guide-store";
import {
  formatImageCredit,
  getAttributedAttractions,
} from "@/data/attractions";

export type SectionId =
  | "overview"
  | "attractions"
  | "events"
  | "itineraries"
  | "practical"
  | "saved";

const NAV: { id: SectionId; label: string; icon: typeof Compass }[] = [
  { id: "overview", label: "Overview", icon: Compass },
  { id: "attractions", label: "Hotspots", icon: Map },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "itineraries", label: "Itineraries", icon: Route },
  { id: "practical", label: "Visitor info", icon: Info },
  { id: "saved", label: "Saved", icon: Bookmark },
];

interface ShellProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
  children: React.ReactNode;
}

export function Shell({ active, onNavigate, children }: ShellProps) {
  const [open, setOpen] = useState(false);
  const savedCount =
    useGuideStore((s) => s.savedAttractionIds.length) +
    useGuideStore((s) => s.savedEventIds.length);

  const go = (id: SectionId) => {
    onNavigate(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-dvh min-w-0 overflow-x-hidden bg-bg">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => go("overview")}
            className="flex min-w-0 items-center gap-2.5 text-left"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg">
              <Waves className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-semibold tracking-tight text-fg sm:text-base">
                Eastbourne Guide
              </span>
              <span className="hidden text-xs text-fg-muted sm:block">
                UK's sunniest seaside
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={cn(
                    "inline-flex h-10 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-fg"
                      : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  {item.id === "saved" && savedCount > 0 && (
                    <span
                      className={cn(
                        "ml-0.5 rounded-full px-1.5 text-[10px] font-semibold tabular-nums",
                        isActive
                          ? "bg-primary-fg/15 text-primary-fg"
                          : "bg-accent-soft text-accent",
                      )}
                    >
                      {savedCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => go("events")}
            >
              <CalendarDays className="h-4 w-4" />
              What's on
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-bg-elevated px-4 py-3 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {NAV.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    className={cn(
                      "flex h-12 items-center gap-3 rounded-lg px-3 text-left text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-fg"
                        : "text-fg hover:bg-bg-subtle",
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {item.label}
                    {item.id === "saved" && savedCount > 0 && (
                      <span className="ml-auto rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent tabular-nums">
                        {savedCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </main>

      <footer className="mt-8 border-t border-border bg-bg-inverse text-fg-on-dark">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Waves className="h-5 w-5 text-accent" />
              <span className="font-display font-semibold">Eastbourne Guide</span>
            </div>
            <p className="text-sm leading-relaxed text-fg-on-dark/70">
              Your modern companion for chalk cliffs, Victorian seafront,
              year-round events and the South Downs — all in one place.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-fg-on-dark/80">
              {NAV.slice(0, 4).map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => go(n.id)}
                    className="hover:text-fg-on-dark"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Plan well
            </p>
            <p className="text-sm leading-relaxed text-fg-on-dark/70">
              Event dates are curated for planning and may vary year to year.
              Always confirm times with venues before you travel.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Photo credits
            </p>
            <ul className="columns-1 gap-x-8 text-xs leading-relaxed text-fg-on-dark/55 sm:columns-2 lg:columns-3">
              {getAttributedAttractions().map((a) => (
                <li key={a.id} className="mb-1.5 break-inside-avoid">
                  <span className="text-fg-on-dark/70">{a.name}</span>
                  {" — "}
                  {a.imageSourceUrl ? (
                    <a
                      href={a.imageSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-2 hover:text-fg-on-dark hover:underline"
                    >
                      {formatImageCredit(a)}
                    </a>
                  ) : (
                    formatImageCredit(a)
                  )}
                </li>
              ))}
            </ul>
            <p className="pt-1 text-xs text-fg-on-dark/50">
              Built for travellers · Eastbourne, East Sussex, England
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
