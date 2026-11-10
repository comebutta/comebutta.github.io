export function Crescita() {
  return (
    <section
      id="sviluppo"
      className="bg-gradient-to-br from-primary to-dark-green px-4 py-20 sm:py-28"
      aria-labelledby="sviluppo-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="sviluppo-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Crescita e sviluppo
        </h2>
        <div className="mt-8 space-y-6 text-xl text-white/90">
          <p>
            La piattaforma è progettata per evolversi. Oltre a supportare i clienti attuali, potrà
            intercettare realtà con esigenze simili, favorendo nuove funzionalità e servizi.
          </p>
          <p className="text-2xl font-medium italic text-white">
            Perché la sostenibilità è un percorso condiviso, e misurare è il primo passo per migliorare
            insieme.
          </p>
        </div>
        <a
          href="#contattaci"
          className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Inizia il percorso con noi
        </a>
      </div>
    </section>
  );
}
