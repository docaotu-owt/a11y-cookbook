import React from "react";

type BaseInputProps = {
  id: string;
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
};

export function BaseInput({
  id,
  label,
  description,
  error,
  required,
  disabled,
  endAdornment,
}: Readonly<BaseInputProps>) {
  const descriptionId = description ? `${id}-description` : undefined;

  const errorId = error ? `${id}-error` : undefined;

  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");

  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-medium">
        {label}

        {required && (
          <span aria-hidden="true" className="ml-1">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <input
          id={id}
          required={required}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy || undefined}
          className="
            w-full
            rounded
            border
            px-3
            py-2
            pr-10
          "
        />

        {endAdornment && (
          <div
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
            "
          >
            {endAdornment}
          </div>
        )}
      </div>

      {description && (
        <p
          id={descriptionId}
          className="
            mt-1
            text-sm
            text-slate-600
          "
        >
          {description}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className="
            mt-1
            text-sm
            text-red-600
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}
