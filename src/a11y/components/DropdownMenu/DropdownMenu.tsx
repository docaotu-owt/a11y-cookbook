import { useEffect, useId, useRef, useState } from "react";

const items = ["Edit", "Duplicate", "Delete"];

export function DropdownMenu() {
  const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const menuId = useId();

  useEffect(() => {
    if (open) {
      itemRefs.current[0]?.focus();
    }
  }, [open]);

  function closeMenu() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onMenuKeyDown(event: React.KeyboardEvent) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        setActiveIndex((current) => {
          const next = (current + 1) % items.length;

          itemRefs.current[next]?.focus();

          return next;
        });

        break;

      case "ArrowUp":
        event.preventDefault();

        setActiveIndex((current) => {
          const next = (current - 1 + items.length) % items.length;

          itemRefs.current[next]?.focus();

          return next;
        });

        break;

      case "Home":
        event.preventDefault();

        setActiveIndex(0);
        itemRefs.current[0]?.focus();

        break;

      case "End":
        event.preventDefault();

        setActiveIndex(items.length - 1);

        itemRefs.current[items.length - 1]?.focus();

        break;

      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
    }
  }

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((open) => !open)}
        className="
          rounded
          border
          px-3
          py-2
        "
      >
        Actions
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Actions"
          onKeyDown={onMenuKeyDown}
          tabIndex={0}
          className="
            absolute
            mt-1
            min-w-48
            rounded
            border
            bg-white
            shadow
          "
        >
          {items.map((item, index) => (
            <button
              key={item}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              type="button"
              role="menuitem"
              className="
                  block
                  w-full
                  px-3
                  py-2
                  text-left
                  hover:bg-slate-100
                "
              onClick={() => {
                closeMenu();
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
