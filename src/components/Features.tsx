import { motion } from "framer-motion";
import { HeartHandshake, MonitorSmartphone, ShieldOff, WifiOff, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Feature = { icon: LucideIcon; title: string; body: ReactNode };

const list = (items: string[]) => (
  <ul className="list-disc space-y-1 pl-5 text-dark-green/90">
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
);

const FEATURES: Feature[] = [
  {
    icon: MonitorSmartphone,
    title: "Accessibile da qualsiasi dispositivo",
    body: (
      <>
        <p>Una piattaforma online per proprietari di immobili e gestori di strutture, pensata per:</p>
        {list([
          "monitorare il consumo effettivo delle aree rifiuti",
          "distinguere tra rifiuti riciclabili e non riciclabili",
          "superare i calcoli basati solo su metratura o numero di fruitori",
        ])}
        <p>Si accede con le proprie credenziali da browser: nessuna app da scaricare, né per te né per i tuoi collaboratori. Ogni utente vede le sezioni di sua competenza in base ai permessi assegnati.</p>
      </>
    ),
  },
  {
    icon: ShieldOff,
    title: "Zero apparecchiature, zero sprechi",
    body: (
      <>
        <p>La piattaforma non richiede monitor, bilance, badge o altri dispositivi fisici. Questo significa:</p>
        {list([
          "nessun investimento in hardware",
          "nessun costo di manutenzione o ricambi",
          "nessun problema di obsolescenza",
          "nessun consumo energetico aggiuntivo",
        ])}
      </>
    ),
  },
  {
    icon: WifiOff,
    title: "Funziona anche offline",
    body: (
      <p>
        Se l’area rifiuti è in una zona con segnale debole o assente, i dati si raccolgono comunque e
        vengono inviati automaticamente appena torna la connessione.
      </p>
    ),
  },
  {
    icon: HeartHandshake,
    title: "Uno strumento di supporto, non invasivo",
    body: (
      <>
        <p>L’area rifiuti è uno spazio di interesse collettivo. ComeButta aiuta a usarla al meglio:</p>
        {list([
          "fornisce indicazioni chiare",
          "aggiorna sulle novità della raccolta differenziata",
          "rende accessibili a tutti le informazioni principali",
        ])}
      </>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="bg-light-gray px-4 py-16 sm:py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-dark-green sm:text-4xl">
            Come funziona
          </h2>
          <p className="mt-4 text-lg text-dark-green/90">
            Configuriamo insieme a te i contenitori di ogni immobile. Da lì gli operatori registrano il
            livello di riempimento a ogni ritiro e la piattaforma stima i quantitativi per frazione.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border border-dark-green/10 bg-white p-6 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-pale-green text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark-green">{title}</h3>
              <div className="space-y-3 text-dark-green/90">{body}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
