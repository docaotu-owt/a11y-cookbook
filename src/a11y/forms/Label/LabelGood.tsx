export function LabelGood() {
  return (
    <form className="max-w-sm space-y-4">
      <div>
        <label htmlFor="email" className="mb-1 block font-medium">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          className="w-full rounded border px-3 py-2"
          placeholder="john@example.com"
        />
      </div>
    </form>
  );
}
