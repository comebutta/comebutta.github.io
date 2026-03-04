import { motion } from "framer-motion";
import { HeartHandshake, MonitorSmartphone, ShieldOff, WifiOff } from "lucide-react";

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="scroll-mt-20 bg-light-gray px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-dark-green sm:text-4xl">
            Semplice. Immediato. Sostenibile.
          </h2>
          <p className="mt-4 text-lg text-dark-green/80 max-w-2xl mx-auto">
            Un modello che elimina barriere tecnologiche, per rendere il monitoraggio
            alla portata di tutti.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Feature 2: Accessibilità totale */}
          <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-pale-green text-primary flex items-center justify-center mb-6">
              <MonitorSmartphone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-dark-green mb-3">2. Accessibilità totale</h3>
            <div className="space-y-3 text-dark-green/80 text-sm md:text-base">
              <p>La società COME BUTTA sviluppa una piattaforma online dedicata ai proprietari di immobili e ai gestori di strutture.</p>
              <ul className="list-disc pl-5 space-y-1 my-3 text-dark-green/90">
                <li>Monitorare il consumo effettivo delle aree rifiuti</li>
                <li>Distinguere tra quantità di rifiuti riciclabili e non riciclabili</li>
                <li>Superare i modelli di calcolo basati esclusivamente su metratura o numero di fruitori</li>
              </ul>
              <p>La piattaforma è accessibile tramite credenziali da qualsiasi dispositivo connesso a Internet. Non è prevista la realizzazione di un’applicazione dedicata: non è necessario scaricare nulla, né per il cliente né per i suoi collaboratori.</p>
              <p className="font-medium">Basta un browser e una connessione.</p>
              <p>Ogni utente, in base ai permessi assegnati, può consultare e utilizzare le sezioni di propria competenza in modo rapido e intuitivo.</p>
            </div>
          </motion.div>

          {/* Feature 3: Zero apparecchiature */}
          <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-pale-green text-primary flex items-center justify-center mb-6">
              <ShieldOff className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-dark-green mb-3">3. Zero apparecchiature, zero sprechi</h3>
            <div className="space-y-3 text-dark-green/80 text-sm md:text-base">
              <p>Siamo convinti che la sostenibilità debba partire dagli strumenti stessi che utilizziamo.</p>
              <p>A differenza di molte soluzioni presenti sul mercato, la nostra piattaforma non richiede l’acquisto o l’installazione di dispositivi fisici come monitor, bilance, badge o altri accessori tecnologici.</p>
              <p>Questo significa:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3 text-dark-green/90">
                <li>Nessun investimento in hardware</li>
                <li>Nessun costo di manutenzione o ricambi</li>
                <li>Nessun problema di obsolescenza</li>
                <li>Nessun consumo energetico aggiuntivo</li>
              </ul>
              <p className="font-medium text-primary">Un sistema a impatto zero che riduce costi, sprechi e complessità gestionale.</p>
            </div>
          </motion.div>

          {/* Feature 4: Funzionamento anche offline */}
          <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-pale-green text-primary flex items-center justify-center mb-6">
              <WifiOff className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-dark-green mb-3">4. Funzionamento anche offline</h3>
            <div className="space-y-3 text-dark-green/80 text-sm md:text-base">
              <p>Per garantire la massima continuità operativa, la piattaforma consente di raccogliere dati anche in modalità offline, qualora l’area rifiuti si trovi in una zona con segnale Internet debole o assente.</p>
              <p>I dati vengono registrati automaticamente non appena la connessione torna disponibile.</p>
              <p className="font-medium text-dark-green/90">Perché l’utilizzo corretto dell’area rifiuti deve poter diventare il più diffuso possibile, senza limiti tecnici.</p>
            </div>
          </motion.div>

          {/* Feature 5: Uno strumento di supporto */}
          <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-pale-green text-primary flex items-center justify-center mb-6">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-dark-green mb-3">5. Strumento di supporto, non invasivo</h3>
            <div className="space-y-3 text-dark-green/80 text-sm md:text-base">
              <p>L’area rifiuti è uno spazio di interesse collettivo. È corretto che tutti possano utilizzarla al meglio.</p>
              <p>COME BUTTA vuole essere uno strumento di supporto sempre disponibile, non invasivo, capace di:</p>
              <ul className="list-disc pl-5 space-y-1 my-3 text-dark-green/90">
                <li>Fornire indicazioni chiare</li>
                <li>Aggiornare sulle novità relative alla raccolta differenziata</li>
                <li>Rendere accessibili le informazioni principali a chiunque</li>
              </ul>
              <p className="font-medium text-primary">Il nostro obiettivo è diventare un punto di riferimento e fonte di ispirazione per una gestione corretta dei rifiuti e dei dati.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
