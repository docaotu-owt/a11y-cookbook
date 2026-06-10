import { useId, useRef, useState } from "react";

const tabs = [
  {
    label: "Overview",
    content: "Accessibility ensures websites can be used by everyone.",
  },
  {
    label: "Keyboard",
    content: "Users should be able to navigate without a mouse.",
  },
  {
    label: "Screen Readers",
    content: "Assistive technologies rely on semantic information.",
  },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const id = useId();

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(index: number) {
    setActiveTab(index);
    tabRefs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowRight": {
        event.preventDefault();

        focusTab((index + 1) % tabs.length);
        break;
      }

      case "ArrowLeft": {
        event.preventDefault();

        focusTab((index - 1 + tabs.length) % tabs.length);
        break;
      }

      case "Home": {
        event.preventDefault();
        focusTab(0);
        break;
      }

      case "End": {
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      }
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Accessibility Topics"
        className="flex border-b"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`${id}-tab-${index}`}
            role="tab"
            type="button"
            aria-selected={activeTab === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`
              border-b-2 px-4 py-2
              ${
                activeTab === index
                  ? "border-slate-900 font-medium"
                  : "border-transparent"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) =>
        activeTab === index ? (
          <div
            key={tab.label}
            id={`${id}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${index}`}
            className="p-4"
          >
            {tab.content}
          </div>
        ) : null
      )}
    </div>
  );
}
