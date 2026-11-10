import { LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { APP_URL } from "../site";

// Link assoluti ("/#...") così funzionano anche dalle pagine legali.
const NAV_LINKS = [
  { id: "visione", label: "Visione" },
  { id: "features", label: "Come funziona" },
  { id: "sviluppo", label: "Sviluppo" },
] as const;

const SECTIONS = ["visione", "features", "sviluppo", "contattaci"];

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

/** Sezione della home attualmente visibile (solo sulla home). */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!enabled) return;
    const onScroll = () => {
      let current = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= window.scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return active;
}

export function Navbar({ isHome = true }: { isHome?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(isHome);

  // Chiude il menu mobile con Esc.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-green/10 bg-white/90 backdrop-blur">
      <nav
        className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Navigazione principale"
      >
        <a href="/" className={`flex items-center gap-2 rounded ${focusRing}`} aria-label="ComeButta, vai alla home">
          <img src="/logo.png" alt="" width="36" height="36" className="h-9 w-9 object-contain" />
          <span className="text-xl font-semibold text-primary">ComeButta</span>
        </a>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-dark-green hover:bg-pale-green md:hidden ${focusRing}`}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>

        <div
          id="nav-menu"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-dark-green/10 bg-white px-4 py-3 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`/#${id}`}
                onClick={close}
                aria-current={isActive ? "location" : undefined}
                className={`rounded px-3 py-3 text-base font-medium transition-colors md:px-0 md:py-1 md:text-sm ${
                  isActive ? "text-primary" : "text-dark-green hover:text-primary"
                } ${focusRing}`}
              >
                {label}
              </a>
            );
          })}

          <div className="mt-2 flex flex-col gap-2 md:mt-0 md:flex-row md:items-center md:gap-3">
            <a
              href={APP_URL}
              className={`inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 px-4 py-2.5 text-sm font-medium text-primary hover:bg-pale-green ${focusRing}`}
            >
              <LogIn className="h-4 w-4" aria-hidden />
              Accedi
            </a>
            <a
              href="/#contattaci"
              onClick={close}
              className={`inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-dark-green ${focusRing}`}
            >
              Contattaci
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
