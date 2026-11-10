import { motion } from "framer-motion";
import { Check } from "lucide-react";

const POINTS = [
  "Nessun dispositivo da installare",
  "Funziona anche senza connessione",
  "Report esportabili in Excel e CSV",
];

/** Hero: messaggio principale e call to action. Il testo della visione è in Visione.tsx. */
export function HeroVisione() {
  return (
    <section className="relative overflow-hidden bg-pale-green px-4 py-16 sm:py-24" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[7fr_5fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Monitoraggio rifiuti per immobili
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-dark-green sm:text-5xl md:text-6xl"
          >
            Monitorare è il primo passo per migliorare.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-dark-green/90">
            ComeButta è la web-app che stima quanti rifiuti producono i tuoi immobili, frazione per
            frazione. Gli operatori registrano il riempimento dei contenitori dal telefono a ogni ritiro,
            tu ottieni report pronti per la rendicontazione.
          </p>

          <ul className="mt-6 space-y-2 text-dark-green">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contattaci"
              className="inline-flex rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-dark-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Richiedi una demo
            </a>
            <a
              href="#features"
              className="inline-flex rounded-md border border-primary/30 bg-white px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-pale-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Scopri come funziona
            </a>
          </div>
        </div>

        {/* Illustrazione decorativa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative hidden aspect-square lg:block"
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 opacity-50 blur-3xl" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl backdrop-blur-sm">
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" className="text-primary">
              <circle cx="200" cy="200" r="140" fill="currentColor" fillOpacity="0.1" />
              <circle cx="200" cy="200" r="100" fill="currentColor" fillOpacity="0.2" />
              <path d="M200 120 C240 120 280 160 280 200 C280 240 240 280 200 280 C160 280 120 240 120 200 C120 160 160 120 200 120 Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M200 200 L200 80 Q240 80 240 140 Z" fill="currentColor" fillOpacity="0.8" />
              <path d="M200 200 L320 200 Q320 160 260 160 Z" fill="#10B981" fillOpacity="0.8" />
              <path d="M200 200 L200 320 Q160 320 160 260 Z" fill="currentColor" fillOpacity="0.8" />
              <path d="M200 200 L80 200 Q80 240 140 240 Z" fill="#10B981" fillOpacity="0.8" />
              <circle cx="200" cy="200" r="15" fill="#064E3B" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
