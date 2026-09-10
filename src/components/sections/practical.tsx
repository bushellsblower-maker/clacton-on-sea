import {
  AlertTriangle,
  Ban,
  Bus,
  Car,
  ExternalLink,
  Info,
  Landmark,
  Map,
  MapPinned,
  Phone,
  Shield,
  Sun,
  Toilet,
  Train,
  Youtube,
} from "lucide-react";
import { practicalTips } from "@/data/practical";
import {
  carParks,
  dayTripNotes,
  externalLinks,
  historyFacts,
  nearBarnfields,
  publicToilets,
  researchAttribution,
  visitorCautions,
  youtubeVideos,
  type CautionSeverity,
} from "@/data/visitor-info";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import type { SectionId } from "@/components/layout/shell";

const ICONS: Record<string, LucideIcon> = {
  train: Train,
  car: Car,
  bus: Bus,
  sun: Sun,
  info: Info,
  map: Map,
  phone: Phone,
  shield: Shield,
};

const SEVERITY: Record<
  CautionSeverity,
  { label: string; variant: "danger" | "warn" | "outline"; icon: LucideIcon }
> = {
  avoid: { label: "Restricted", variant: "danger", icon: Ban },
  caution: { label: "Caution", variant: "warn", icon: AlertTriangle },
  info: { label: "Note", variant: "outline", icon: Info },
};

interface PracticalProps {
  onOpenAttraction?: (id: string) => void;
  onNavigate?: (id: SectionId) => void;
}

