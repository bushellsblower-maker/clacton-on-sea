import {
  Bus,
  Car,
  Info,
  Map,
  Phone,
  Shield,
  Sun,
  Train,
} from "lucide-react";
import { practicalTips } from "@/data/practical";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

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

export function PracticalSection() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Visitor info
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Plan the practical bits
        </h1>
        <p className="max-w-2xl text-fg-muted">
          How to arrive, get around, stay safe on the cliffs and make the most
          of Eastbourne's famous sunshine.
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

      <Card className="overflow-hidden border-0 bg-bg-inverse text-fg-on-dark">
        <CardContent className="grid gap-6 p-6 sm:p-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Best seasons
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>
                <span className="font-medium text-fg-on-dark">Spring</span> —
                wildflowers, quieter cliffs
              </li>
              <li>
                <span className="font-medium text-fg-on-dark">Summer</span> —
                Bandstand, beaches, Airbourne
              </li>
              <li>
                <span className="font-medium text-fg-on-dark">Autumn</span> —
                heritage days, soft light walks
              </li>
              <li>
                <span className="font-medium text-fg-on-dark">Winter</span> —
                markets, theatre, stormy seas
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Packing essentials
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>Windproof layer for Beachy Head</li>
              <li>Sturdy shoes for chalk paths</li>
              <li>Sunscreen — yes, even in Sussex</li>
              <li>Reusable bottle & picnic kit</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Useful contacts
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>Tourist info: visiteastbourne.com</li>
              <li>National Rail enquiries for trains</li>
              <li>Tide times: check before Birling Gap</li>
              <li>Emergency: 999 · NHS 111</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
