import { useMemo, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  CalendarDays,
  Clock,
  MapPin,
  Search,
  Ticket,
} from "lucide-react";
import { format } from "date-fns";
import {
  buildYearEvents,
  EVENT_CATEGORIES,
  eventStatus,
  eventsByMonth,
  filterEvents,
  formatEventDateRange,
  getMonthLabels,
  type EventCategory,
  type EventFilters,
  type EventTimeFilter,
  type GuideEvent,
} from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useGuideStore } from "@/store/guide-store";

const TIME_FILTERS: { id: EventTimeFilter; label: string }[] = [
  { id: "upcoming", label: "Upcoming" },
  { id: "today", label: "Today" },
  { id: "week", label: "This week" },
  { id: "month", label: "This month" },
  { id: "all", label: "All year" },
  { id: "past", label: "Past" },
];

export function EventsSection() {
  const today = useMemo(() => new Date(), []);
  const allEvents = useMemo(() => buildYearEvents(today), [today]);
  const monthStats = useMemo(
    () => eventsByMonth(allEvents, today.getFullYear()),
    [allEvents, today],
  );
  const monthLabels = getMonthLabels();

  const [filters, setFilters] = useState<EventFilters>({
    query: "",
    category: "all",
    time: "upcoming",
    month: "all",
    freeOnly: false,
  });

  const toggleEvent = useGuideStore((s) => s.toggleEvent);
  const savedEventIds = useGuideStore((s) => s.savedEventIds);

  const results = useMemo(
    () => filterEvents(allEvents, filters, today),
    [allEvents, filters, today],
  );

  const liveCount = allEvents.filter(
    (e) => eventStatus(e, today) === "live",
  ).length;
  const freeUpcoming = filterEvents(
    allEvents,
    {
      query: "",
      category: "all",
      time: "upcoming",
      month: "all",
      freeOnly: true,
    },
    today,
  ).length;

  const set = <K extends keyof EventFilters>(key: K, value: EventFilters[K]) =>
    setFilters((f) => ({ ...f, [key]: value }));

  return (
    <div className="min-w-0 space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Live events
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          What's on — all year round
        </h1>
        <p className="max-w-2xl text-fg-muted">
          Search and filter Clacton's year-long programme: Airshow, Carnival,
          pier fireworks, Pirates Ahoy, FEAR, markets and theatre.
          Dates update relative to today (
          {format(today, "d MMMM yyyy")}).
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          {
            label: "In calendar",
            value: String(allEvents.length),
            sub: "events this year",
          },
          {
            label: "Happening now",
            value: String(liveCount),
            sub: "active today",
          },
          {
            label: "Free upcoming",
            value: String(freeUpcoming),
            sub: "no ticket needed",
          },
          {
            label: "Showing",
            value: String(results.length),
            sub: "match your filters",
          },
        ].map((s) => (
          <Card key={s.label} className="min-w-0 shadow-none">
            <CardContent className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-fg-subtle">
                {s.label}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold tabular-nums">
                {s.value}
              </p>
              <p className="text-xs text-fg-muted">{s.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="min-w-0 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
          Browse by month · {today.getFullYear()}
        </p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
          {monthStats.map((m) => {
            const active = filters.month === m.month;
            const intensity = Math.min(1, m.count / 12);
            return (
              <button
                key={m.month}
                type="button"
                onClick={() => {
                  set("month", active ? "all" : m.month);
                  if (!active) set("time", "all");
                }}
                className={cn(
                  "min-w-0 rounded-lg border px-1 py-2.5 text-center transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-fg"
                    : "border-border bg-bg-elevated hover:border-border-strong",
                )}
              >
                <span className="block text-[11px] font-semibold uppercase">
                  {m.label}
                </span>
                <span
                  className={cn(
                    "mt-0.5 block text-sm font-semibold tabular-nums",
                    !active && intensity > 0.5 && "text-accent",
                  )}
                >
                  {m.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-w-0 space-y-3 rounded-xl border border-border bg-bg-elevated p-4 shadow-sm">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
          <Input
            value={filters.query}
            onChange={(e) => set("query", e.target.value)}
            placeholder="Search events, venues, tags…"
            className="pl-10"
            aria-label="Search events"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {TIME_FILTERS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                set("time", t.id);
                if (t.id !== "all") set("month", "all");
              }}
              className={cn(
                "h-9 rounded-full border px-3.5 text-sm font-medium transition-colors",
                filters.time === t.id
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-bg text-fg-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={filters.category}
            onChange={(e) =>
              set("category", e.target.value as EventCategory | "all")
            }
            className="h-10 max-w-full rounded-md border border-border bg-bg px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Filter by category"
          >
            <option value="all">All categories</option>
            {EVENT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => set("freeOnly", !filters.freeOnly)}
            className={cn(
              "h-10 rounded-md border px-3 text-sm font-medium transition-colors",
              filters.freeOnly
                ? "border-success bg-success-soft text-success"
                : "border-border bg-bg text-fg-muted hover:text-fg",
            )}
          >
            Free only
          </button>

          {(filters.query ||
            filters.category !== "all" ||
            filters.month !== "all" ||
            filters.freeOnly ||
            filters.time !== "upcoming") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setFilters({
                  query: "",
                  category: "all",
                  time: "upcoming",
                  month: "all",
                  freeOnly: false,
                })
              }
            >
              Reset
            </Button>
          )}
        </div>

        {filters.month !== "all" && (
          <p className="text-sm text-fg-muted">
            Showing{" "}
            <span className="font-medium text-fg">
              {monthLabels[filters.month]}
            </span>{" "}
            · {results.length} event{results.length === 1 ? "" : "s"}
          </p>
        )}
      </div>

      <div className="min-w-0 space-y-3">
        {results.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            today={today}
            saved={savedEventIds.includes(event.id)}
            onToggleSave={() => toggleEvent(event.id)}
          />
        ))}

        {results.length === 0 && (
          <div className="rounded-xl border border-dashed border-border-strong bg-bg-subtle/50 px-6 py-14 text-center">
            <CalendarDays className="mx-auto h-8 w-8 text-fg-subtle" />
            <p className="mt-3 font-medium">No events match these filters</p>
            <p className="mt-1 text-sm text-fg-muted">
              Try "All year" or clear the free-only toggle.
            </p>
            <Button
              className="mt-4"
              variant="outline"
              onClick={() =>
                setFilters({
                  query: "",
                  category: "all",
                  time: "all",
                  month: "all",
                  freeOnly: false,
                })
              }
            >
              Show all year
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function EventCard({
  event,
  today,
  saved,
  onToggleSave,
}: {
  event: GuideEvent;
  today: Date;
  saved: boolean;
  onToggleSave: () => void;
}) {
  const status = eventStatus(event, today);
  const start = new Date(event.startDate);

  return (
    <Card className="min-w-0 max-w-full overflow-hidden transition-shadow hover:shadow-md">
      <CardContent className="flex min-w-0 flex-col gap-4 p-4 sm:flex-row sm:p-5">
        <div
          className={cn(
            "flex h-16 w-full shrink-0 flex-row items-center justify-center gap-2 rounded-lg sm:h-auto sm:w-20 sm:flex-col sm:gap-0 sm:py-3",
            status === "live"
              ? "bg-success-soft text-success"
              : status === "past"
                ? "bg-bg-subtle text-fg-subtle"
                : "bg-accent-soft text-accent",
          )}
        >
          <span className="text-xs font-semibold uppercase">
            {format(start, "MMM")}
          </span>
          <span className="font-display text-2xl font-semibold tabular-nums leading-none">
            {format(start, "d")}
          </span>
        </div>

        <div className="min-w-0 flex-1 space-y-2 overflow-hidden">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{event.category}</Badge>
            {status === "live" && (
              <Badge variant="live">
                <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                Happening now
              </Badge>
            )}
            {status === "upcoming" && (
              <Badge variant="secondary">Upcoming</Badge>
            )}
            {status === "past" && <Badge variant="outline">Past</Badge>}
            {event.isFree && <Badge variant="success">Free</Badge>}
            {event.featured && <Badge variant="default">Highlight</Badge>}
          </div>

          <h3 className="font-display text-lg font-semibold leading-snug">
            {event.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-fg-muted">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-fg-subtle">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5 shrink-0" />
              {formatEventDateRange(event)}
            </span>
            {event.startTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                {event.startTime}
                {event.endTime ? `–${event.endTime}` : ""}
              </span>
            )}
            <span className="inline-flex min-w-0 items-center gap-1">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{event.venue}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Ticket className="h-3.5 w-3.5 shrink-0" />
              {event.price}
            </span>
          </div>

          {event.recurring && (
            <p className="text-xs text-accent">{event.recurring}</p>
          )}
        </div>

        <div className="flex shrink-0 items-start sm:flex-col">
          <Button
            variant="ghost"
            size="icon"
            aria-label={saved ? "Unsave event" : "Save event"}
            onClick={onToggleSave}
          >
            {saved ? (
              <BookmarkCheck className="h-5 w-5 text-accent" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
