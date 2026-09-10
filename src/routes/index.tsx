import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";
import { isSectionId, type SectionId } from "@/components/layout/sections";
import { OverviewSection } from "@/components/sections/overview";
import { AttractionsSection } from "@/components/sections/attractions";
import { EventsSection } from "@/components/sections/events";
import { ItinerariesSection } from "@/components/sections/itineraries";
import { PracticalSection } from "@/components/sections/practical";
import { SavedSection } from "@/components/sections/saved";
import { CarParksSection } from "@/components/sections/car-parks";
import { HistorySection } from "@/components/sections/history";
import { AccessRestrictionsSection } from "@/components/sections/access-restrictions";
import { NearBarnfieldsSection } from "@/components/sections/near-barnfields";
import { OfficialLinksSection } from "@/components/sections/official-links";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function hashForSection(id: SectionId) {
  return id === "overview" ? "" : `#${id}`;
}

function sectionFromHash(): SectionId {
  if (typeof window === "undefined") return "overview";
  const raw = window.location.hash.replace(/^#/, "");
  return isSectionId(raw) ? raw : "overview";
}

function HomePage() {
  const [section, setSection] = useState<SectionId>("overview");
  const [focusAttraction, setFocusAttraction] = useState<string | null>(null);

  useEffect(() => {
    setSection(sectionFromHash());
    const onHash = () => setSection(sectionFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id: SectionId) => {
    setSection(id);
    const next = hashForSection(id);
    const url = `${window.location.pathname}${window.location.search}${next}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAttraction = (id: string) => {
    setFocusAttraction(id);
    go("attractions");
  };

  return (
    <Shell active={section} onNavigate={go}>
      {section === "overview" && (
        <OverviewSection onNavigate={go} onOpenAttraction={openAttraction} />
      )}
      {section === "attractions" && (
        <AttractionsSection
          focusId={focusAttraction}
          onClearFocus={() => setFocusAttraction(null)}
        />
      )}
      {section === "events" && <EventsSection />}
      {section === "itineraries" && (
        <ItinerariesSection
          onOpenAttraction={openAttraction}
          onNavigate={go}
        />
      )}
      {section === "practical" && (
        <PracticalSection
          onOpenAttraction={openAttraction}
          onNavigate={go}
        />
      )}
      {section === "saved" && (
        <SavedSection onNavigate={go} onOpenAttraction={openAttraction} />
      )}
      {section === "car-parks" && <CarParksSection />}
      {section === "history" && (
        <HistorySection onOpenAttraction={openAttraction} />
      )}
      {section === "access-restrictions" && <AccessRestrictionsSection />}
      {section === "near-barnfields" && (
        <NearBarnfieldsSection onOpenAttraction={openAttraction} />
      )}
      {section === "official-links" && <OfficialLinksSection />}
    </Shell>
  );
}
