import { useActiveHeading } from "../hooks/useActiveHeading";

type Heading = {
  depth: number;
  slug: string;
  text: string;
};

type Props = {
  headings: Heading[];
};

export function TableOfContents({ headings }: Readonly<Props>) {
  const activeId = useActiveHeading();

  return (
    <aside
      className="
        hidden
        xl:block
        w-72
        shrink-0
        border-l
        border-slate-200
        bg-white
        overflow-y-auto
      "
    >
      <div
        className="
          sticky
          top-0
          p-8
        "
      >
        <h2
          className="
            mb-6
            text-sm
            font-semibold
            text-slate-900
          "
        >
          On this page
        </h2>

        <nav aria-label="Table of contents">
          <ul
            className="
              relative
              border-l
              border-slate-200
            "
          >
            {headings
              ?.filter((heading) => heading.depth >= 2 && heading.depth <= 3)
              ?.map((heading) => {
                const isActive = activeId === heading.slug;

                return (
                  <li
                    key={heading.slug}
                    className="
                      relative
                    "
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          left-[-1px]
                          top-0
                          h-full
                          w-[2px]
                          bg-blue-600
                        "
                      />
                    )}

                    <a
                      href={`#${heading.slug}`}
                      className={`
                        block
                        py-3
                        pl-5
                        text-sm
                        transition-colors

                        ${heading.depth === 3 ? "pl-8" : ""}

                        ${
                          isActive
                            ? `
                              font-medium
                              text-blue-600
                            `
                            : `
                              text-slate-500
                              hover:text-slate-900
                            `
                        }
                      `}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>

        {/* Keyboard Support Card */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
          "
        >
          <h3
            className="
              mb-4
              text-sm
              font-semibold
              text-slate-900
            "
          >
            Keyboard Support
          </h3>

          <dl
            className="
              space-y-3
              text-sm
            "
          >
            <div className="flex items-center justify-between gap-4">
              <kbd className="rounded bg-slate-100 px-2 py-1 text-xs">Tab</kbd>
              <span className="text-slate-600">Next focus</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <kbd className="rounded bg-slate-100 px-2 py-1 text-xs">
                Shift+Tab
              </kbd>
              <span className="text-slate-600">Previous focus</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <kbd className="rounded bg-slate-100 px-2 py-1 text-xs">
                Enter
              </kbd>
              <span className="text-slate-600">Activate</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <kbd className="rounded bg-slate-100 px-2 py-1 text-xs">Esc</kbd>
              <span className="text-slate-600">Close</span>
            </div>
          </dl>
        </div>
      </div>
    </aside>
  );
}
