import { ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  mapsUrl,
  type FacilityPlace,
  type HeritagePlace,
} from "@/data/visitor-guides";

type Place = FacilityPlace | HeritagePlace;

interface FacilityCardProps {
  place: Place;
  onOpenAttraction?: (id: string) => void;
}

export function FacilityCard({ place, onOpenAttraction }: FacilityCardProps) {
  const attractionId =
    "attractionId" in place ? place.attractionId : undefined;

  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardContent className="flex h-full flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="outline">{place.area}</Badge>
          {place.highlights.slice(0, 3).map((h) => (
            <Badge key={h} variant="secondary">
              {h}
            </Badge>
          ))}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-snug">
            {place.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-fg-muted">{place.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed text-fg-muted">{place.description}</p>
        {place.notes && (
          <p className="rounded-lg bg-warn-soft px-3 py-2 text-xs leading-relaxed text-warn">
            {place.notes}
          </p>
        )}
        <p className="flex items-start gap-1.5 text-xs text-fg-subtle">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>{place.location}</span>
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {place.officialUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={place.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official page
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
          {"coords" in place && place.coords && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={mapsUrl(place.coords)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Map
                <MapPin className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
          {attractionId && onOpenAttraction && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenAttraction(attractionId)}
            >
              View hotspot
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
