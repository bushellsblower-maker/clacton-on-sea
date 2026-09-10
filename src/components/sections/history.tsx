import { Landmark } from "lucide-react";
import { FacilityCard } from "@/components/facility-card";
import { Card, CardContent } from "@/components/ui/card";
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
          Each fact links to its source.
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
              <Card className="shadow-none">
                <CardContent className="flex gap-4 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-subtle font-display text-sm font-semibold tabular-nums text-fg">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm leading-relaxed text-fg">{item.fact}</p>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-medium text-accent underline-offset-2 hover:underline"
                    >
                      Source
                    </a>
                  </div>
                </CardContent>
              </Card>
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
