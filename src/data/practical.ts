export interface PracticalItem {
  id: string;
  title: string;
  body: string;
  icon: "train" | "car" | "bus" | "sun" | "info" | "map" | "phone" | "shield";
}

export const practicalTips: PracticalItem[] = [
  {
    id: "get-here",
    title: "Getting here",
    body: "Direct trains from London Victoria (~1h 30m) and Brighton. By car: A22 / A27. Nearest major airport: Gatwick (~1h).",
    icon: "train",
  },
  {
    id: "getting-around",
    title: "Getting around",
    body: "Compact centre is walkable. Local buses cover Beachy Head, Birling Gap and Sovereign Harbour. Taxis and bike hire available on the seafront.",
    icon: "bus",
  },
  {
    id: "weather",
    title: "Weather & seasons",
    body: "Eastbourne is often dubbed the UK's sunniest town. Summer is peak for events and sea swimming; spring and autumn are ideal for cliff walks. Winter is quiet and atmospheric.",
    icon: "sun",
  },
  {
    id: "parking",
    title: "Parking",
    body: "Seafront and multi-storeys in town. National Trust parking at Birling Gap (members free). Beachy Head has paid car parks — arrive early on sunny weekends.",
    icon: "car",
  },
  {
    id: "safety",
    title: "Cliff & sea safety",
    body: "Stay well back from cliff edges. Check tide times at Birling Gap. Swim at lifeguarded beaches in season. Weather changes fast on the Downs — pack layers.",
    icon: "shield",
  },
  {
    id: "visitor-info",
    title: "Visitor information",
    body: "Visit Eastbourne tourist information can help with maps, events and accommodation. Official site: visiteastbourne.com",
    icon: "info",
  },
];

export const quickFacts = [
  { label: "County", value: "East Sussex" },
  { label: "Known for", value: "Sunshine & chalk cliffs" },
  { label: "Seafront", value: "3 miles of promenade" },
  { label: "National Park", value: "South Downs gateway" },
  { label: "Signature event", value: "Airbourne airshow" },
  { label: "Nearest city", value: "Brighton (~30 min)" },
];
