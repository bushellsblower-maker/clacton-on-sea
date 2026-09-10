export interface ItineraryStop {
  time: string;
  title: string;
  detail: string;
  attractionId?: string;
}

export interface Itinerary {
  id: string;
  title: string;
  days: number;
  vibe: string;
  summary: string;
  bestFor: string[];
  stops: ItineraryStop[];
}

export const itineraries: Itinerary[] = [
  {
    id: "iconic-day",
    title: "Iconic Eastbourne in One Day",
    days: 1,
    vibe: "Highlights",
    summary:
      "Hit the must-sees: chalk cliffs, Victorian pier, art and a sunset promenade — the classic first visit.",
    bestFor: ["First-timers", "Couples", "Photographers"],
    stops: [
      {
        time: "08:30",
        title: "Sunrise at Beachy Head",
        detail: "Park early, walk the cliff path, photograph the lighthouse.",
        attractionId: "beachy-head",
      },
      {
        time: "10:30",
        title: "Birling Gap & Seven Sisters",
        detail: "Descend to the beach if tides allow; coffee at the café.",
        attractionId: "seven-sisters",
      },
      {
        time: "13:00",
        title: "Fish & chips on the Pier",
        detail: "Classic seaside lunch and a stroll to the pier head.",
        attractionId: "eastbourne-pier",
      },
      {
        time: "15:00",
        title: "Towner Eastbourne",
        detail: "Contemporary art and the Ravilious collection.",
        attractionId: "towner",
      },
      {
        time: "17:30",
        title: "Promenade & Bandstand",
        detail: "Golden-hour walk among the palms; catch a free concert in season.",
        attractionId: "seafront-promenade",
      },
      {
        time: "19:30",
        title: "Dinner at Sovereign Harbour",
        detail: "Waterside restaurants and yacht lights after dark.",
        attractionId: "sovereign-harbour",
      },
    ],
  },
  {
    id: "family-weekend",
    title: "Family Weekend by the Sea",
    days: 2,
    vibe: "Family",
    summary:
      "Beaches, pirates, forts and ice cream — paced for kids without missing the magic.",
    bestFor: ["Families", "School holidays"],
    stops: [
      {
        time: "Day 1 · AM",
        title: "Treasure Island & beach time",
        detail: "Adventure golf then sandcastles on the central beach.",
        attractionId: "treasure-island",
      },
      {
        time: "Day 1 · PM",
        title: "Pier amusements & ice cream",
        detail: "Arcade games and a slow walk of the boards.",
        attractionId: "eastbourne-pier",
      },
      {
        time: "Day 1 · Eve",
        title: "Bandstand concert",
        detail: "Free family-friendly music (summer season).",
        attractionId: "seafront-promenade",
      },
      {
        time: "Day 2 · AM",
        title: "Redoubt Fortress",
        detail: "Tunnels, cannons and military museum fun.",
        attractionId: "redoubt-fortress",
      },
      {
        time: "Day 2 · PM",
        title: "Gildredge Park picnic",
        detail: "Playgrounds and Manor Gardens to burn remaining energy.",
        attractionId: "gildredge-park",
      },
    ],
  },
  {
    id: "walker-escape",
    title: "Cliffs & Downs Walker",
    days: 1,
    vibe: "Adventure",
    summary:
      "A full day on foot from Beachy Head along the Seven Sisters and into the South Downs.",
    bestFor: ["Walkers", "Nature lovers", "Fit travellers"],
    stops: [
      {
        time: "08:00",
        title: "Start — Beachy Head",
        detail: "Join the South Downs Way heading west.",
        attractionId: "beachy-head",
      },
      {
        time: "10:30",
        title: "Seven Sisters ridge",
        detail: "Undulating chalk cliffs — take your time on the ups and downs.",
        attractionId: "seven-sisters",
      },
      {
        time: "13:00",
        title: "Lunch at Birling Gap",
        detail: "Refuel at the National Trust café; optional beach drop.",
        attractionId: "seven-sisters",
      },
      {
        time: "15:00",
        title: "Inland Downs loop",
        detail: "Quiet paths, skylarks and big sky views.",
        attractionId: "south-downs",
      },
      {
        time: "17:30",
        title: "Sunset at Holywell",
        detail: "Descend to the western cove for a quieter finish.",
        attractionId: "holywell-retreat",
      },
    ],
  },
  {
    id: "culture-treat",
    title: "Culture & Treat Yourself",
    days: 1,
    vibe: "Culture",
    summary:
      "Galleries, books, theatre and afternoon tea — Eastbourne's refined side.",
    bestFor: ["Couples", "Culture seekers", "Rainy days"],
    stops: [
      {
        time: "10:00",
        title: "Towner Eastbourne",
        detail: "Morning with contemporary art.",
        attractionId: "towner",
      },
      {
        time: "12:00",
        title: "Camilla's Bookshop",
        detail: "Browse the labyrinth; say hello to the parrot.",
        attractionId: "camillas-bookshop",
      },
      {
        time: "14:00",
        title: "Afternoon tea at The Grand",
        detail: "The White Palace at its finest.",
        attractionId: "grand-hotel",
      },
      {
        time: "16:30",
        title: "Heritage Centre",
        detail: "Victorian resort stories and local lore.",
        attractionId: "eastbourne-heritage-centre",
      },
      {
        time: "19:30",
        title: "Evening show",
        detail: "Congress or Devonshire Park Theatre — check What's On.",
      },
    ],
  },
];
