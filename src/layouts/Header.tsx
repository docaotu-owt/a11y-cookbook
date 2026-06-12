import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const githubUrl = "https://github.com/docaotu-owt/a11y-cookbook";
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const initialTheme = savedTheme === "dark" ? "dark" : "light";

    setTheme(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    localStorage.setItem("theme", nextTheme);
  }

  return (
    <header
      className="
        border-b
        border-slate-200
        bg-white/90
        backdrop-blur
        dark:border-slate-800
        dark:bg-slate-950/90
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          items-center
          justify-between
          px-6
        "
      >
        <a
          href="/"
          className="
            flex
            items-center
            gap-2
            text-3xl
            font-semibold
            text-slate-900
            dark:text-slate-100
          "
        >
          Web Accessibility (a11y) Guide
        </a>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              h-9
              items-center
              rounded-md
              border
              border-slate-200
              px-3
              text-sm
              text-slate-700
              transition-colors
              hover:bg-slate-100
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              dark:border-slate-700
              dark:text-slate-200
              dark:hover:bg-slate-800
            "
          >
            Github
          </a>

          <button
            type="button"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            onClick={toggleTheme}
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-md
              border
              border-slate-200
              transition-colors
              hover:bg-slate-100
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              dark:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            <span aria-hidden="true" className="text-lg">
              {theme === "light" ? <Moon /> : <Sun />}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
