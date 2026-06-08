export function ContentEditable() {
  return (
    <div
      contentEditable
      role="textbox"
      aria-label="Message"
      aria-multiline="true"
      className="
            min-h-24
            rounded
            border
            p-3
            focus:outline-none
            focus:ring-2
          "
    />
  );
}
