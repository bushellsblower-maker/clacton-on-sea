import { Bookmark, CalendarDays, Map } from "lucide-react";
import { attractions } from "@/data/attractions";
import { AttractionPhoto } from "@/components/attraction-photo";
import {
  buildYearEvents,
  formatEventDateRange,
} from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGuideStore } from "@/store/guide-store";
import type { SectionId } from "@/components/layout/shell";

interface SavedProps {
  onNavigate: (id: SectionId) => void;
  onOpenAttraction: (id: string) => void;
}

export function SavedSection({ onNavigate, onOpenAttraction }: SavedProps) {
  const savedAttractionIds = useGuideStore((s) => s.savedAttractionIds);
  const savedEventIds = useGuideStore((s) => s.savedEventIds);
  const toggleAttraction = useGuideStore((s) => s.toggleAttraction);
  const toggleEvent = useGuideStore((s) => s.toggleEvent);

  const savedPlaces = attractions.filter((a) =>
    savedAttractionIds.includes(a.id),
  );
  const allEvents = buildYearEvents();
  const savedEvents = allEvents.filter((e) => savedEventIds.includes(e.id));

  const empty = savedPlaces.length === 0 && savedEvents.length === 0;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Your list
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Saved for later
        </h1>
        <p className="max-w-2xl text-fg-muted">
          Bookmarks stay on this device so you can build your personal
          Clacton shortlist as you explore.
        </p>
      </header>

      {empty && (
        <Card className="border-dashed shadow-none">
          <CardContent className="flex flex-col items-center px-6 py-14 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-subtle text-fg-subtle">
              <Bookmark className="h-6 w-6" />
            </div>
            <p className="font-display text-lg font-semibold">
              Nothing saved yet
            </p>
            <p className="mt-1 max-w-sm text-sm text-fg-muted">
              Tap the bookmark on any hotspot or event to build your trip list.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Button onClick={() => onNavigate("attractions")}>
                <Map className="h-4 w-4" />
                Browse hotspots
              </Button>
              <Button variant="outline" onClick={() => onNavigate("events")}>
                <CalendarDays className="h-4 w-4" />
                Browse events
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {savedPlaces.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-lg font-semibold">
            Places · {savedPlaces.length}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {savedPlaces.map((a) => (
              <Card key={a.id}>
                <CardContent className="flex gap-3 p-3">
                  <AttractionPhoto
                    attraction={a}
                    className="h-20 w-24 shrink-0 rounded-lg"
                  />
                  <div className="min-w-0 flex-1">
                    <Badge variant="outline" className="mb-1">
                      {a.category}
                    </Badge>
                    <p className="font-medium leading-snug">{a.name}</p>
                    <div className="mt-2 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => onOpenAttraction(a.id)}
                      >
                        Open
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleAttraction(a.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {savedEvents.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-lg font-semibold">
            Events · {savedEvents.length}
          </h2>
          <div className="space-y-2">
            {savedEvents.map((e) => (
              <Card key={e.id}>
                <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-fg-muted">
                      {formatEventDateRange(e)} · {e.venue}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleEvent(e.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
