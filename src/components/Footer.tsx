import { APP_URL, COMPANY, CONTACTS } from "../site";

const linkClass =
  "rounded hover:text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function Footer() {
  return (
    <footer className="border-t border-dark-green/10 bg-white px-4 py-10 text-sm text-dark-green/80">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1fr_auto]">
        <div className="space-y-1">
          <p className="font-semibold text-dark-green">{COMPANY.name}</p>
          <p>
            P.IVA e C.F. {COMPANY.vat} · Cap. soc. {COMPANY.capital}
          </p>
          <p>
            <a className={linkClass} href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </p>
        </div>

        <nav aria-label="Link utili" className="flex flex-col gap-2 sm:items-end">
          <a className={linkClass} href={APP_URL}>Accedi alla piattaforma</a>
          <a className={linkClass} href="/privacy/">Privacy Policy</a>
          <a className={linkClass} href="/termini-e-condizioni/">Termini e Condizioni</a>
        </nav>

        <p className="text-dark-green/60 sm:col-span-2">© 2026 {COMPANY.name} Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
