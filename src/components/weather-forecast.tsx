import { useCallback, useEffect, useState } from "react";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  fetchClactonForecast,
  weatherIconKind,
  type ClactonForecast,
  type DailyForecast,
} from "@/lib/weather";
import { cn } from "@/lib/utils";

function WeatherGlyph({
  code,
  className,
}: {
  code: number;
  className?: string;
}) {
  const kind = weatherIconKind(code);
  const Icon =
    kind === "sun"
      ? Sun
      : kind === "cloud-sun"
        ? CloudSun
        : kind === "cloud"
          ? Cloud
          : kind === "fog"
            ? CloudFog
            : kind === "drizzle"
              ? CloudDrizzle
              : kind === "snow"
                ? CloudSnow
                : kind === "storm"
                  ? CloudLightning
                  : CloudRain;
  return <Icon className={className} aria-hidden />;
}

function DayCard({
  day,
  label,
}: {
  day: DailyForecast;
  label: string;
}) {
  const date = parseISO(day.date);
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 sm:p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <WeatherGlyph code={day.weatherCode} className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {label}
          </p>
          <Badge variant="outline">{format(date, "EEE d MMM")}</Badge>
        </div>
        <p className="mt-1 font-display text-lg font-semibold leading-snug">
          {day.condition}
        </p>
        <p className="mt-1 text-sm text-fg-muted">
          High{" "}
          <span className="font-semibold tabular-nums text-fg">
            {Math.round(day.highC)}°C
          </span>
          <span className="mx-1.5 text-fg-subtle">·</span>
          Low{" "}
          <span className="font-semibold tabular-nums text-fg">
            {Math.round(day.lowC)}°C
          </span>
          {day.precipChance !== null && (
            <>
              <span className="mx-1.5 text-fg-subtle">·</span>
              Rain {Math.round(day.precipChance)}%
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export function WeatherForecast({ className }: { className?: string }) {
  const [forecast, setForecast] = useState<ClactonForecast | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchClactonForecast()
      .then((data) => {
        if (!cancelled) {
          setForecast(data);
          setError(null);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setForecast(null);
          setError(
            err instanceof Error
              ? err.message
              : "Could not load the Clacton forecast",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return load();
  }, [load]);

  return (
    <section className={cn("min-w-0", className)} aria-live="polite">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Essex Sunshine Coast
          </p>
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Clacton weather — today & tomorrow
          </h2>
        </div>
        <p className="text-[11px] text-fg-subtle">
          Open-Meteo · 51.79°N, 1.16°E
        </p>
      </div>

      {loading && (
        <div className="grid gap-3 sm:grid-cols-2">
          {["today", "tomorrow"].map((key) => (
            <Card key={key} className="shadow-none">
              <CardContent className="space-y-3 p-5">
                <div className="h-3 w-20 animate-pulse rounded bg-bg-subtle" />
                <div className="h-5 w-40 animate-pulse rounded bg-bg-subtle" />
                <div className="h-4 w-48 animate-pulse rounded bg-bg-subtle" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && error && (
        <Card className="border-danger/30 shadow-none">
          <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-fg">Forecast unavailable</p>
              <p className="mt-0.5 text-sm text-fg-muted">
                {error}. No guessed temperatures — try again in a moment.
              </p>
            </div>
            <Button variant="outline" onClick={() => load()}>
              Retry forecast
            </Button>
          </CardContent>
        </Card>
      )}

      {!loading && forecast && forecast.days[0] && forecast.days[1] && (
        <div className="grid gap-3 sm:grid-cols-2">
          <DayCard day={forecast.days[0]} label="Today" />
          <DayCard day={forecast.days[1]} label="Tomorrow" />
        </div>
      )}
    </section>
  );
}
