import { useMemo, useState } from "react";
import { sections } from "./section";

type SidebarProps = {
  pathname: string;
};

export function Sidebar({ pathname }: Readonly<SidebarProps>) {
  const [search, setSearch] = useState("");

  const defaultOpen = useMemo(() => {
    return Object.fromEntries(
      sections.map((section) => [
        section.title,
        section.items?.some((item) => item.href === pathname) ?? false,
      ])
    );
  }, [pathname]);

  const [openSections, setOpenSections] =
    useState<Record<string, boolean>>(defaultOpen);

  const filteredSections = useMemo(() => {
    if (!search.trim()) {
      return sections;
    }

    const keyword = search.toLowerCase();

    return sections
      .map((section) => {
        const sectionMatches = section.title.toLowerCase().includes(keyword);

        const matchingItems =
          section.items?.filter((item) =>
            item.title.toLowerCase().includes(keyword)
          ) ?? [];

        if (sectionMatches || matchingItems.length > 0) {
          return {
            ...section,
            items: matchingItems.length > 0 ? matchingItems : section.items,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [search]);

  function toggleSection(sectionTitle: string) {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  }

  return (
    <aside
      className="
        sticky
        top-0
        flex
        h-screen
        w-80
        shrink-0
        flex-col
        border-r
        border-slate-200
        bg-white
      "
    >
      {/* Header */}

      <div className="border-b border-slate-200 p-2">
        <div className="relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-2.5
              pr-14
              text-sm
              text-slate-900
              placeholder:text-slate-500
              outline-none
              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />

          <span
            className="
              absolute
              top-1/2
              right-3
              -translate-y-1/2
              rounded
              border
              border-slate-200
              px-1.5
              py-0.5
              text-xs
              text-slate-500
            "
            aria-hidden="true"
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* Navigation */}

      <nav
        aria-label="Accessibility Cookbook Navigation"
        className="
          flex-1
          overflow-y-auto
          px-4
          py-6
        "
      >
        {filteredSections.length === 0 ? (
          <div
            className="
              rounded-xl
              border
              border-slate-200
              p-4
              text-sm
              text-slate-500
            "
          >
            No results found.
          </div>
        ) : (
          <ul className="space-y-4">
            {filteredSections.map((section) => {
              if (!section) {
                return null;
              }

              const isSearching = search.trim().length > 0;

              const isOpen = isSearching ? true : openSections[section.title];

              const panelId = `section-panel-${section.title}`;

              const buttonId = `section-button-${section.title}`;

              const isCurrent = pathname === section.href;

              return (
                <li key={section.title}>
                  {section.href ? (
                    <a
                      href={section.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          transition-colors
                          flex
                          items-center
                          gap-2

                          ${
                            isCurrent
                              ? `
                                bg-blue-50
                                font-medium
                                text-blue-700
                              `
                              : `
                                text-slate-700
                                hover:bg-slate-100
                                hover:text-slate-900
                              `
                          }
                        `}
                    >
                      {section?.icon}
                      {section.title}
                    </a>
                  ) : (
                    <>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleSection(section.title)}
                        className="
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-lg
                            px-3
                            py-2
                            text-sm
                            font-semibold
                            text-slate-700
                            transition-colors

                            hover:bg-slate-100
                            hover:text-slate-900
                          "
                      >
                        <span
                          className="flex
                          items-center
                          gap-2"
                        >
                          {section?.icon}
                          {section.title}
                        </span>

                        <svg
                          viewBox="0 0 20 20"
                          className={`
                              h-4
                              w-4
                              text-slate-500
                              transition-transform

                              ${isOpen ? "rotate-90" : ""}
                            `}
                          aria-hidden="true"
                        >
                          <path fill="currentColor" d="M7 5l6 5-6 5z" />
                        </svg>
                      </button>

                      <div
                        id={panelId}
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                        className="
                            mt-2
                            border-l
                            border-slate-200
                            pl-3
                          "
                      >
                        <ul className="space-y-1 mx-4">
                          {section.items?.map((item) => {
                            const isCurrent = pathname === item.href;

                            return (
                              <li key={item.href}>
                                <a
                                  href={item.href}
                                  aria-current={isCurrent ? "page" : undefined}
                                  className={`
                                        block
                                        rounded-md
                                        px-3
                                        py-2
                                        text-sm
                                        transition-colors

                                        ${
                                          isCurrent
                                            ? `
                                              border-l-2
                                              border-blue-600
                                              bg-blue-50
                                              font-medium
                                              text-blue-700
                                            `
                                            : `
                                              text-slate-700
                                              hover:bg-slate-100
                                              hover:text-slate-900
                                            `
                                        }
                                      `}
                                >
                                  {item.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      {/* Footer */}

      <div
        className="
          border-t
          border-slate-200
          p-4
          text-xs
          text-slate-500
        "
      >
        Accessibility Cookbook
        <br />
        Internal Documentation
      </div>
    </aside>
  );
}
