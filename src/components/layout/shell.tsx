import { useState } from "react";
import { CalendarDays, Menu, Waves, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGuideStore } from "@/store/guide-store";
import {
  formatImageCredit,
  getAttributedAttractions,
} from "@/data/attractions";
import { researchAttribution } from "@/data/visitor-info";
import { GUIDE_NAV, PRIMARY_NAV, type SectionId } from "./sections";

export type { SectionId };

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
                Clacton-on-Sea
              </span>
              <span className="hidden text-xs text-fg-muted sm:block">
                Tendring sunshine coast
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 xl:flex">
            {PRIMARY_NAV.map((item) => {
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
              className="xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-bg-elevated px-4 py-3 xl:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              <p className="px-3 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-wider text-fg-subtle">
                Explore
              </p>
              {PRIMARY_NAV.map((item) => {
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
              <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-fg-subtle">
                Visitor guides
              </p>
              {GUIDE_NAV.map((item) => {
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
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        <div className="border-t border-border/70 bg-bg-subtle/70">
          <nav
            aria-label="Visitor guides"
            className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 sm:px-6"
          >
            {GUIDE_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-colors sm:text-sm",
                    isActive
                      ? "bg-primary text-primary-fg"
                      : "bg-bg-elevated text-fg hover:bg-bg-elevated/80",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="sm:hidden">{item.shortLabel ?? item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto min-w-0 max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </main>

      <footer className="mt-8 border-t border-border bg-bg-inverse text-fg-on-dark">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Waves className="h-5 w-5 text-accent" />
              <span className="font-display font-semibold">Clacton-on-Sea</span>
            </div>
            <p className="text-sm leading-relaxed text-fg-on-dark/70">
              A modern companion for the pier, Holland-on-Sea, Jaywick, St Osyth
              and a full year of Tendring coast events — all in one place.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-fg-on-dark/80">
              {PRIMARY_NAV.slice(0, 4).map((n) => (
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
              Visitor guides
            </p>
            <ul className="space-y-2 text-sm text-fg-on-dark/80">
              {GUIDE_NAV.map((n) => (
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
              Built for travellers · Clacton-on-Sea, Tendring, Essex
            </p>
            <p className="text-xs leading-relaxed text-fg-on-dark/45">
              {researchAttribution}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
