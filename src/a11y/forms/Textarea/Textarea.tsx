export function Textarea() {
  return (
    <div>
      <label htmlFor="comment" className="mb-1 block font-medium">
        Comment
      </label>

      <textarea id="comment" rows={4} className="w-full rounded border p-2" />
    </div>
  );
}
