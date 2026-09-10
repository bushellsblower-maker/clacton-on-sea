import { Ban, CircleAlert, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cautions, type CautionSeverity } from "@/data/visitor-guides";

const SEVERITY_COPY: Record<
  CautionSeverity,
  { label: string; blurb: string; icon: typeof Ban; badge: "danger" | "warn" | "outline" }
> = {
  avoid: {
    label: "Avoid / restricted",
    blurb: "Not casual public access — members, consent or booked tours only.",
    icon: Ban,
    badge: "danger",
  },
  caution: {
    label: "Watch-outs",
    blurb: "Sourced beach, wildlife and parking cautions.",
    icon: CircleAlert,
    badge: "warn",
  },
  info: {
    label: "Good to know",
    blurb: "Seasonal hours, fees and tour-only sites.",
    icon: Info,
    badge: "outline",
  },
};

const ORDER: CautionSeverity[] = ["avoid", "caution", "info"];

export function AccessRestrictionsSection() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Access restrictions
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Sourced watch-outs before you go
        </h1>
        <p className="max-w-2xl text-fg-muted">
          These {cautions.length} notes come from Tendring DC, Essex Wildlife
          Trust and venue pages — not guesswork. Always check the linked source
          on the day, especially for tides, flags and reserve access.
        </p>
      </header>

      {ORDER.map((severity) => {
        const items = cautions.filter((c) => c.severity === severity);
        if (items.length === 0) return null;
        const meta = SEVERITY_COPY[severity];
        const Icon = meta.icon;
        return (
          <section key={severity} className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  {meta.label}
                </h2>
                <p className="text-sm text-fg-muted">{meta.blurb}</p>
              </div>
            </div>
            <div className="grid gap-3">
              {items.map((item) => (
                <Card key={item.id} className="shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={meta.badge}>{meta.label}</Badge>
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
                      className="inline-block text-xs font-medium text-accent underline-offset-2 hover:underline"
                    >
                      Source
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