export function PracticalSection({
  onOpenAttraction,
  onNavigate,
}: PracticalProps) {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Visitor info
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Plan the practical bits
        </h1>
        <p className="max-w-2xl text-fg-muted">
          How to arrive from Liverpool Street, get around the Tendring coast,
          and make the most of Clacton's beaches, Airshow and Carnival.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {practicalTips.map((tip) => {
          const Icon = ICONS[tip.icon] ?? Info;
          return (
            <Card key={tip.id} className="transition-shadow hover:shadow-md">
              <CardContent className="flex gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{tip.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {tip.body}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="space-y-4" id="watch-outs">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Watch-outs
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Access, dogs, tides and locks
          </h2>
          <p className="max-w-2xl text-sm text-fg-muted">
            Factual notes from Tendring District Council and Essex Wildlife
            Trust. No neighbourhood commentary — just what to check before you
            go.
          </p>
        </header>
        <div className="grid gap-3 md:grid-cols-2">
          {visitorCautions.map((item) => {
            const sev = SEVERITY[item.severity];
            const Icon = sev.icon;
            return (
              <Card key={item.id} className="min-w-0">
                <CardContent className="space-y-2 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={sev.variant}>
                      <Icon className="mr-1 h-3 w-3" />
                      {sev.label}
                    </Badge>
                    <span className="text-xs text-fg-subtle">{item.where}</span>
                  </div>
                  <h3 className="font-display font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {item.advice}
                  </p>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Source
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-4" id="toilets">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Public toilets
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Conveniences (Tendring DC)
          </h2>
          <p className="max-w-2xl text-sm text-fg-muted">
            Listed from Tendring District Council. Seasonal blocks typically
            open Good Friday–31 October; year-round sites are marked. Hours can
            shift with Easter reopen dates — confirm on the council pages.
            Jaywick beach toilets are not at the waterline.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2">
          {publicToilets.map((t) => (
            <Card key={t.id}>
              <CardContent className="flex gap-3 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Toilet className="h-5 w-5" />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-semibold leading-snug">
                      {t.name}
                    </h3>
                    <Badge variant={t.season === "seasonal" ? "warn" : "success"}>
                      {t.season === "seasonal" ? "Seasonal" : "Year-round"}
                    </Badge>
                  </div>
                  <p className="text-xs text-fg-subtle">
                    {t.area} · {t.location}
                  </p>
                  <p className="text-sm text-fg-muted">{t.openNote}</p>
                  <p className="text-xs text-fg-subtle">
                    {t.facilities.join(" · ")}
                  </p>
                  <a
                    href={t.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Tendring DC page
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" id="parking">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Parking
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Tendring DC car parks
          </h2>
          <p className="max-w-2xl text-sm text-fg-muted">
            Mi Permit codes and lock times come from Tendring DC. Revised fees
            were approved for 2025/26 — treat any pound figure as uncertain and
            check the live tariff or on-site machines.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2">
          {carParks.map((p) => (
            <Card key={p.id}>
              <CardContent className="flex gap-3 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Car className="h-5 w-5" />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <h3 className="font-display font-semibold leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-xs text-fg-subtle">
                    {p.area} · {p.spaces}
                    {p.miPermit ? ` · Mi ${p.miPermit}` : ""}
                  </p>
                  <p className="text-sm text-fg-muted">{p.notes}</p>
                  {p.lockNote && (
                    <p className="text-sm font-medium text-warn">{p.lockNote}</p>
                  )}
                  <p className="text-xs text-fg-subtle">{p.location}</p>
                  <a
                    href={p.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Tendring DC page
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" id="near-barnfields">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Inland base
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            If you're based near Barnfields / Little Clacton
          </h2>
          <p className="max-w-2xl text-sm text-fg-muted">
            Around CO16 9EF (Weeley Heath–Little Clacton). This is a practical
            orientation, not a listing for any guest house. Use it to reach
            nearby woods, the village church, the shopping village and the pier.
          </p>
        </header>
        <div className="grid gap-3">
          {nearBarnfields.map((stop) => (
            <Card key={stop.id}>
              <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="flex min-w-0 gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold">{stop.name}</h3>
                    <p className="mt-1 text-sm text-fg-muted">{stop.detail}</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  {stop.attractionId && onOpenAttraction && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onOpenAttraction(stop.attractionId!)}
                    >
                      Open hotspot
                    </Button>
                  )}
                  {stop.officialUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={stop.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Official
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {onNavigate && (
          <Button variant="outline" onClick={() => onNavigate("itineraries")}>
            Open the matching itinerary
          </Button>
        )}
      </section>

      <section className="space-y-4" id="history">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Heritage
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            History facts
          </h2>
        </header>
        <ol className="grid gap-3 sm:grid-cols-2">
          {historyFacts.map((fact, i) => (
            <li key={fact.id}>
              <Card className="h-full shadow-none">
                <CardContent className="flex gap-3 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-fg tabular-nums">
                    {i + 1}
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <p className="text-sm leading-relaxed">{fact.fact}</p>
                    <a
                      href={fact.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      Source
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4" id="resources">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Resources
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Official links & films
          </h2>
          <p className="max-w-2xl text-sm text-fg-muted">
            Verified URLs only. YouTube entries are the watch links checked in
            the 2026-09-10 research pack.
          </p>
        </header>
        {dayTripNotes.map((note) => (
          <Card key={note.id} className="border-dashed shadow-none">
            <CardContent className="p-4 text-sm text-fg-muted sm:p-5">
              {note.note}{" "}
              <a
                href={note.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                Naze Tower
              </a>
            </CardContent>
          </Card>
        ))}
        <div className="grid gap-2 sm:grid-cols-2">
          {externalLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-left transition-shadow hover:shadow-md"
            >
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block font-medium leading-snug">
                  {link.title}
                </span>
                <span className="mt-0.5 block text-sm text-fg-muted">
                  {link.why}
                </span>
              </span>
            </a>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {youtubeVideos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 transition-shadow hover:shadow-md"
            >
              <Youtube className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block font-medium leading-snug">
                  {video.title}
                </span>
                <span className="mt-0.5 block text-xs text-fg-subtle">
                  {video.channel}
                </span>
                <span className="mt-1 block text-sm text-fg-muted">
                  {video.topic}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <Card className="overflow-hidden border-0 bg-bg-inverse text-fg-on-dark">
        <CardContent className="grid gap-6 p-6 sm:p-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Best seasons
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>
                <span className="font-medium text-fg-on-dark">Spring</span> —
                quieter sands, Holland Haven birds, woodland bluebells
              </li>
              <li>
                <span className="font-medium text-fg-on-dark">Summer</span> —
                pier, Carnival, Airshow
              </li>
              <li>
                <span className="font-medium text-fg-on-dark">Autumn</span> —
                Oktoberfest, FEAR, soft light walks
              </li>
              <li>
                <span className="font-medium text-fg-on-dark">Winter</span> —
                grotto, theatre, stormy North Sea
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Packing essentials
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>Windproof layer for the pier and sea wall</li>
              <li>Sturdy shoes for country-park and reserve paths</li>
              <li>Sunscreen — yes, even in Essex</li>
              <li>Reusable bottle & picnic kit</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Useful contacts
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>Airshow: clactonairshow.com</li>
              <li>Pier events: clactonpier.co.uk</li>
              <li>Trains: Greater Anglia · Liverpool Street</li>
              <li>Emergency: 999 · NHS 111</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-fg-subtle">
        <Landmark className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        {researchAttribution}
      </p>
    </div>
  );
}
