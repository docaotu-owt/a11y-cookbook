export function Select() {
  return (
    <div>
      <label htmlFor="country" className="mb-1 block font-medium">
        Country
      </label>

      <select id="country" className="rounded border px-3 py-2">
        <option value="">Select a country</option>

        <option value="vn">Vietnam</option>

        <option value="jp">Japan</option>

        <option value="sg">Singapore</option>
      </select>
    </div>
  );
}
