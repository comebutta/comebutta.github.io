import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#visione", label: "Visione" },
  { href: "#features", label: "Sistema" },
  { href: "#sviluppo", label: "Sviluppo" },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["visione", "features", "sviluppo", "contattaci"];

    const onScroll = () => {
      const scrollY = window.scrollY;
      let current = "visione";

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - 100 <= scrollY) {
          current = sections[i];
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Navigazione principale"
      >
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-semibold text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="ComeButta – torna inizio pagina"
        >
          <img
            src="/logo.png"
            alt=""
            width="120"
            height="36"
            className="h-9 w-auto object-contain"
          />
          <span>ComeButta</span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-dark-blue hover:bg-light-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          id="nav-menu"
          className={`absolute left-0 right-0 top-full flex flex-col gap-1 bg-white py-2 shadow-lg sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:py-0 sm:shadow-none ${menuOpen ? "flex" : "hidden"
            }`}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className={`rounded px-4 py-2 text-sm font-medium transition-colors sm:px-0 sm:py-0 ${isActive
                    ? "bg-pale-green text-primary sm:bg-transparent sm:text-primary"
                    : "text-dark-blue hover:text-primary"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contattaci"
            onClick={handleNavClick}
            className="mx-4 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-light-gray hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:mx-0"
          >
            Contattaci
          </a>
        </div>
      </nav>
    </header>
  );
}
