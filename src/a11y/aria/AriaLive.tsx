import { useState } from "react";

export function AriaLive() {
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-4">
      <button
        onClick={() => setMessage("Profile saved successfully.")}
        className="rounded border px-3 py-2"
      >
        Save Profile
      </button>

      <div aria-live="polite">{message}</div>
    </div>
  );
}
