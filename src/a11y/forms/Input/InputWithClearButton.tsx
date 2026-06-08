import { useState } from "react";
import { BaseInput } from "./BaseInput";

export function InputWithClearButton() {
  const [value, setValue] = useState("Accessibility");

  return (
    <div>
      <label htmlFor="search" className="mb-1 block font-medium">
        Search
      </label>

      <div className="relative">
        <input
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="
            w-full
            rounded
            border
            px-3
            py-2
            pr-10
          "
        />

        <button
          type="button"
          aria-label="Clear search"
          onClick={() => setValue("")}
          className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
          "
        >
          ×
        </button>
      </div>
    </div>
  );
}
