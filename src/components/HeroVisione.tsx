import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function HeroVisione() {
  return (
    <section
      id="visione"
      className="relative overflow-hidden bg-pale-green px-4 py-16 sm:py-24 md:py-32"
      aria-labelledby="visione-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-light-gray px-4 py-2 shadow-sm text-sm font-medium text-primary border border-primary/10">
              <Leaf className="h-4 w-4" />
              <span>1. La nostra visione</span>
            </div>
            <h1
              id="visione-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-dark-green sm:text-5xl md:text-6xl"
            >
              Monitorare è il primo passo per migliorare.
            </h1>

            <div className="mt-8 space-y-6 text-lg text-dark-green/90">
              <p>
                La sostenibilità non può essere solo dichiarata: deve essere resa concreta, accessibile e applicabile nella gestione quotidiana. Ogni organizzazione ha il dovere – e l’opportunità – di amministrare le proprie risorse in modo più consapevole, efficiente e responsabile.
              </p>
              <p>
                Avere controllo del consumo nelle aree rifiuti significa conoscere i processi, intuire le dinamiche di utilizzo, individuare margini di ottimizzazione e ridurre inefficienze. Significa trasformare un costo operativo in un ambito strategico di gestione, capace di generare valore nel tempo.
              </p>
              <p>
                Siamo convinti che l’innovazione debba semplificare, non complicare. Per questo abbiamo scelto un modello che elimina barriere tecnologiche, investimenti in hardware, costi di manutenzione e rischi di obsolescenza. Nessun dispositivo da acquistare, nessuna infrastruttura da installare: solo uno strumento accessibile, immediato e sostenibile.
              </p>
              <p className="font-medium text-primary">
                La nostra visione è rendere il monitoraggio delle aree rifiuti uno standard diffuso, economicamente vantaggioso e facilmente adottabile, capace di produrre benefici ambientali concreti e migliorare l’efficienza gestionale.
              </p>
              <p>
                Perché migliorare la sostenibilità significa anche migliorare la gestione dei costi. E farlo in modo semplice è la vera innovazione.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
              >
                Scopri come funziona
              </a>
            </div>
          </motion.div>

          {/* Astratto Illustrativo / Decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm border border-white/40 shadow-xl flex items-center justify-center p-8">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <circle cx="200" cy="200" r="140" fill="currentColor" fillOpacity="0.1" />
                <circle cx="200" cy="200" r="100" fill="currentColor" fillOpacity="0.2" />
                <path d="M200 120 C240 120 280 160 280 200 C280 240 240 280 200 280 C160 280 120 240 120 200 C120 160 160 120 200 120 Z" fill="currentColor" fillOpacity="0.3" />
                {/* Windmill/Leaf abstract */}
                <path d="M200 200 L200 80 Q240 80 240 140 Z" fill="currentColor" fillOpacity="0.8" />
                <path d="M200 200 L320 200 Q320 160 260 160 Z" fill="#10B981" fillOpacity="0.8" />
                <path d="M200 200 L200 320 Q160 320 160 260 Z" fill="currentColor" fillOpacity="0.8" />
                <path d="M200 200 L80 200 Q80 240 140 240 Z" fill="#10B981" fillOpacity="0.8" />
                <circle cx="200" cy="200" r="15" fill="#064E3B" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
