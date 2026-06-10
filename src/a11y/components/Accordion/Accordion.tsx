import { useId, useState } from "react";

export function Accordion() {
  const [open, setOpen] = useState(false);

  const buttonId = useId();
  const panelId = useId();

  return (
    <div className="rounded-lg border">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className="
            flex
            w-full
            items-center
            justify-between
            p-4
            text-left
          "
        >
          What is Accessibility?
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t p-4"
        >
          Accessibility ensures websites and applications can be used by people
          with disabilities.
        </div>
      )}
    </div>
  );
}
