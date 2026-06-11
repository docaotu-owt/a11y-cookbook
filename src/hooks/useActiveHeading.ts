import { useEffect, useState } from "react";

export function useActiveHeading() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const container = document.querySelector("main");

    if (!container) {
      return;
    }

    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("h2[id], h3[id]")
    );

    function updateActiveHeading() {
      if (!container) return;
      const scrollPosition = container?.scrollTop + 120;

      let current = headings[0];

      for (const heading of headings) {
        if (heading.offsetTop <= scrollPosition) {
          current = heading;
        } else {
          break;
        }
      }

      setActiveId(current?.id ?? "");
    }

    updateActiveHeading();

    container.addEventListener("scroll", updateActiveHeading);

    return () => {
      container.removeEventListener("scroll", updateActiveHeading);
    };
  }, []);

  return activeId;
}
