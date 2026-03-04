import { motion } from "framer-motion";

export function Crescita() {
  return (
    <section id="sviluppo" className="scroll-mt-20 relative px-4 py-20 sm:py-28 overflow-hidden">
      {/* Sfondo sfumato decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          6. Crescita e sviluppo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-xl text-white/90 space-y-6"
        >
          <p>
            La piattaforma è progettata per evolversi.
          </p>
          <p>
            Oltre a supportare i clienti attuali, potrà intercettare realtà con
            esigenze simili, favorendo lo sviluppo di nuove funzionalità e servizi.
          </p>
          <p className="font-medium text-2xl mt-8 italic">
            Perché la sostenibilità è un percorso condiviso, e misurare è il primo
            passo per migliorare insieme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="#contattaci"
            className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-all"
          >
            Inizia il percorso con noi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
