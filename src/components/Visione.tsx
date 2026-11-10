/** La nostra visione: testo editoriale a colonna stretta. */
export function Visione() {
  return (
    <section id="visione" className="bg-white px-4 py-16 sm:py-24" aria-labelledby="visione-heading">
      <div className="mx-auto max-w-[65ch]">
        <h2 id="visione-heading" className="text-3xl font-bold tracking-tight text-dark-green sm:text-4xl">
          La nostra visione
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-dark-green/90">
          <p>
            La sostenibilità non può essere solo dichiarata: deve essere resa concreta, accessibile e
            applicabile nella gestione quotidiana. Ogni organizzazione ha il dovere, e l’opportunità, di
            amministrare le proprie risorse in modo più consapevole, efficiente e responsabile.
          </p>
          <p>
            Avere controllo del consumo nelle aree rifiuti significa conoscere i processi, intuire le
            dinamiche di utilizzo, individuare margini di ottimizzazione e ridurre inefficienze. Significa
            trasformare un costo operativo in un ambito strategico di gestione, capace di generare valore
            nel tempo.
          </p>
          <p>
            Siamo convinti che l’innovazione debba semplificare, non complicare. Per questo abbiamo scelto
            un modello che elimina barriere tecnologiche, investimenti in hardware, costi di manutenzione e
            rischi di obsolescenza. Nessun dispositivo da acquistare, nessuna infrastruttura da installare.
          </p>
        </div>

        <blockquote className="my-10 rounded-2xl bg-pale-green p-6 text-xl font-medium leading-snug text-primary sm:p-8 sm:text-2xl">
          La nostra visione è rendere il monitoraggio delle aree rifiuti uno standard diffuso,
          economicamente vantaggioso e facilmente adottabile.
        </blockquote>

        <p className="text-lg leading-relaxed text-dark-green/90">
          Perché migliorare la sostenibilità significa anche migliorare la gestione dei costi. E farlo in
          modo semplice è la vera innovazione.
        </p>
      </div>
    </section>
  );
}
