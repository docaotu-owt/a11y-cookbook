import { useState } from "react";

export function Toast() {
  const [message, setMessage] = useState("");

  function showToast() {
    setMessage("Profile saved successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <div>
      <button
        type="button"
        onClick={showToast}
        className="rounded border px-3 py-2"
      >
        Save Profile
      </button>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 absolute top-0 right-6"
      >
        {message && (
          <div
            role="status"
            className="
              rounded
              border
              bg-green-50
              p-3
            "
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
