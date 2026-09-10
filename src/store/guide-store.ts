import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GuideState {
  savedAttractionIds: string[];
  savedEventIds: string[];
  toggleAttraction: (id: string) => void;
  toggleEvent: (id: string) => void;
  isAttractionSaved: (id: string) => boolean;
  isEventSaved: (id: string) => boolean;
}

export const useGuideStore = create<GuideState>()(
  persist(
    (set, get) => ({
      savedAttractionIds: [],
      savedEventIds: [],
      toggleAttraction: (id) =>
        set((s) => ({
          savedAttractionIds: s.savedAttractionIds.includes(id)
            ? s.savedAttractionIds.filter((x) => x !== id)
            : [...s.savedAttractionIds, id],
        })),
      toggleEvent: (id) =>
        set((s) => ({
          savedEventIds: s.savedEventIds.includes(id)
            ? s.savedEventIds.filter((x) => x !== id)
            : [...s.savedEventIds, id],
        })),
      isAttractionSaved: (id) => get().savedAttractionIds.includes(id),
      isEventSaved: (id) => get().savedEventIds.includes(id),
    }),
    { name: "eastbourne-guide-v1" },
  ),
);
