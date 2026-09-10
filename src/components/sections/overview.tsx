import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";
import { WeatherForecast } from "@/components/weather-forecast";
import { GUIDE_NAV } from "@/components/layout/sections";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  attractions,
  displayAttractionImage,
  getAttractionById,
  getFeaturedAttractions,
} from "@/data/attractions";
import { AttractionPhoto } from "@/components/attraction-photo";
import { PhotoCredit } from "@/components/photo-credit";
import {
  buildYearEvents,
  eventStatus,
  formatEventDateRange,
  filterEvents,
} from "@/data/events";
import { itineraries } from "@/data/itineraries";
import { quickFacts } from "@/data/practical";
import { historyFacts } from "@/data/visitor-info";
import type { SectionId } from "@/components/layout/sections";

interface OverviewProps {
  onNavigate: (id: SectionId) => void;
  onOpenAttraction: (id: string) => void;
}

export function OverviewSection({
  onNavigate,
  onOpenAttraction,
}: OverviewProps) {
  const today = new Date();
  const allEvents = buildYearEvents(today);
  const upcoming = filterEvents(
    allEvents,
    {
      query: "",
      category: "all",
      time: "upcoming",
      month: "all",
      freeOnly: false,
    },
    today,
  ).slice(0, 4);
  const liveNow = allEvents.filter((e) => eventStatus(e, today) === "live");
  const featured = getFeaturedAttractions().slice(0, 4);
  const heroAttraction = getAttractionById("clacton-pier");

  return (
    <div className="min-w-0 space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-bg-inverse text-fg-on-dark shadow-lg">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: heroAttraction
              ? `url(${displayAttractionImage(heroAttraction, 1280)})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-inverse via-bg-inverse/90 to-bg-inverse/50" />
        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="min-w-0 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-0 bg-accent/20 text-fg-on-dark">
                <Sun className="mr-1 h-3 w-3" />
                Essex Sunshine Coast
              </Badge>
              <Badge className="border-0 bg-white/10 text-fg-on-dark">
                {format(today, "EEE d MMM yyyy")}
              </Badge>
              {liveNow.length > 0 && (
                <Badge className="border-0 bg-success-soft text-success">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                  {liveNow.length} live now
                </Badge>
              )}
            </div>
            <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Discover Clacton — pier, sands & Tendring coast
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-fg-on-dark/75 sm:text-lg">
              A modern guide to Clacton Pier, Holland-on-Sea, Jaywick, St Osyth,
              verified cafés and a full year of live events. Plan your Essex
              sunshine-coast escape in minutes.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                size="lg"
                variant="inverse"
                onClick={() => onNavigate("attractions")}
              >
                Explore hotspots
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-fg-on-dark hover:bg-white/10"
                onClick={() => onNavigate("events")}
              >
                <CalendarDays className="h-4 w-4" />
                Look up events
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-end">
            {[
              { n: String(attractions.length), l: "Hotspots" },
              { n: "Year-round", l: "Events calendar" },
              { n: String(itineraries.length), l: "Ready itineraries" },
              { n: "LST", l: "Direct from London" },
            ].map((stat) => (
              <div
                key={stat.l}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="font-display text-xl font-semibold tabular-nums sm:text-2xl">
                  {stat.n}
                </p>
                <p className="mt-0.5 text-xs text-fg-on-dark/60 sm:text-sm">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </div>
        {heroAttraction && (
          <p className="relative px-6 pb-4 text-[10px] text-fg-on-dark/50 sm:px-10 lg:px-12">
            Photo: {heroAttraction.imageCredit}
            {heroAttraction.imageLicense
              ? ` · ${heroAttraction.imageLicense}`
              : ""}
          </p>
        )}
      </section>

      <WeatherForecast />

      <section className="min-w-0 space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Jump to
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Quick access
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {GUIDE_NAV.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="flex min-h-20 items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-left shadow-sm transition-shadow hover:shadow-md sm:min-h-24 sm:flex-col"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-semibold leading-snug sm:text-base">
                    {item.label}
                  </span>
                  {item.blurb && (
                    <span className="mt-1 block text-xs leading-snug text-fg-muted">
                      {item.blurb}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {quickFacts.map((f) => (
          <Card key={f.label} className="min-w-0 border-border/80 shadow-none">
            <CardContent className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-fg-subtle">
                {f.label}
              </p>
              <p className="mt-1 text-sm font-medium leading-snug text-fg">
                {f.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* History facts */}
      <section className="min-w-0 space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Heritage
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Short history of the coast
            </h2>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {historyFacts.slice(0, 6).map((fact) => (
            <Card key={fact.id} className="min-w-0 border-border/80 shadow-none">
              <CardContent className="space-y-2 p-4">
                <p className="text-sm leading-relaxed text-fg">{fact.fact}</p>
                <a
                  href={fact.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline"
                >
                  Source
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="ghost" onClick={() => onNavigate("history")}>
          Full history page
          <ArrowRight className="h-4 w-4" />
        </Button>
      </section>

      {/* Featured hotspots */}
      <section className="min-w-0 space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Must-see
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Signature hotspots
            </h2>
          </div>
          <Button
            variant="ghost"
            className="shrink-0"
            onClick={() => onNavigate("attractions")}
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => onOpenAttraction(a.id)}
              className="group min-w-0 overflow-hidden rounded-xl border border-border bg-bg-elevated text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <AttractionPhoto
                  attraction={a}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <PhotoCredit attraction={a} />
                <div className="absolute left-3 top-3">
                  <Badge variant="secondary" className="bg-bg-elevated/95">
                    {a.category}
                  </Badge>
                </div>
              </div>
              <div className="space-y-1.5 p-4">
                <h3 className="font-display font-semibold leading-snug">
                  {a.name}
                </h3>
                <p className="line-clamp-2 text-sm text-fg-muted">
                  {a.tagline}
                </p>
                <div className="flex items-center gap-1 pt-1 text-xs text-fg-subtle">
                  {a.rating != null && (
                    <>
                      <Star className="h-3.5 w-3.5 fill-warn text-warn" />
                      <span className="font-medium tabular-nums text-fg">
                        {a.rating}
                      </span>
                      <span>· </span>
                    </>
                  )}
                  <span>{a.price}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="min-w-0 space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Live calendar
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Coming up in Clacton
            </h2>
          </div>
          <Button
            variant="ghost"
            className="shrink-0"
            onClick={() => onNavigate("events")}
          >
            Full year
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {upcoming.map((e) => {
            const status = eventStatus(e, today);
            return (
              <Card
                key={e.id}
                className="min-w-0 max-w-full overflow-hidden transition-shadow hover:shadow-md"
              >
                <CardContent className="flex min-w-0 gap-3 p-4 sm:gap-4 sm:p-5">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <span className="text-[10px] font-semibold uppercase">
                      {format(new Date(e.startDate), "MMM")}
                    </span>
                    <span className="font-display text-xl font-semibold tabular-nums leading-none">
                      {format(new Date(e.startDate), "d")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 space-y-1 overflow-hidden">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline">{e.category}</Badge>
                      {status === "live" && (
                        <Badge variant="live">Live</Badge>
                      )}
                      {e.isFree && <Badge variant="success">Free</Badge>}
                    </div>
                    <h3 className="font-display font-semibold leading-snug">
                      {e.title}
                    </h3>
                    <p className="flex min-w-0 items-center gap-1 text-xs text-fg-muted">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">
                        {e.venue} · {formatEventDateRange(e)}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Watch-outs teaser */}
      <section className="overflow-hidden rounded-2xl border border-border bg-warn-soft/40">
        <div className="grid gap-4 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="min-w-0 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-warn">
              Before you go
            </p>
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Restricted reserves, dog bans, seasonal toilets and car-park locks
            </h2>
            <p className="max-w-lg text-sm text-fg-muted">
              Colne Point is not a casual public walk. Tendring DC publishes
              beach-safety flags, May–September dog maps, and night lock times
              for Martello Coach & Car Park.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => onNavigate("access-restrictions")}
          >
            Access restrictions
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA band */}
      <section className="overflow-hidden rounded-2xl border border-border bg-bg-elevated">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="min-w-0 space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Ready-made plans
              </span>
            </div>
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Not sure where to start? Grab an itinerary
            </h2>
            <p className="max-w-lg text-sm text-fg-muted">
              From pier days to Jaywick walks and family weekends — follow a
              curated route or save spots as you browse.
            </p>
          </div>
          <Button size="lg" onClick={() => onNavigate("itineraries")}>
            Browse itineraries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
