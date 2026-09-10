import { Home } from "lucide-react";
import { FacilityCard } from "@/components/facility-card";
import { Card, CardContent } from "@/components/ui/card";
import { nearBarnfields } from "@/data/visitor-guides";

interface NearBarnfieldsProps {
  onOpenAttraction?: (id: string) => void;
}

export function NearBarnfieldsSection({
  onOpenAttraction,
}: NearBarnfieldsProps) {
  const [base, ...nearby] = nearBarnfields;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Near Barnfields
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          From the Weeley Heath / Little Clacton base
        </h1>
        <p className="max-w-2xl text-fg-muted">
          Listings place Barnfields Retreat at CO16 9EF. These nearby walks and
          day trips are the research-pack set — EWT sites, the village church,
          the pier and Clacton Shopping Village. Drive times are estimates only.
        </p>
      </header>

      {base && (
        <Card className="border-accent/30 bg-accent-soft/40 shadow-none">
          <CardContent className="flex gap-4 p-5 sm:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary-fg">
              <Home className="h-5 w-5" />
            </span>
            <div className="min-w-0 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Stay base
              </p>
              <h2 className="font-display text-xl font-semibold">{base.name}</h2>
              <p className="text-sm leading-relaxed text-fg-muted">
                {base.description}
              </p>
              <p className="text-xs text-fg-subtle">{base.location}</p>
              {base.notes && (
                <p className="text-xs leading-relaxed text-warn">{base.notes}</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <section className="space-y-4">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Nearby from this corridor
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {nearby.map((place) => (
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
