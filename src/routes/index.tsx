import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shell, type SectionId } from "@/components/layout/shell";
import { OverviewSection } from "@/components/sections/overview";
import { AttractionsSection } from "@/components/sections/attractions";
import { EventsSection } from "@/components/sections/events";
import { ItinerariesSection } from "@/components/sections/itineraries";
import { PracticalSection } from "@/components/sections/practical";
import { SavedSection } from "@/components/sections/saved";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [section, setSection] = useState<SectionId>("overview");
  const [focusAttraction, setFocusAttraction] = useState<string | null>(null);

  const openAttraction = (id: string) => {
    setFocusAttraction(id);
    setSection("attractions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Shell active={section} onNavigate={setSection}>
      {section === "overview" && (
        <OverviewSection
          onNavigate={setSection}
          onOpenAttraction={openAttraction}
        />
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
          onNavigate={setSection}
        />
      )}
      {section === "practical" && (
        <PracticalSection
          onOpenAttraction={openAttraction}
          onNavigate={setSection}
        />
      )}
      {section === "saved" && (
        <SavedSection
          onNavigate={setSection}
          onOpenAttraction={openAttraction}
        />
      )}
    </Shell>
  );
}
