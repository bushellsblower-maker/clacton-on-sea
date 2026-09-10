import { useEffect } from "react";

const EDITABLE_SELECTOR = "input, textarea, select, [contenteditable='true']";

function isEditableTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(EDITABLE_SELECTOR));
}

function blockIfNotEditable(event: Event) {
  if (isEditableTarget(event.target)) return;
  event.preventDefault();
}

/** Quiz-style copy/cut/paste/context-menu block. Search fields stay usable. */
export function DisableCopy() {
  useEffect(() => {
    const types = [
      "copy",
      "cut",
      "paste",
      "contextmenu",
      "dragstart",
      "selectstart",
    ] as const;

    for (const type of types) {
      document.addEventListener(type, blockIfNotEditable);
    }

    return () => {
      for (const type of types) {
        document.removeEventListener(type, blockIfNotEditable);
      }
    };
  }, []);

  return null;
}
