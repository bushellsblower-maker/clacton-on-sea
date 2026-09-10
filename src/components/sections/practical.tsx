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

      <Card className="overflow-hidden border-0 bg-bg-inverse text-fg-on-dark">
        <CardContent className="grid gap-6 p-6 sm:p-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-on-dark/50">
              Best seasons
            </p>
            <ul className="mt-3 space-y-2 text-sm text-fg-on-dark/80">
              <li>
                <span className="font-medium text-fg-on-dark">Spring</span> —
                quieter sands, Colne Point birds
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
              <li>Sturdy shoes for Colne Point shingle</li>
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
    </div>
  );
}
