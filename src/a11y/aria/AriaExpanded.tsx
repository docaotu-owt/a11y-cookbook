import { useState } from "react";

export function AriaExpanded() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-md">
      <button
        aria-expanded={open}
        aria-controls="faq-panel"
        onClick={() => setOpen(!open)}
        className="rounded border px-3 py-2"
      >
        What is Accessibility?
      </button>

      {open && (
        <div id="faq-panel" className="mt-2 rounded border p-3">
          Accessibility ensures websites can be used by people with
          disabilities.
        </div>
      )}
    </div>
  );
}
