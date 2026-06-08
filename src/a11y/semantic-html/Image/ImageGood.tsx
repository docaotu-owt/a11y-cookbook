export function ImageGood() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 font-medium">Informative Image</h3>

        <img
          src="https://placehold.co/600x300"
          alt="Sales chart showing revenue growth from January to June"
          className="rounded-lg border"
        />
      </div>

      <div>
        <h3 className="mb-2 font-medium">Decorative Image</h3>

        <img
          src="https://placehold.co/600x100"
          alt=""
          className="rounded-lg border"
        />
      </div>
    </div>
  );
}
