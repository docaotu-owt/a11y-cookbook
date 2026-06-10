import { useId, useState } from "react";

export function Tooltip() {
  const [open, setOpen] = useState(false);

  const tooltipId = useId();

  return (
    <div className="relative inline-block">
      <button
        type="button"
        aria-describedby={open ? tooltipId : undefined}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="rounded border px-3 py-2"
      >
        Save
      </button>

      {open && (
        <div
          id={tooltipId}
          role="tooltip"
          className="
            absolute
            left-1/2
            top-full
            mt-2
            -translate-y-1/2
            rounded
            border
            bg-white
            px-3
            py-2
            shadow
            whitespace-nowrap
          "
        >
          Save your changes
        </div>
      )}
    </div>
  );
}
