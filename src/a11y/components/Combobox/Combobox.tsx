import { useId, useMemo, useState } from "react";

const countries = [
  "Vietnam",
  "Japan",
  "South Korea",
  "Singapore",
  "Thailand",
  "Australia",
];

export function Combobox() {
  const id = useId();

  const [inputValue, setInputValue] = useState("");

  const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredOptions = useMemo(
    () =>
      countries.filter((country) =>
        country.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue]
  );

  function selectOption(value: string) {
    setInputValue(value);
    setOpen(false);
    setActiveIndex(-1);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        setOpen(true);

        setActiveIndex((current) =>
          Math.min(current + 1, filteredOptions.length - 1)
        );
        break;

      case "ArrowUp":
        event.preventDefault();

        setActiveIndex((current) => Math.max(current - 1, 0));
        break;

      case "Enter":
        if (activeIndex >= 0 && filteredOptions[activeIndex]) {
          event.preventDefault();

          selectOption(filteredOptions[activeIndex]);
        }
        break;

      case "Escape":
        setOpen(false);
        setActiveIndex(-1);
        break;
    }
  }

  return (
    <div className="relative max-w-sm">
      <label htmlFor={`${id}-input`} className="mb-1 block">
        Country
      </label>

      <input
        id={`${id}-input`}
        type="text"
        role="combobox"
        value={inputValue}
        autoComplete="off"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-activedescendant={
          activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
        }
        onChange={(event) => {
          setInputValue(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className="
          w-full
          rounded
          border
          p-2
        "
      />

      {open && filteredOptions.length > 0 && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          className="
              absolute
              z-10
              mt-1
              w-full
              rounded
              border
              bg-white
            "
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={activeIndex === index}
              onMouseDown={() => selectOption(option)}
              className={`
                    cursor-pointer
                    p-2
                    ${activeIndex === index ? "bg-slate-100" : ""}
                  `}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
