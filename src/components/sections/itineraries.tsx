import { Clock, Compass, Users } from "lucide-react";
import { itineraries } from "@/data/itineraries";
import { getAttractionById } from "@/data/attractions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SectionId } from "@/components/layout/sections";

interface ItinerariesProps {
  onOpenAttraction: (id: string) => void;
  onNavigate: (id: SectionId) => void;
}

export function ItinerariesSection({
  onOpenAttraction,
  onNavigate,
}: ItinerariesProps) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Itineraries
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Ready-made days out
        </h1>
        <p className="max-w-2xl text-fg-muted">
          Follow a curated route — or mix and match with saved hotspots and the
          live events calendar.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {itineraries.map((plan) => (
          <Card key={plan.id} className="overflow-hidden">
            <CardHeader className="space-y-3 border-b border-border bg-bg-subtle/40 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{plan.vibe}</Badge>
                <Badge variant="outline">
                  <Clock className="mr-1 h-3 w-3" />
                  {plan.days === 1 ? "1 day" : `${plan.days} days`}
                </Badge>
              </div>
              <CardTitle className="text-xl">{plan.title}</CardTitle>
              <p className="text-sm text-fg-muted">{plan.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {plan.bestFor.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1 rounded-full bg-bg-elevated px-2.5 py-0.5 text-xs text-fg-muted ring-1 ring-border"
                  >
                    <Users className="h-3 w-3" />
                    {b}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ol className="divide-y divide-border">
                {plan.stops.map((stop, i) => {
                  const attr = stop.attractionId
                    ? getAttractionById(stop.attractionId)
                    : undefined;
                  return (
                    <li
                      key={`${plan.id}-${i}`}
                      className="flex gap-3 px-5 py-3.5"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-fg tabular-nums">
                        {i + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                          {stop.time}
                        </p>
                        <p className="font-medium leading-snug">{stop.title}</p>
                        <p className="mt-0.5 text-sm text-fg-muted">
                          {stop.detail}
                        </p>
                        {attr && (
                          <button
                            type="button"
                            onClick={() => onOpenAttraction(attr.id)}
                            className="mt-1.5 text-xs font-medium text-accent hover:underline"
                          >
                            Open {attr.name} →
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed bg-bg-subtle/30 shadow-none">
        <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display font-semibold">
                Pair with live events
              </p>
              <p className="text-sm text-fg-muted">
                Check what's on during your visit and drop a concert or
                market into your day.
              </p>
            </div>
          </div>
          <Button onClick={() => onNavigate("events")}>Open events</Button>
        </CardContent>
      </Card>
    </div>
  );
}
