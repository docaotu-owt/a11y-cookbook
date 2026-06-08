export function AriaLabelledBy() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="dialog-title">Delete Account</h2>

        <button aria-labelledby="dialog-title">Delete</button>
      </div>

      <div>
        <span id="shutdown-label">Shutdown in</span>

        <span id="shutdown-time">10</span>

        <span id="shutdown-unit">minutes</span>

        <button
          aria-labelledby="
              shutdown-label
              shutdown-time
              shutdown-unit
            "
        >
          Start
        </button>
      </div>
    </div>
  );
}
