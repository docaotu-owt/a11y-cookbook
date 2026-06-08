export function AriaDescribedBy() {
  return (
    <div className="space-y-6 max-w-md">
      <div>
        <label htmlFor="username" className="block font-medium">
          Username
        </label>

        <input
          id="username"
          aria-describedby="username-help"
          className="mt-1 w-full rounded border px-3 py-2"
        />

        <p id="username-help" className="mt-1 text-sm text-slate-600">
          Must be between 4 and 20 characters.
        </p>
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>

        <input
          id="email"
          aria-describedby="email-error"
          aria-invalid="true"
          className="mt-1 w-full rounded border px-3 py-2"
        />

        <p id="email-error" className="mt-1 text-sm text-red-600">
          Please enter a valid email address.
        </p>
      </div>
    </div>
  );
}
