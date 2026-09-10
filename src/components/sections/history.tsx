import { Landmark } from "lucide-react";
import { FacilityCard } from "@/components/facility-card";
import { HistoryFactCard } from "@/components/history-fact-card";
import { heritagePlaces, historyFacts } from "@/data/visitor-guides";

interface HistoryProps {
  onOpenAttraction?: (id: string) => void;
}

export function HistorySection({ onOpenAttraction }: HistoryProps) {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          History
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          How Clacton became a seaside town
        </h1>
        <p className="max-w-2xl text-fg-muted">
          Sourced facts from the research pack — pier, Peter Bruff&apos;s planned
          resort, Martello towers, St Osyth Priory and the 1931 Princes Theatre.
          Tap a fact to open its source.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Landmark className="h-4 w-4" />
          </span>
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Timeline facts
          </h2>
        </div>
        <ol className="grid gap-3">
          {historyFacts.map((item, index) => (
            <li key={item.id}>
              <HistoryFactCard
                fact={item.fact}
                sourceUrl={item.sourceUrl}
                index={index + 1}
                variant="timeline"
              />
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Heritage places
        </h2>
        <p className="max-w-2xl text-sm text-fg-muted">
          Research-backed heritage sites around Clacton and Tendring. Hotspot
          links open places already in this guide — no extra invented venues.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {heritagePlaces.map((place) => (
            <FacilityCard
              key={place.id}
              place={place}
              onOpenAttraction={onOpenAttraction}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
