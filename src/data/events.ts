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
 * Full year-round Eastbourne events calendar relative to today.
 * Major fixtures (Airbourne, tennis, Bandstand) plus seasonal programming.
 */
export function buildYearEvents(today: Date = new Date()): GuideEvent[] {
  const y = yearOf(today);
  const nextY = y + 1;

  const events: GuideEvent[] = [
    {
      id: `${y}-new-year-swim`,
      title: "Eastbourne New Year's Day Dip",
      category: "Family",
      description:
        "Brave the Channel for the annual charity sea dip. Fancy dress welcome — towels and hot drinks after.",
      venue: "Eastbourne Beach (central)",
      location: "Grand Parade",
      startDate: iso(y, 0, 1),
      endDate: iso(y, 0, 1),
      startTime: "11:00",
      price: "Free (donations)",
      isFree: true,
      tags: ["charity", "sea", "new-year"],
      featured: true,
    },
    {
      id: `${y}-winter-gallery`,
      title: "Winter Collection Highlights — Towner",
      category: "Arts",
      description:
        "Explore the permanent collection including Eric Ravilious works, plus winter temporary exhibitions.",
      venue: "Towner Eastbourne",
      location: "College Road",
      startDate: iso(y, 0, 4),
      endDate: iso(y, 2, 15),
      price: "Free",
      isFree: true,
      tags: ["gallery", "indoor", "art"],
      recurring: "Seasonal exhibition window",
    },
    {
      id: `${y}-valentine-tea`,
      title: "Valentine's Afternoon Tea at The Grand",
      category: "Food",
      description:
        "Seasonal afternoon tea in the White Palace with live piano and sea views.",
      venue: "The Grand Hotel",
      location: "King Edward's Parade",
      startDate: iso(y, 1, 14),
      endDate: iso(y, 1, 14),
      startTime: "14:30",
      price: "From £45 pp",
      isFree: false,
      tags: ["luxury", "dining", "romance"],
    },
    {
      id: `${y}-half-term-family`,
      title: "February Half-Term Family Trail",
      category: "Family",
      description:
        "Interactive seafront treasure trail for families — pick up maps from the visitor information point.",
      venue: "Eastbourne Seafront",
      location: "Pier to Bandstand",
      startDate: iso(y, 1, 14),
      endDate: iso(y, 1, 22),
      price: "Free",
      isFree: true,
      tags: ["kids", "trail", "half-term"],
    },
    {
      id: `${y}-feb-comedy`,
      title: "Comedy Night at the Underground",
      category: "Theatre",
      description:
        "Stand-up comedy with national and local acts in an intimate venue.",
      venue: "The Underground Theatre",
      location: "Eastbourne",
      startDate: iso(y, 1, 21),
      endDate: iso(y, 1, 21),
      startTime: "20:00",
      price: "From £12",
      isFree: false,
      tags: ["comedy", "nightlife"],
    },
    {
      id: `${y}-spring-equinox-walk`,
      title: "Spring Equinox Cliff Walk",
      category: "Outdoor",
      description:
        "Guided walk from Beachy Head to Birling Gap celebrating the lengthening days and early wildflowers.",
      venue: "Beachy Head",
      location: "Beachy Head Road",
      startDate: iso(y, 2, 20),
      endDate: iso(y, 2, 20),
      startTime: "10:00",
      price: "From £8",
      isFree: false,
      tags: ["walking", "nature", "guided"],
      featured: true,
    },
    {
      id: `${y}-mother-day-concert`,
      title: "Mother's Day Bandstand Concert",
      category: "Music",
      description:
        "Seasonal opener for the Bandstand programme with brass and light classics.",
      venue: "Eastbourne Bandstand",
      location: "Grand Parade",
      startDate: iso(y, 2, 22),
      endDate: iso(y, 2, 22),
      startTime: "14:30",
      price: "Free",
      isFree: true,
      tags: ["bandstand", "free", "music"],
    },
    {
      id: `${y}-mar-market`,
      title: "Artisan Craft Market",
      category: "Markets",
      description:
        "Handmade crafts, jewellery and local art under cover in town.",
      venue: "Town Hall square",
      location: "Town Centre",
      startDate: iso(y, 2, 28),
      endDate: iso(y, 2, 28),
      startTime: "10:00",
      endTime: "16:00",
      price: "Free entry",
      isFree: true,
      tags: ["crafts", "shopping"],
    },
    {
      id: `${y}-easter-egg-hunt`,
      title: "Easter Egg Hunt — Manor Gardens",
      category: "Family",
      description:
        "Family egg hunt through Gildredge Park and Manor Gardens with prizes and face painting.",
      venue: "Manor Gardens",
      location: "The Goffs",
      startDate: iso(y, 3, 5),
      endDate: iso(y, 3, 6),
      startTime: "11:00",
      price: "From £5 child",
      isFree: false,
      tags: ["easter", "kids", "park"],
    },
    {
      id: `${y}-april-theatre`,
      title: "Congress Theatre Spring Season Opening",
      category: "Theatre",
      description:
        "Opening night of the spring touring season — musicals, drama and big-name comedy.",
      venue: "Congress Theatre",
      location: "Carlton Road",
      startDate: iso(y, 3, 12),
      endDate: iso(y, 3, 12),
      startTime: "19:30",
      price: "From £20",
      isFree: false,
      tags: ["theatre", "show"],
    },
    {
      id: `${y}-spring-festival`,
      title: "Eastbourne Spring Festival",
      category: "Festival",
      description:
        "A weekend of street performance, open studios, coastal food stalls and free outdoor music.",
      venue: "Seafront & Town Centre",
      location: "Multiple venues",
      startDate: iso(y, 3, 18),
      endDate: iso(y, 3, 20),
      price: "Mostly free",
      isFree: true,
      tags: ["festival", "weekend", "food"],
      featured: true,
    },
    {
      id: `${y}-may-day-prom`,
      title: "May Day Promenade Procession",
      category: "Community",
      description:
        "Community parade along the seafront with morris dancers, local groups and live music.",
      venue: "Seafront Promenade",
      location: "Pier to Wish Tower",
      startDate: iso(y, 4, 4),
      endDate: iso(y, 4, 4),
      startTime: "12:00",
      price: "Free",
      isFree: true,
      tags: ["community", "parade", "free"],
    },
    {
      id: `${y}-bandstand-season`,
      title: "Bandstand Summer Season Opens",
      category: "Music",
      description:
        "Free open-air concerts begin at the Art Deco Bandstand — brass, swing, classical and tribute acts through to September.",
      venue: "Eastbourne Bandstand",
      location: "Grand Parade",
      startDate: iso(y, 4, 3),
      endDate: iso(y, 8, 28),
      price: "Free",
      isFree: true,
      tags: ["bandstand", "free", "summer"],
      featured: true,
      recurring: "Multiple concerts weekly May–Sep",
    },
    {
      id: `${y}-may-food-fest`,
      title: "Sussex Coastal Food Fair",
      category: "Food",
      description:
        "Street food, seafood, craft beer and Sussex wines along Western Lawns.",
      venue: "Western Lawns",
      location: "King Edward's Parade",
      startDate: iso(y, 4, 24),
      endDate: iso(y, 4, 26),
      price: "Free entry",
      isFree: true,
      tags: ["food", "outdoor", "weekend"],
      featured: true,
    },
    {
      id: `${y}-june-jazz`,
      title: "Harbour Jazz Evening",
      category: "Music",
      description:
        "Live jazz on the waterfront at Sovereign Harbour with optional dining packages.",
      venue: "Sovereign Harbour",
      location: "Harbour Quay",
      startDate: iso(y, 5, 14),
      endDate: iso(y, 5, 14),
      startTime: "19:00",
      price: "From £10",
      isFree: false,
      tags: ["jazz", "harbour", "evening"],
    },
    {
      id: `${y}-midsummer-walk`,
      title: "Midsummer Night Walk — South Downs",
      category: "Outdoor",
      description:
        "Guided dusk walk on the Downs with bat detectors and stargazing as darkness falls.",
      venue: "South Downs Way (Beachy Head end)",
      location: "Beachy Head",
      startDate: iso(y, 5, 21),
      endDate: iso(y, 5, 21),
      startTime: "20:00",
      price: "From £12",
      isFree: false,
      tags: ["walking", "night", "nature"],
    },
    {
      id: `${y}-tennis`,
      title: "Eastbourne International Tennis",
      category: "Sport",
      description:
        "WTA & ATP grass-court tournament at Devonshire Park — a key warm-up event before Wimbledon with world-class players.",
      venue: "Devonshire Park Lawn Tennis Club",
      location: "College Road",
      startDate: iso(y, 5, 22),
      endDate: iso(y, 5, 28),
      price: "From £25 day",
      isFree: false,
      tags: ["tennis", "sport", "international"],
      featured: true,
    },
    {
      id: `${y}-july-beach-cinema`,
      title: "Beach Cinema Nights",
      category: "Arts",
      description:
        "Open-air film screenings on the seafront — classics, family films and cult favourites under the stars.",
      venue: "Western Lawns",
      location: "King Edward's Parade",
      startDate: iso(y, 6, 11),
      endDate: iso(y, 6, 13),
      startTime: "20:30",
      price: "From £8",
      isFree: false,
      tags: ["cinema", "outdoor", "evening"],
    },
    {
      id: `${y}-pride`,
      title: "Eastbourne Pride",
      category: "Festival",
      description:
        "Colourful parade and festival celebrating LGBTQ+ community with music, stalls and entertainment.",
      venue: "Town Centre & Seafront",
      location: "Multiple venues",
      startDate: iso(y, 6, 19),
      endDate: iso(y, 6, 19),
      price: "Free",
      isFree: true,
      tags: ["pride", "community", "festival"],
      featured: true,
    },
    {
      id: `${y}-august-carnival`,
      title: "Eastbourne Carnival",
      category: "Community",
      description:
        "Colourful carnival parade through town with floats, dance troupes and family funfair.",
      venue: "Town routes & seafront",
      location: "Eastbourne",
      startDate: iso(y, 7, 2),
      endDate: iso(y, 7, 2),
      startTime: "13:00",
      price: "Free",
      isFree: true,
      tags: ["carnival", "family", "parade"],
    },
    {
      id: `${y}-august-kids-week`,
      title: "Seafront Kids' Activity Week",
      category: "Family",
      description:
        "Free and low-cost beach sports, puppet shows, sand art and pier activities for school holidays.",
      venue: "Eastbourne Seafront",
      location: "Pier & Bandstand",
      startDate: iso(y, 7, 4),
      endDate: iso(y, 7, 10),
      price: "Mostly free",
      isFree: true,
      tags: ["kids", "holiday", "free"],
    },
    {
      id: `${y}-airbourne`,
      title: "Airbourne — Eastbourne International Airshow",
      category: "Festival",
      description:
        "One of the UK's largest free seafront airshows. Red Arrows, historic warbirds, and aerobatic displays over four days — the highlight of Eastbourne's summer.",
      venue: "Eastbourne Seafront",
      location: "Western Lawns & Grand Parade",
      startDate: iso(y, 7, 13),
      endDate: iso(y, 7, 16),
      price: "Free (seafront)",
      isFree: true,
      tags: ["airshow", "family", "iconic", "free"],
      featured: true,
    },
    {
      id: `${y}-beer-festival`,
      title: "Eastbourne Beer & Cider Festival",
      category: "Food",
      description:
        "Dozens of real ales, ciders and craft beers with live music in a festival marquee.",
      venue: "Winter Garden / Devonshire Park",
      location: "College Road",
      startDate: iso(y, 7, 21),
      endDate: iso(y, 7, 23),
      price: "From £8",
      isFree: false,
      tags: ["beer", "music", "adults"],
    },
    {
      id: `${y}-literary-fest`,
      title: "Eastbourne Literary Festival",
      category: "Arts",
      description:
        "Author talks, poetry, book signings and workshops — including sessions at Camilla's Bookshop.",
      venue: "Multiple venues",
      location: "Town Centre",
      startDate: iso(y, 8, 5),
      endDate: iso(y, 8, 7),
      price: "Mixed free / ticketed",
      isFree: false,
      tags: ["books", "talks", "culture"],
    },
    {
      id: `${y}-heritage-open`,
      title: "Heritage Open Days",
      category: "Community",
      description:
        "Free access to historic buildings, guided walks and special tours across Eastbourne.",
      venue: "Multiple heritage sites",
      location: "Eastbourne",
      startDate: iso(y, 8, 12),
      endDate: iso(y, 8, 21),
      price: "Free",
      isFree: true,
      tags: ["heritage", "free", "tours"],
      featured: true,
    },
    {
      id: `${y}-sept-sailing`,
      title: "Harbour Regatta Weekend",
      category: "Sport",
      description:
        "Yacht races and water sports demos at Sovereign Harbour with spectator viewing.",
      venue: "Sovereign Harbour",
      location: "Harbour Quay",
      startDate: iso(y, 8, 26),
      endDate: iso(y, 8, 28),
      price: "Free to watch",
      isFree: true,
      tags: ["sailing", "harbour", "sport"],
    },
    {
      id: `${y}-october-film`,
      title: "Eastbourne Film Weekend",
      category: "Arts",
      description:
        "Independent film screenings, Q&As and short film competitions around town.",
      venue: "Towner & local cinemas",
      location: "Multiple",
      startDate: iso(y, 9, 10),
      endDate: iso(y, 9, 12),
      price: "From £8",
      isFree: false,
      tags: ["film", "culture"],
    },
    {
      id: `${y}-autumn-walks`,
      title: "Autumn Colour Downs Walks",
      category: "Outdoor",
      description:
        "Guided weekend walks celebrating autumn colour on the South Downs above Eastbourne.",
      venue: "South Downs National Park",
      location: "Beachy Head area",
      startDate: iso(y, 9, 18),
      endDate: iso(y, 9, 19),
      startTime: "10:00",
      price: "From £6",
      isFree: false,
      tags: ["walking", "autumn", "nature"],
    },
    {
      id: `${y}-halloween`,
      title: "Halloween on the Pier",
      category: "Family",
      description:
        "Spooky pier trail, pumpkin carving and evening ghost walks along the seafront.",
      venue: "Eastbourne Pier",
      location: "Grand Parade",
      startDate: iso(y, 9, 25),
      endDate: iso(y, 9, 31),
      price: "From £5",
      isFree: false,
      tags: ["halloween", "kids", "evening"],
      featured: true,
    },
    {
      id: `${y}-bonfire`,
      title: "Eastbourne Bonfire & Fireworks",
      category: "Festival",
      description:
        "Traditional Sussex bonfire society procession with torchlight parade and fireworks display.",
      venue: "Seafront / Princes Park area",
      location: "Eastbourne",
      startDate: iso(y, 10, 1),
      endDate: iso(y, 10, 1),
      startTime: "18:30",
      price: "Free (donations)",
      isFree: true,
      tags: ["bonfire", "fireworks", "sussex"],
      featured: true,
    },
    {
      id: `${y}-remembrance`,
      title: "Remembrance Sunday Service",
      category: "Community",
      description:
        "Civic Remembrance service and parade honouring the fallen, with seafront and town ceremonies.",
      venue: "War Memorial & Town Hall",
      location: "Eastbourne",
      startDate: iso(y, 10, 9),
      endDate: iso(y, 10, 9),
      startTime: "10:45",
      price: "Free",
      isFree: true,
      tags: ["remembrance", "civic", "free"],
    },
    {
      id: `${y}-nov-craft`,
      title: "Christmas Craft & Gift Fair",
      category: "Markets",
      description:
        "Early Christmas shopping with local makers, festive food and mulled wine.",
      venue: "Winter Garden",
      location: "Devonshire Park",
      startDate: iso(y, 10, 22),
      endDate: iso(y, 10, 23),
      price: "Free entry",
      isFree: true,
      tags: ["christmas", "shopping", "crafts"],
    },
    {
      id: `${y}-switch-on`,
      title: "Christmas Lights Switch-On",
      category: "Festival",
      description:
        "Town Christmas lights switch-on with stage entertainment, market stalls and Santa.",
      venue: "Terminus Road & Town Centre",
      location: "Eastbourne town centre",
      startDate: iso(y, 11, 5),
      endDate: iso(y, 11, 5),
      startTime: "16:00",
      price: "Free",
      isFree: true,
      tags: ["christmas", "family", "free"],
      featured: true,
    },
    {
      id: `${y}-christmas-market`,
      title: "Eastbourne Christmas Market",
      category: "Markets",
      description:
        "Alpine-style chalets, gifts, street food and festive music on the seafront and town square.",
      venue: "Seafront & Town Centre",
      location: "Multiple",
      startDate: iso(y, 11, 6),
      endDate: iso(y, 11, 21),
      price: "Free entry",
      isFree: true,
      tags: ["christmas", "market", "food"],
      featured: true,
    },
    {
      id: `${y}-nye`,
      title: "New Year's Eve Fireworks & Harbour Party",
      category: "Festival",
      description:
        "See in the New Year with seafront fireworks and live music at Sovereign Harbour venues.",
      venue: "Seafront & Sovereign Harbour",
      location: "Eastbourne",
      startDate: iso(y, 11, 31),
      endDate: iso(y, 11, 31),
      startTime: "21:00",
      price: "Free outdoors / venue charges vary",
      isFree: true,
      tags: ["new-year", "fireworks", "party"],
      featured: true,
    },
    ...buildRecurringBandstand(y),
    ...buildMonthlyMarkets(y),
    ...buildWeeklyTheatre(y, today),
    {
      id: `${nextY}-new-year-dip`,
      title: "Eastbourne New Year's Day Dip",
      category: "Family",
      description:
        "The annual charity sea dip returns — join hundreds of bold swimmers for a bracing start to the year.",
      venue: "Eastbourne Beach",
      location: "Grand Parade",
      startDate: iso(nextY, 0, 1),
      endDate: iso(nextY, 0, 1),
      startTime: "11:00",
      price: "Free (donations)",
      isFree: true,
      tags: ["charity", "sea"],
    },
  ];

  // Dedupe by id (monthly markets may overlap jan market seed)
  const seen = new Set<string>();
  return events
    .filter((e) => {
      if (seen.has(e.id)) return false;
      seen.add(e.id);
      return true;
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

function buildRecurringBandstand(y: number): GuideEvent[] {
  const acts = [
    "Eastbourne Band — Light Classics",
    "Swing & Big Band Night",
    "Sunday Afternoon Brass",
    "Tribute: Motown Magic",
    "Coastal Choirs Showcase",
    "Jazz in the Bandstand",
  ];
  const out: GuideEvent[] = [];
  let d = new Date(y, 4, 1);
  while (d.getDay() !== 0) d = addDays(d, 1);
  let i = 0;
  while (d.getFullYear() === y && d.getMonth() <= 7) {
    out.push({
      id: `${y}-bandstand-${format(d, "yyyy-MM-dd")}`,
      title: acts[i % acts.length]!,
      category: "Music",
      description:
        "Free open-air concert at Eastbourne's iconic Art Deco Bandstand. Bring a blanket or hire a deckchair.",
      venue: "Eastbourne Bandstand",
      location: "Grand Parade",
      startDate: format(d, "yyyy-MM-dd"),
      endDate: format(d, "yyyy-MM-dd"),
      startTime: "14:30",
      price: "Free",
      isFree: true,
      tags: ["bandstand", "free", "music"],
      recurring: "Summer Sunday series",
    });
    i++;
    d = addDays(d, 7);
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
        if (saturdays === 3) {
          out.push({
            id: `${y}-farmers-${format(d, "yyyy-MM")}`,
            title: "Eastbourne Farmers' Market",
            category: "Markets",
            description:
              "Fresh local produce, bakery, fish, cheese and Sussex specialities. Held most months on the third Saturday.",
            venue: "Town Centre Market",
            location: "Terminus Road area",
            startDate: format(d, "yyyy-MM-dd"),
            endDate: format(d, "yyyy-MM-dd"),
            startTime: "09:00",
            endTime: "14:00",
            price: "Free entry",
            isFree: true,
            tags: ["market", "food", "local"],
            recurring: "Third Saturday monthly",
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
    { title: "An Evening with a West End Star", cat: "Theatre" as const },
    { title: "Sussex Symphony Orchestra", cat: "Music" as const },
    { title: "Family Panto Preview Workshop", cat: "Family" as const },
    { title: "Murder Mystery Dinner", cat: "Theatre" as const },
    { title: "Contemporary Dance Double Bill", cat: "Arts" as const },
  ];
  const out: GuideEvent[] = [];
  let d = startOfDay(today);
  while (d.getDay() !== 5) d = addDays(d, 1);
  for (let i = 0; i < 5; i++) {
    const show = shows[i % shows.length]!;
    const date = addDays(d, i * 7);
    out.push({
      id: `live-show-${format(date, "yyyy-MM-dd")}`,
      title: show.title,
      category: show.cat,
      description:
        "Live performance at one of Eastbourne's premier stages. Times and cast subject to venue listing — book ahead for weekends.",
      venue: i % 2 === 0 ? "Congress Theatre" : "Devonshire Park Theatre",
      location: "Devonshire Park",
      startDate: format(date, "yyyy-MM-dd"),
      endDate: format(date, "yyyy-MM-dd"),
      startTime: "19:30",
      price: "From £18",
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
