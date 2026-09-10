import { Car, ExternalLink, Toilet } from "lucide-react";
import { FacilityCard } from "@/components/facility-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  carParks,
  publicToilets,
  TDC_PARKING_INDEX,
  TDC_TOILETS_INDEX,
} from "@/data/visitor-guides";

export function CarParksSection() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Car parks & toilets
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Where to park and where the loos are
        </h1>
        <p className="max-w-2xl text-fg-muted">
          Tendring District Council conveniences and pay-and-display parks
          listed in the research pack. Charges and seasonal hours change —
          confirm on the official pages or Mi Permit before you travel.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button variant="outline" size="sm" asChild>
            <a href={TDC_PARKING_INDEX} target="_blank" rel="noopener noreferrer">
              TDC car parks
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={TDC_TOILETS_INDEX} target="_blank" rel="noopener noreferrer">
              TDC public conveniences
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Toilet className="h-4 w-4" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Public toilets
            </h2>
            <p className="text-sm text-fg-muted">
              {publicToilets.length} Tendring DC listings, including Changing
              Places.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-bg-subtle/60 px-4 py-3 text-sm text-fg-muted">
          <Badge variant="warn" className="mb-2">
            Seasonal
          </Badge>{" "}
          Ambleside, Queensway and Holland Gap open Good Friday–31 Oct. Year-round:
          Pier Gap and West Greensward.
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {publicToilets.map((place) => (
            <FacilityCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Car className="h-4 w-4" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Car parks
            </h2>
            <p className="text-sm text-fg-muted">
              {carParks.length} TDC parks with Mi Permit codes. Martello locks at
              night.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {carParks.map((place) => (
            <FacilityCard key={place.id} place={place} />
          ))}
        </div>
      </section>
    </div>
  );
}
