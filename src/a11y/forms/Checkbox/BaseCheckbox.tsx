type BaseCheckboxProps = {
  id: string;
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  defaultChecked?: boolean;
};

export function BaseCheckbox({
  id,
  label,
  description,
  error,
  required,
  defaultChecked,
}: Readonly<BaseCheckboxProps>) {
  const descriptionId = description ? `${id}-description` : undefined;

  const errorId = error ? `${id}-error` : undefined;

  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");

  return (
    <div>
      <div className="flex items-start gap-2">
        <input
          id={id}
          type="checkbox"
          required={required}
          defaultChecked={defaultChecked}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy || undefined}
          className="mt-1"
        />

        <label htmlFor={id}>{label}</label>
      </div>

      {description && (
        <p id={descriptionId} className="ml-6 mt-1 text-sm text-slate-600">
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} className="ml-6 mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
