import { useMemo, useState } from "react";
import { sections } from "./section";

type SidebarProps = {
  pathname: string;
};

export function Sidebar({ pathname }: Readonly<SidebarProps>) {
  const defaultOpen = useMemo(() => {
    return Object.fromEntries(
      sections.map((section) => [
        section.title,
        section?.items?.some((item) => item.href === pathname),
      ])
    );
  }, [pathname]);

  const [openSections, setOpenSections] = useState(defaultOpen);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <aside
      className="
        h-screen
        w-72
        shrink-0
        overflow-y-auto
        border-r
        bg-white
        p-6
      "
    >
      <h1 className="p-4 text-3xl">A11y Cookbook</h1>
      <nav aria-label="Accessibility Cookbook Navigation">
        <ul className="space-y-4">
          {sections.map((section) => {
            const isOpen = openSections[section.title];

            const panelId = `section-panel-${section.title}`;
            const buttonId = `section-button-${section.title}`;
            const isCurrent = pathname === section.href;

            return (
              <li key={section.title}>
                {section?.href ? (
                  <a
                    href={section.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`
                      block
                      rounded-md
                      px-3
                      py-2
                      text-sm
                      transition-colors
                      focus-visible:outline
                      focus-visible:outline-offset-2
                      ${
                        isCurrent
                          ? "bg-blue-50 font-medium text-blue-700"
                          : "hover:bg-slate-100"
                      }
                    `}
                  >
                    {section.title}
                  </a>
                ) : (
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
                    rounded-md
                    px-2
                    py-2
                    text-left
                    text-sm
                    font-semibold
                    hover:bg-slate-100
                    focus-visible:outline
                    focus-visible:outline-offset-2
                  "
                  >
                    <span>{section.title}</span>

                    <span
                      aria-hidden="true"
                      className={`transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                  </button>
                )}

                <ul
                  id={panelId}
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="
                    mt-1
                    ml-2
                    space-y-1
                    border-l
                    pl-3
                  "
                >
                  {section?.items?.map((item) => {
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
                              focus-visible:outline
                              focus-visible:outline-offset-2
                              ${
                                isCurrent
                                  ? "bg-blue-50 font-medium text-blue-700"
                                  : "hover:bg-slate-100"
                              }
                            `}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
