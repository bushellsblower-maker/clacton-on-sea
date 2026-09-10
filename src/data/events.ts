import {
  addDays,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isWithinInterval,
  parseISO,
  setDate,
  setMonth,
  startOfDay,
  startOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";

export type EventCategory =
  | "Music"
  | "Sport"
  | "Arts"
  | "Family"
  | "Food"
  | "Outdoor"
  | "Theatre"
  | "Festival"
  | "Markets"
  | "Community";

export interface GuideEvent {
  id: string;
  title: string;
  category: EventCategory;
  description: string;
  venue: string;
  location: string;
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  price: string;
  isFree: boolean;
  tags: string[];
  website?: string;
  featured?: boolean;
  recurring?: string;
}

export const EVENT_CATEGORIES: EventCategory[] = [
  "Music",
  "Sport",
  "Arts",
  "Family",
  "Food",
  "Outdoor",
  "Theatre",
  "Festival",
  "Markets",
  "Community",
];

function yearOf(d: Date) {
  return d.getFullYear();
}

function iso(y: number, m: number, day: number) {
  return format(new Date(y, m, day), "yyyy-MM-dd");
}

/**
 * Year-round Clacton / Tendring calendar relative to today.
 * Fixture dates for 2026 follow published Airshow, Carnival and Pier listings;
 * other years use the same seasonal pattern.
 */
export function buildYearEvents(today: Date = new Date()): GuideEvent[] {
  const y = yearOf(today);
  const nextY = y + 1;

  const airshow = y === 2026
    ? { start: iso(y, 7, 27), end: iso(y, 7, 28) }
    : lastThuFriAugust(y);
  const carnivalWeekend = y === 2026
    ? { start: iso(y, 7, 7), end: iso(y, 7, 9) }
    : firstFullAugustWeekend(y);
  const carnivalProcession = y === 2026 ? iso(y, 7, 8) : carnivalWeekend.start;
  const pirates = y === 2026
    ? { start: iso(y, 4, 23), end: iso(y, 4, 31) }
    : lateMayHalfTerm(y);

  const events: GuideEvent[] = [
    {
      id: `${y}-new-year-dip`,
      title: "Clacton New Year's Day Dip",
      category: "Family",
      description:
        "Fancy-dress plunge off the central sands. Bring a towel, a donation and a sense of humour — the North Sea does the rest.",
      venue: "Clacton Beach (central)",
      location: "Marine Parade West",
      startDate: iso(y, 0, 1),
      endDate: iso(y, 0, 1),
      startTime: "11:00",
      price: "Free (donations)",
      isFree: true,
      tags: ["charity", "sea", "new-year"],
      featured: true,
    },
    {
      id: `${y}-february-frenzy`,
      title: "Pier February Frenzy",
      category: "Family",
      description:
        "Half-term wristband deals and indoor rides when the wind is too sharp for the beach. A reliable rainy-day plan on the boards.",
      venue: "Clacton Pier",
      location: "North Sea / Pier Approach",
      startDate: iso(y, 1, 14),
      endDate: iso(y, 1, 22),
      price: "Wristbands from the pier",
      isFree: false,
      tags: ["pier", "family", "half-term"],
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-easter-extravaganza`,
      title: "Easter Extravaganza on the Pier",
      category: "Family",
      description:
        "Easter Bunny meet-and-greets, egg trails and themed fun from late March into the school holiday. First pier fireworks of the year usually fall in this window.",
      venue: "Clacton Pier",
      location: "North Sea / Pier Approach",
      startDate: iso(y, 2, 28),
      endDate: iso(y, 3, 12),
      price: "Free to walk; rides paid",
      isFree: false,
      tags: ["pier", "easter", "family"],
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-easter-fireworks`,
      title: "Easter Fireworks",
      category: "Outdoor",
      description:
        "Free display from the pier berthing arm to open the season. Music from the deck; spectator space fills from the seaward end.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: y === 2026 ? iso(y, 3, 5) : iso(y, 3, 5),
      endDate: y === 2026 ? iso(y, 3, 5) : iso(y, 3, 5),
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "pier", "free"],
      featured: true,
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-may-day-fireworks`,
      title: "May Bank Holiday Fireworks",
      category: "Outdoor",
      description:
        "Early-May free fireworks over the water. One of nine pier displays across the year.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: iso(y, 4, 3),
      endDate: iso(y, 4, 3),
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "pier", "free"],
    },
    {
      id: `${y}-pirates-ahoy`,
      title: "Pirates Ahoy!",
      category: "Family",
      description:
        "May half-term takeover: live pirate shows in the Jolly Roger Theatre, a daily treasure hunt, and Sidney the Seagull in costume. Free shows; rides extra.",
      venue: "Clacton Pier",
      location: "Jolly Roger Theatre",
      startDate: pirates.start,
      endDate: pirates.end,
      price: "Shows free; rides paid",
      isFree: true,
      tags: ["pier", "family", "half-term"],
      featured: true,
      website: "https://www.clactonpier.co.uk/events/piratesahoy/",
    },
    {
      id: `${y}-whitsun-fireworks`,
      title: "Whitsun Fireworks",
      category: "Outdoor",
      description:
        "Late-May bank-holiday fireworks, often paired with Pirates Ahoy programming on the pier.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: iso(y, 4, 24),
      endDate: iso(y, 4, 24),
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "pier", "free"],
    },
    {
      id: `${y}-summer-holiday-fireworks`,
      title: "Summer Holiday Fireworks",
      category: "Outdoor",
      description:
        "Late-July free display marking the start of the long school holiday. Arrive early if you want a rail on the berthing arm.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: iso(y, 6, 25),
      endDate: iso(y, 6, 25),
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "pier", "free"],
    },
    {
      id: `${y}-carnival-weekend`,
      title: "Clacton Carnival Weekend",
      category: "Festival",
      description:
        "The town's carnival week opens on the pier with reduced-price wristbands, live music and Saturday-night fireworks. The street procession is the main event.",
      venue: "Clacton Pier & Seafront",
      location: "Marine Parade / Pier",
      startDate: carnivalWeekend.start,
      endDate: carnivalWeekend.end,
      price: "Procession free; pier rides extra",
      isFree: true,
      tags: ["carnival", "seafront", "family"],
      featured: true,
      website: "http://www.clactoncarnival.org/eventscw.htm",
    },
    {
      id: `${y}-carnival-procession`,
      title: "Carnival Street Procession",
      category: "Community",
      description:
        "Floats, visiting carnival courts, majorettes and marching bands from West Road car park along the seafront to Victoria Road. The set-piece of Carnival Week.",
      venue: "Clacton Seafront",
      location: "West Road to Victoria Road",
      startDate: carnivalProcession,
      endDate: carnivalProcession,
      price: "Free",
      isFree: true,
      tags: ["carnival", "parade", "free"],
      featured: true,
      website: "http://www.clactoncarnival.org/eventscw.htm",
    },
    {
      id: `${y}-carnival-sunday`,
      title: "Carnival Sunday Show",
      category: "Family",
      description:
        "Children's fancy dress and family entertainment on the West Greensward the day after the procession.",
      venue: "West Greensward",
      location: "Clacton seafront",
      startDate: y === 2026 ? iso(y, 7, 9) : carnivalWeekend.end,
      endDate: y === 2026 ? iso(y, 7, 9) : carnivalWeekend.end,
      price: "Free",
      isFree: true,
      tags: ["carnival", "family", "free"],
    },
    {
      id: `${y}-carnival-run`,
      title: "Clacton Carnival Half Marathon, 10k & Fun Run",
      category: "Sport",
      description:
        "Road races from Eastcliff Greensward in association with Nice Work — half marathon, 10k and a fancy-dress-friendly fun run to close Carnival Week.",
      venue: "Eastcliff Greensward",
      location: "Fourth Avenue, Clacton-on-Sea",
      startDate: y === 2026 ? iso(y, 7, 17) : iso(y, 7, 16),
      endDate: y === 2026 ? iso(y, 7, 17) : iso(y, 7, 16),
      startTime: "09:30",
      price: "Entry fees via Nice Work",
      isFree: false,
      tags: ["running", "carnival", "sport"],
    },
    {
      id: `${y}-carnival-fireworks`,
      title: "Carnival Saturday Fireworks",
      category: "Outdoor",
      description:
        "Free pier fireworks on Carnival Saturday night — one of the busiest evenings of the summer on the boards.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: carnivalProcession,
      endDate: carnivalProcession,
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "carnival", "free"],
    },
    {
      id: `${y}-airshow`,
      title: "Clacton Airshow",
      category: "Festival",
      description:
        "The East's premier free seafront airshow. Two days of jets, historic aircraft and aerobatics over the water, with a Thursday twilight display of illuminated aircraft, lasers and pyrotechnics. Organised by Tendring District Council.",
      venue: "Clacton Seafront",
      location: "Marine Parade greensward",
      startDate: airshow.start,
      endDate: airshow.end,
      startTime: "11:00",
      price: "Free (donations welcome)",
      isFree: true,
      tags: ["airshow", "seafront", "free", "family"],
      featured: true,
      website: "https://clactonairshow.com/",
    },
    {
      id: `${y}-airshow-fireworks`,
      title: "Airshow Night Fireworks",
      category: "Outdoor",
      description:
        "Free fireworks after the Thursday twilight flying. Often live-streamed from the pier for anyone who cannot reach the front.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: airshow.start,
      endDate: airshow.start,
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "airshow", "free"],
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-august-bank-fireworks`,
      title: "August Bank Holiday Fireworks",
      category: "Outdoor",
      description:
        "End-of-holiday free display from the pier — a last blast before term starts.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: iso(y, 7, 30),
      endDate: iso(y, 7, 30),
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "pier", "free"],
    },
    {
      id: `${y}-character-weekend`,
      title: "Character Weekend",
      category: "Family",
      description:
        "Meet-and-greet characters on the pier — a September treat after the airshow crowds have thinned.",
      venue: "Clacton Pier",
      location: "Pier Approach",
      startDate: iso(y, 8, 5),
      endDate: iso(y, 8, 6),
      price: "Free to walk; rides paid",
      isFree: true,
      tags: ["pier", "family"],
    },
    {
      id: `${y}-blue-light`,
      title: "Blue Light Weekend",
      category: "Community",
      description:
        "Emergency-service displays and family activities on the pier, celebrating the town's blue-light teams.",
      venue: "Clacton Pier",
      location: "Pier Approach",
      startDate: iso(y, 8, 11),
      endDate: iso(y, 8, 12),
      price: "Free to attend",
      isFree: true,
      tags: ["community", "family", "pier"],
    },
    {
      id: `${y}-oktoberfest`,
      title: "Oktoberfest on the Pier",
      category: "Food",
      description:
        "Three weekends of Bavarian-style food, drink and music on the boards, typically mid-September into early October.",
      venue: "Clacton Pier",
      location: "Pier deck",
      startDate: iso(y, 8, 19),
      endDate: iso(y, 9, 4),
      price: "Free entry; food and drink extra",
      isFree: true,
      tags: ["food", "music", "pier"],
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-clacton-fear`,
      title: "Clacton FEAR!",
      category: "Festival",
      description:
        "After-dark scare mazes, rides in the dark and live entertainment — the pier's successor to Evil on Sea. Selected October dates; not for young children.",
      venue: "Clacton Pier",
      location: "Pier deck",
      startDate: iso(y, 9, 15),
      endDate: iso(y, 9, 31),
      price: "Ticketed (around £30 online)",
      isFree: false,
      tags: ["halloween", "pier", "evening"],
      featured: true,
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-halloween-festival`,
      title: "Halloween Festival",
      category: "Family",
      description:
        "Family-friendly spooky fun through October half term — pumpkins, characters and daytime rides rather than the FEAR scare nights.",
      venue: "Clacton Pier",
      location: "Pier Approach",
      startDate: iso(y, 9, 24),
      endDate: iso(nextY === y + 1 ? y : y, 10, 1),
      price: "Free to walk; rides paid",
      isFree: true,
      tags: ["halloween", "family", "pier"],
    },
    {
      id: `${y}-november-fireworks`,
      title: "November Fireworks",
      category: "Outdoor",
      description:
        "Season-closing free display from the pier, with an earlier lower-noise performance for children and anyone who prefers a gentler show.",
      venue: "Clacton Pier",
      location: "Berthing arm",
      startDate: iso(y, 10, 7),
      endDate: iso(y, 10, 7),
      startTime: "21:00",
      price: "Free",
      isFree: true,
      tags: ["fireworks", "pier", "free"],
    },
    {
      id: `${y}-santa-grotto`,
      title: "Santa's Enchanted Grotto",
      category: "Family",
      description:
        "The pier's Christmas grotto returns on selected November and December dates, with more slots than in recent years. Book ahead for weekends.",
      venue: "Clacton Pier",
      location: "Pier buildings",
      startDate: iso(y, 10, 21),
      endDate: iso(y, 11, 23),
      price: "Ticketed grotto",
      isFree: false,
      tags: ["christmas", "family", "pier"],
      website: "https://www.clactonpier.co.uk/",
    },
    {
      id: `${y}-christmas-lights`,
      title: "Clacton Christmas Lights & Seafront",
      category: "Community",
      description:
        "Town-centre lights and a festive seafront. Dates for switch-on vary — treat this as the seasonal window and confirm locally.",
      venue: "Town centre & seafront",
      location: "Pier Avenue / Marine Parade",
      startDate: iso(y, 10, 22),
      endDate: iso(y, 11, 31),
      price: "Free",
      isFree: true,
      tags: ["christmas", "community", "free"],
    },
    {
      id: `${nextY}-new-year-dip`,
      title: "Clacton New Year's Day Dip",
      category: "Family",
      description:
        "Next year's charity plunge on the central sands. Confirm the assembly point closer to the day.",
      venue: "Clacton Beach",
      location: "Marine Parade West",
      startDate: iso(nextY, 0, 1),
      endDate: iso(nextY, 0, 1),
      startTime: "11:00",
      price: "Free (donations)",
      isFree: true,
      tags: ["charity", "sea", "new-year"],
    },
    ...buildRecurringPromConcerts(y),
    ...buildMonthlyMarkets(y),
    ...buildWeeklyTheatre(y, today),
  ];

  const seen = new Set<string>();
  return events
    .filter((e) => {
      if (seen.has(e.id)) return false;
      seen.add(e.id);
      return true;
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

function lastThuFriAugust(y: number) {
  const end = new Date(y, 7, 31);
  while (end.getDay() !== 5) end.setDate(end.getDate() - 1);
  const start = addDays(end, -1);
  return {
    start: format(start, "yyyy-MM-dd"),
    end: format(end, "yyyy-MM-dd"),
  };
}

function firstFullAugustWeekend(y: number) {
  let d = new Date(y, 7, 1);
  while (d.getDay() !== 6) d = addDays(d, 1);
  return {
    start: format(addDays(d, -1), "yyyy-MM-dd"),
    end: format(addDays(d, 1), "yyyy-MM-dd"),
  };
}

function lateMayHalfTerm(y: number) {
  return { start: iso(y, 4, 23), end: iso(y, 4, 31) };
}

function buildRecurringPromConcerts(y: number): GuideEvent[] {
  const acts = [
    "Sunshine Coast Brass on the Greensward",
    "Sunday Afternoon Seafront Band",
    "Tribute: Motown on the Prom",
    "Coastal Choirs Showcase",
    "Jazz on the Lawns",
  ];
  const out: GuideEvent[] = [];
  let d = new Date(y, 5, 1);
  while (d.getDay() !== 0) d = addDays(d, 1);
  let i = 0;
  while (d.getFullYear() === y && d.getMonth() <= 7) {
    out.push({
      id: `${y}-prom-band-${format(d, "yyyy-MM-dd")}`,
      title: acts[i % acts.length]!,
      category: "Music",
      description:
        "Free open-air music on Clacton's seafront greensward in high summer. Bring a blanket; the wind can steal a paper programme.",
      venue: "Clacton Greensward",
      location: "Marine Parade",
      startDate: format(d, "yyyy-MM-dd"),
      endDate: format(d, "yyyy-MM-dd"),
      startTime: "14:30",
      price: "Free",
      isFree: true,
      tags: ["seafront", "free", "music"],
      recurring: "Summer Sunday series",
    });
    i++;
    d = addDays(d, 14);
  }
  return out;
}

function buildMonthlyMarkets(y: number): GuideEvent[] {
  const out: GuideEvent[] = [];
  for (let m = 0; m < 12; m++) {
    let d = startOfMonth(new Date(y, m, 1));
    let saturdays = 0;
    while (d.getMonth() === m) {
      if (d.getDay() === 6) {
        saturdays++;
        if (saturdays === 2) {
          out.push({
            id: `${y}-market-${format(d, "yyyy-MM")}`,
            title: "Clacton Town Market",
            category: "Markets",
            description:
              "Stalls around the town centre — produce, household goods and a proper Essex natter. Dates can shift for Carnival and Airshow weekends.",
            venue: "Town centre",
            location: "Pier Avenue / High Street area",
            startDate: format(d, "yyyy-MM-dd"),
            endDate: format(d, "yyyy-MM-dd"),
            startTime: "09:00",
            endTime: "15:00",
            price: "Free entry",
            isFree: true,
            tags: ["market", "local"],
            recurring: "Second Saturday monthly",
          });
          break;
        }
      }
      d = addDays(d, 1);
    }
  }
  return out;
}

function buildWeeklyTheatre(y: number, today: Date): GuideEvent[] {
  const shows = [
    { title: "Comedy Club at the West Cliff", cat: "Theatre" as const },
    { title: "Tribute Night — West End Voices", cat: "Music" as const },
    { title: "Family Variety Matinee", cat: "Family" as const },
    { title: "An Evening of Magic & Illusion", cat: "Theatre" as const },
    { title: "Princes Theatre Touring Play", cat: "Arts" as const },
  ];
  const out: GuideEvent[] = [];
  let d = startOfDay(today);
  while (d.getDay() !== 5) d = addDays(d, 1);
  for (let i = 0; i < 5; i++) {
    const show = shows[i % shows.length]!;
    const date = addDays(d, i * 7);
    if (date.getFullYear() > y && date.getMonth() > 1) break;
    out.push({
      id: `live-show-${format(date, "yyyy-MM-dd")}`,
      title: show.title,
      category: show.cat,
      description:
        "Live performance at one of Clacton's stages. Times and cast follow the venue listing — book ahead for weekends.",
      venue: i % 2 === 0 ? "West Cliff Theatre" : "Princes Theatre",
      location: i % 2 === 0 ? "Tower Road" : "Town Hall, Station Road",
      startDate: format(date, "yyyy-MM-dd"),
      endDate: format(date, "yyyy-MM-dd"),
      startTime: "19:30",
      price: "From £16",
      isFree: false,
      tags: ["theatre", "live", "evening"],
    });
  }
  return out;
}

export type EventTimeFilter =
  | "all"
  | "today"
  | "week"
  | "month"
  | "upcoming"
  | "past";

export interface EventFilters {
  query: string;
  category: EventCategory | "all";
  time: EventTimeFilter;
  month: number | "all";
  freeOnly: boolean;
}

export function filterEvents(
  events: GuideEvent[],
  filters: EventFilters,
  today: Date = new Date(),
): GuideEvent[] {
  const todayStart = startOfDay(today);
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 });
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);

  return events.filter((e) => {
    const start = parseISO(e.startDate);
    const end = parseISO(e.endDate);

    if (filters.freeOnly && !e.isFree) return false;
    if (filters.category !== "all" && e.category !== filters.category) {
      return false;
    }

    if (filters.month !== "all") {
      const y = yearOf(today);
      const checkYear = (year: number) => {
        const mStart = startOfMonth(new Date(year, filters.month as number, 1));
        const mEnd = endOfMonth(mStart);
        return (
          (isBefore(start, mEnd) || isSameDay(start, mEnd)) &&
          (isAfter(end, mStart) || isSameDay(end, mStart))
        );
      };
      if (!checkYear(y) && !checkYear(y + 1)) return false;
    }

    if (filters.time === "today") {
      const active =
        isWithinInterval(todayStart, { start, end }) ||
        isSameDay(start, todayStart) ||
        isSameDay(end, todayStart);
      if (!active) return false;
    } else if (filters.time === "week") {
      const overlaps =
        (isBefore(start, weekEnd) || isSameDay(start, weekEnd)) &&
        (isAfter(end, weekStart) || isSameDay(end, weekStart));
      if (!overlaps) return false;
    } else if (filters.time === "month") {
      const overlaps =
        (isBefore(start, monthEnd) || isSameDay(start, monthEnd)) &&
        (isAfter(end, monthStart) || isSameDay(end, monthStart));
      if (!overlaps) return false;
    } else if (filters.time === "upcoming") {
      if (isBefore(end, todayStart)) return false;
    } else if (filters.time === "past") {
      if (!isBefore(end, todayStart)) return false;
    }

    if (filters.query.trim()) {
      const q = filters.query.toLowerCase();
      const hay = [
        e.title,
        e.description,
        e.venue,
        e.location,
        e.category,
        ...e.tags,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });
}

export function eventStatus(
  event: GuideEvent,
  today: Date = new Date(),
): "live" | "upcoming" | "past" {
  const t = startOfDay(today);
  const start = parseISO(event.startDate);
  const end = parseISO(event.endDate);
  if (isBefore(end, t)) return "past";
  if (
    isWithinInterval(t, { start, end }) ||
    isSameDay(start, t) ||
    isSameDay(end, t)
  )
    return "live";
  return "upcoming";
}

export function formatEventDateRange(event: GuideEvent): string {
  const start = parseISO(event.startDate);
  const end = parseISO(event.endDate);
  if (isSameDay(start, end)) {
    return format(start, "EEE d MMM yyyy");
  }
  if (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  ) {
    return `${format(start, "d")}–${format(end, "d MMM yyyy")}`;
  }
  return `${format(start, "d MMM")} – ${format(end, "d MMM yyyy")}`;
}

export function getMonthLabels() {
  return Array.from({ length: 12 }, (_, i) =>
    format(setMonth(setDate(new Date(), 1), i), "MMMM"),
  );
}

export function eventsByMonth(events: GuideEvent[], year: number) {
  return Array.from({ length: 12 }, (_, month) => {
    const mStart = startOfMonth(new Date(year, month, 1));
    const mEnd = endOfMonth(mStart);
    const count = events.filter((e) => {
      const start = parseISO(e.startDate);
      const end = parseISO(e.endDate);
      return (
        (isBefore(start, mEnd) || isSameDay(start, mEnd)) &&
        (isAfter(end, mStart) || isSameDay(end, mStart))
      );
    }).length;
    return { month, label: format(mStart, "MMM"), count };
  });
}
