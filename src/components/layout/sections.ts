import {
  CalendarDays,
  Car,
  Compass,
  ExternalLink,
  Home,
  Info,
  Landmark,
  Map,
  Route,
  ShieldAlert,
  Bookmark,
  type LucideIcon,
} from "lucide-react";

export const SECTION_IDS = [
  "overview",
  "attractions",
  "events",
  "itineraries",
  "practical",
  "saved",
  "car-parks",
  "history",
  "access-restrictions",
  "near-barnfields",
  "official-links",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value);
}

export type NavItem = {
  id: SectionId;
  label: string;
  shortLabel?: string;
  blurb?: string;
  icon: LucideIcon;
};

export const PRIMARY_NAV: NavItem[] = [
  { id: "overview", label: "Overview", icon: Compass },
  { id: "attractions", label: "Hotspots", icon: Map },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "itineraries", label: "Itineraries", icon: Route },
  { id: "practical", label: "Visitor info", icon: Info },
  { id: "saved", label: "Saved", icon: Bookmark },
];

export const GUIDE_NAV: NavItem[] = [
  {
    id: "car-parks",
    label: "Car parks & toilets",
    shortLabel: "Parks & loos",
    blurb: "TDC loos, Changing Places and Mi Permit parks",
    icon: Car,
  },
  {
    id: "history",
    label: "History",
    shortLabel: "History",
    blurb: "Pier, Martello, Priory and sourced facts",
    icon: Landmark,
  },
  {
    id: "access-restrictions",
    label: "Access restrictions",
    shortLabel: "Access",
    blurb: "Sourced watch-outs and beach cautions",
    icon: ShieldAlert,
  },
  {
    id: "near-barnfields",
    label: "Near Barnfields",
    shortLabel: "Barnfields",
    blurb: "Walks and day trips from CO16 9EF",
    icon: Home,
  },
  {
    id: "official-links",
    label: "Official links & videos",
    shortLabel: "Links & videos",
    blurb: "Council, venues and verified YouTube",
    icon: ExternalLink,
  },
];
