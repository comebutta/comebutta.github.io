import{c as z,j as a,r as p,a as f,N as v,F as b}from"./Navbar-BJIsXtPu.js";const h=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],C=z("download",h);function P(o){const e=[];for(const i of o.split(`
`)){if(!i.trim())continue;const t=e[e.length-1];if(i.startsWith("|")){const n=i.slice(1).split("|").map(r=>r.trim());t?.type==="table"?t.rows.push(n):e.push({type:"table",rows:[n]})}else i.startsWith("# ")?e.push({type:"title",text:i.slice(2)}):i.startsWith("@")?e.push({type:"subtitle",text:i.slice(1)}):i.startsWith("## Parte")?e.push({type:"part",text:i.slice(3)}):i.startsWith("### ")?e.push({type:"h3",text:i.slice(4)}):i.startsWith("## ")?e.push({type:"h2",text:i.slice(3)}):i.startsWith("-- ")?e.push({type:"li",level:1,text:i.slice(3)}):i.startsWith("- ")?e.push({type:"li",level:0,text:i.slice(2)}):i.trim()==="!SIGN"?e.push({type:"sign"}):e.push({type:"p",text:i})}return e}function x(o){return o.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map(e=>e.startsWith("**")?{text:e.slice(2,-2),bold:!0}:{text:e,bold:!1})}function I(o){const e=o.match(/^(\d+(?:\.\d+)?)\./);return e?`art-${e[1].replace(".","-")}`:void 0}const B=/([\w.-]+@[\w-]+(?:\.[\w-]+)+|www\.[\w-]+(?:\.[\w-]+)+)/g;function c(o){return o.split(B).map((e,i)=>{if(i%2===0)return e;const t=e.includes("@")?`mailto:${e}`:`https://${e}`;return a.jsx("a",{href:t,className:"text-primary underline underline-offset-2 hover:text-dark-green",children:e},i)})}function l({text:o}){return a.jsx(a.Fragment,{children:x(o).map((e,i)=>e.bold?a.jsx("strong",{className:"font-semibold text-dark-green",children:c(e.text)},i):a.jsx(p.Fragment,{children:c(e.text)},i))})}function L(o){const e=[];for(let i=0;i<o.length;i++){const t=o[i];if(t.type==="li"){const n=[];for(;i<o.length&&o[i].type==="li";){const r=o[i];r.level===1&&n.length?n[n.length-1].sub.push(r.text):n.push({text:r.text,sub:[]}),i++}i--,e.push(a.jsx("ul",{className:"mb-4 list-disc space-y-1.5 pl-6",children:n.map((r,s)=>a.jsxs("li",{children:[a.jsx(l,{text:r.text}),r.sub.length>0&&a.jsx("ul",{className:"mt-1.5 list-[circle] space-y-1.5 pl-6",children:r.sub.map((d,g)=>a.jsx("li",{children:a.jsx(l,{text:d})},g))})]},s))},`ul-${i}`));continue}switch(t.type){case"title":case"sign":break;case"subtitle":e.push(a.jsx("p",{className:"mb-1 text-dark-green/70",children:t.text},i));break;case"part":e.push(a.jsx("h2",{className:"mt-14 mb-2 border-b border-dark-green/10 pb-3 text-2xl font-bold text-dark-green",children:t.text},i));break;case"h2":e.push(a.jsx("h2",{id:I(t.text),className:"mt-10 mb-3 scroll-mt-20 text-xl font-bold text-dark-green",children:t.text},i));break;case"h3":e.push(a.jsx("h3",{className:"mt-6 mb-2 text-lg font-semibold text-dark-green",children:t.text},i));break;case"p":e.push(a.jsx("p",{className:"mb-4",children:a.jsx(l,{text:t.text})},i));break;case"table":e.push(a.jsx("div",{className:"mb-6 overflow-x-auto rounded-lg border border-dark-green/10",children:a.jsxs("table",{className:"w-full text-left text-base",children:[a.jsx("thead",{className:"bg-pale-green",children:a.jsx("tr",{children:t.rows[0].map((n,r)=>a.jsx("th",{scope:"col",className:"p-3 font-semibold text-dark-green",children:n},r))})}),a.jsx("tbody",{children:t.rows.slice(1).map((n,r)=>a.jsx("tr",{className:"border-t border-dark-green/10 align-top",children:n.map((s,d)=>a.jsx("td",{className:"p-3",children:a.jsx(l,{text:s})},d))},r))})]})},i));break}}return e}function q({source:o,pdf:e}){const i=P(o),t=i.find(n=>n.type==="title");return a.jsx("main",{className:"bg-white px-4 py-12 sm:py-16",children:a.jsxs("article",{className:"mx-auto max-w-[72ch] text-base leading-relaxed text-dark-green/90",children:[a.jsx("h1",{className:"mb-4 text-3xl font-bold tracking-tight text-dark-green sm:text-4xl",children:t&&"text"in t?t.text:""}),L(i),a.jsx("p",{className:"mt-12 border-t border-dark-green/10 pt-6",children:a.jsxs("a",{href:e,download:!0,className:"inline-flex items-center gap-2 rounded-md border border-primary/30 px-4 py-2.5 font-medium text-primary hover:bg-pale-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",children:[a.jsx(C,{className:"h-4 w-4","aria-hidden":!0}),"Scarica il PDF"]})})]})})}const D=`# Informativa sulla privacy
@Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 ("GDPR") e del D.Lgs. 196/2003 ("Codice Privacy")
@Ultimo aggiornamento: 13 novembre 2026

## 1. Titolare del trattamento
Il titolare del trattamento è **Come Butta S.r.l.** ("Come Butta", "noi"), con sede legale in Corso Ventidue Marzo 30, 20135 Milano (MI), codice fiscale, partita IVA e n. di iscrizione al Registro delle Imprese di Milano Monza Brianza Lodi 14941800964, REA MI-2816931, capitale sociale Euro 10.000,00 interamente versato.
Per qualsiasi richiesta relativa al trattamento dei dati personali puoi scriverci a:
- e-mail: info@comebutta.com
- PEC: amm.comebutta.srl@pec.it
- posta: Come Butta S.r.l., Corso Ventidue Marzo 30, 20135 Milano
Come Butta non ha nominato un Responsabile della protezione dei dati (DPO), non ricorrendo i presupposti dell'art. 37 GDPR.

## 2. A chi si rivolge questa informativa
La presente informativa riguarda i dati personali trattati da Come Butta:
- (a) quando visiti il sito www.comebutta.com (il "Sito");
- (b) quando ci contatti (via e-mail, telefono o altri canali);
- (c) nella gestione dei rapporti precontrattuali e contrattuali con i nostri clienti e fornitori, inclusi i relativi referenti;
- (d) quando utilizzi la web-app Come Butta disponibile su app.comebutta.com (la "Piattaforma").

### 2.1 Dati trattati nella Piattaforma per conto dei clienti
La Piattaforma è concessa in licenza a imprese e organizzazioni (i "Clienti", ad esempio proprietari o gestori di immobili) che la usano per monitorare i rifiuti dei propri immobili. Per i dati personali inseriti o generati nella Piattaforma nell'ambito di tale utilizzo (es. dati degli utenti invitati dal Cliente, registrazioni dei ritiri), **il titolare del trattamento è il Cliente**, mentre Come Butta agisce quale **responsabile del trattamento** ai sensi dell'art. 28 GDPR, sulla base di un apposito accordo e secondo le istruzioni del Cliente.
Se utilizzi la Piattaforma perché sei dipendente, collaboratore o fornitore di un Cliente, per conoscere in dettaglio finalità, basi giuridiche e tempi di conservazione puoi fare riferimento all'informativa del Cliente e rivolgerti a quest'ultimo per esercitare i tuoi diritti. Se ti rivolgi a noi, inoltreremo prontamente la richiesta al Cliente interessato e lo assisteremo nel darvi riscontro. Le informazioni riportate di seguito sulla Piattaforma sono fornite per trasparenza.

## 3. Quali dati trattiamo
### 3.1 Dati di navigazione
I sistemi informatici che gestiscono il Sito e la Piattaforma acquisiscono, nel normale funzionamento, alcuni dati la cui trasmissione è implicita nell'uso dei protocolli Internet: indirizzo IP, data e ora della richiesta, risorsa richiesta, codice di risposta, tipo di browser e sistema operativo. Sono usati per garantire il funzionamento e la sicurezza dei servizi e per accertare eventuali responsabilità in caso di illeciti.
### 3.2 Dati forniti volontariamente
Quando ci scrivi o ci contatti trattiamo i dati che ci comunichi: nome, cognome, indirizzo e-mail, numero di telefono, società di appartenenza, ruolo e il contenuto del messaggio.
### 3.3 Dati di clienti, fornitori e referenti
Dati identificativi e di contatto dei referenti (nome, cognome, ruolo, e-mail, telefono, PEC), dati societari, fiscali e di fatturazione, dati di pagamento (es. coordinate bancarie) e corrispondenza relativa al rapporto.
### 3.4 Dati trattati nella Piattaforma
- **Dati dell'account**: nome, cognome, indirizzo e-mail, credenziali di accesso (la password è gestita in forma cifrata dal servizio di autenticazione e non è mai visibile a Come Butta), ruolo e permessi, immobili e aree assegnati, preferenze di notifica.
- **Dati di utilizzo**: registrazioni effettuate (es. livelli di riempimento dei contenitori, data e ora dei ritiri), con l'indicazione dell'utente che le ha inserite, modificate o approvate, e log tecnici di accesso e di sicurezza.
- **Foto degli oggetti fuori formato**, se la funzione è attivata dal Cliente: l'immagine, l'eventuale nota, data e ora dello scatto e l'utente che l'ha scattata. Le foto servono a documentare oggetti che non possono essere conferiti nei contenitori (es. arredi o apparecchiature) e non dovrebbero ritrarre persone; tuttavia possono comparire in modo occasionale persone, volti, targhe o altri elementi che consentono di identificare una persona.
- **Dati relativi agli immobili**: anagrafica degli immobili, contenitori e calendari di raccolta; di norma non sono dati personali, salvo quando riferibili a persone fisiche (es. referenti o ditte individuali).
La Piattaforma non è progettata per trattare categorie particolari di dati (art. 9 GDPR) né dati relativi a condanne penali e reati (art. 10 GDPR): ti chiediamo di non inserirli.
### 3.5 Fotocamera del dispositivo e foto
La Piattaforma può chiederti l'accesso alla fotocamera del dispositivo. Il permesso è gestito dal browser e puoi revocarlo in qualsiasi momento.
- **Lettura dei QR code**: l'immagine è elaborata solo sul tuo dispositivo per decodificare il QR code; nessuna immagine o video viene registrato o inviato ai nostri server.
- **Foto degli oggetti fuori formato**: se la funzione è attiva, le foto che scatti vengono ridotte e private dei metadati (compresa la posizione) direttamente sul dispositivo, restano sul dispositivo fino alla sincronizzazione e sono poi salvate in forma cifrata su server nell'Unione Europea. Sono visibili solo agli utenti del Cliente con ruolo di gestione, tramite collegamenti temporanei.
Quando scatti una foto inquadra solo l'oggetto ed evita persone, volti, targhe e documenti; se compare qualcuno, ripeti la foto. Sulle foto non effettuiamo riconoscimento facciale né altre elaborazioni biometriche: le immagini non sono quindi trattate come dati biometrici ai sensi dell'art. 9 GDPR.

## 4. Finalità e basi giuridiche
|Finalità|Base giuridica (art. 6 GDPR)
|Garantire il funzionamento, la sicurezza e la prevenzione di abusi del Sito e della Piattaforma|Legittimo interesse di Come Butta (art. 6.1.f)
|Rispondere alle tue richieste di informazioni e preparare offerte|Esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b)
|Stipulare ed eseguire i contratti con clienti e fornitori, gestire fatturazione, pagamenti e assistenza|Esecuzione del contratto (art. 6.1.b); per i referenti di persone giuridiche, legittimo interesse alla gestione del rapporto (art. 6.1.f)
|Adempiere a obblighi di legge (es. fiscali e contabili) e a richieste delle autorità|Obbligo legale (art. 6.1.c)
|Erogare la Piattaforma ai Clienti (creazione account, accessi, notifiche e e-mail di servizio, assistenza)|Trattamento svolto per conto del Cliente titolare (art. 28 GDPR), sulla base giuridica individuata da quest'ultimo
|Accertare, esercitare o difendere un diritto in sede giudiziale o stragiudiziale|Legittimo interesse di Come Butta (art. 6.1.f)
|Misurare l'utilizzo del Sito e svolgere attività di marketing e pubblicità online (es. Google Analytics, Google Ads), se e quando attivate|Consenso (art. 6.1.a), revocabile in qualsiasi momento
Come Butta può inoltre elaborare statistiche e studi partendo dai dati della Piattaforma solo dopo averli resi **anonimi**, cioè in modo tale da non consentire in alcun modo la re-identificazione degli interessati; i dati anonimi non sono dati personali e non sono ceduti a terzi.

## 5. Natura del conferimento
Il conferimento dei dati di navigazione è necessario per l'uso del Sito e della Piattaforma. Il conferimento dei dati per le finalità contrattuali e di legge è necessario: in mancanza non potremo rispondere alle richieste, stipulare o eseguire il contratto o attivare l'account. Il consenso per finalità di statistica e marketing, quando richiesto, è facoltativo e il suo mancato rilascio non pregiudica l'uso dei servizi.

## 6. Modalità del trattamento e sicurezza
I dati sono trattati con strumenti elettronici, da personale autorizzato e vincolato alla riservatezza, adottando misure tecniche e organizzative adeguate al rischio (art. 32 GDPR), tra cui: cifratura delle comunicazioni (HTTPS/TLS), cifratura dei dati a riposo, autenticazione con credenziali personali, controllo degli accessi per ruolo, backup e registrazione degli accessi. Non effettuiamo processi decisionali interamente automatizzati, compresa la profilazione, che producano effetti giuridici o analogamente significativi sugli interessati (art. 22 GDPR). Le stime dei quantitativi di rifiuti elaborate dalla Piattaforma riguardano gli immobili e non costituiscono decisioni sulle persone.

## 7. Destinatari dei dati
I dati possono essere comunicati, nei limiti necessari, a:
- **fornitori che trattano dati per nostro conto** in qualità di responsabili o sub-responsabili del trattamento, vincolati da accordi ai sensi dell'art. 28 GDPR:
-- Amazon Web Services EMEA SARL (Lussemburgo): infrastruttura cloud, hosting, database, autenticazione degli utenti; i dati sono conservati nella region AWS Europa (Milano);
-- MailerSend: invio delle e-mail di servizio (es. inviti, recupero password, notifiche);
-- Google Ireland Limited (Google Analytics, Google Ads), solo se e quando attivati e previo tuo consenso;
- consulenti e professionisti (es. commercialista, legali), istituti bancari, autorità pubbliche quando previsto dalla legge;
- per i dati della Piattaforma, il Cliente titolare del trattamento e i soggetti da questo autorizzati.
I dati non sono diffusi né venduti. L'elenco aggiornato dei fornitori è disponibile su richiesta scrivendo a info@comebutta.com.

## 8. Trasferimenti al di fuori dello Spazio Economico Europeo
I dati sono conservati su server situati nell'Unione Europea. Alcuni fornitori appartengono a gruppi con sede al di fuori dello Spazio Economico Europeo (es. Stati Uniti) e potrebbero accedere ai dati, ad esempio per finalità di assistenza tecnica o per l'erogazione della rete di distribuzione dei contenuti (CDN). In tal caso il trasferimento avviene solo in presenza di garanzie adeguate ai sensi degli artt. 44 e seguenti GDPR, quali una decisione di adeguatezza della Commissione Europea (incluso l'EU-U.S. Data Privacy Framework, per i fornitori certificati) o le Clausole Contrattuali Standard approvate dalla Commissione. Per i dati della Piattaforma, i trasferimenti avvengono solo nei limiti autorizzati dal Cliente. Puoi chiedere copia delle garanzie adottate scrivendo a info@comebutta.com.

## 9. Per quanto tempo conserviamo i dati
|Dati|Periodo di conservazione
|Dati di navigazione e log tecnici|Fino a 12 mesi, salvo necessità di accertamento di illeciti
|Richieste di contatto non seguite da un contratto|24 mesi dall'ultimo contatto
|Dati contrattuali, contabili e fiscali|Per la durata del contratto e 10 anni dalla sua cessazione (art. 2220 c.c.), o il maggior termine richiesto dalla legge o necessario per la tutela dei diritti
|Foto degli oggetti fuori formato|12 mesi dallo scatto e comunque non oltre la cessazione del contratto con il Cliente
|Dati della Piattaforma (account e registrazioni)|Per la durata del contratto con il Cliente; alla cessazione sono restituiti al Cliente e cancellati secondo quanto previsto dal contratto e dalle istruzioni del Cliente, salvo obblighi di legge
|Dati trattati con il tuo consenso (statistica e marketing)|Fino alla revoca del consenso e comunque non oltre i termini indicati nella cookie policy
Decorsi tali periodi i dati sono cancellati o resi anonimi.

## 10. Cookie e tecnologie simili
Alla data di questa informativa il Sito non utilizza cookie di profilazione né strumenti di analisi o pubblicità di terze parti.
La Piattaforma utilizza esclusivamente strumenti tecnici necessari al suo funzionamento, tra cui la memoria locale del browser (local storage) per mantenere la sessione di accesso, salvare le preferenze di visualizzazione e conservare temporaneamente le registrazioni effettuate senza connessione Internet fino alla loro sincronizzazione. Questi strumenti non richiedono il consenso (art. 122 Codice Privacy) e i relativi dati restano sul tuo dispositivo finché non effettui il logout o cancelli i dati del browser.
Qualora in futuro venissero introdotti strumenti di analisi o di marketing (es. Google Analytics, Google Ads), questi saranno attivati solo previo consenso raccolto tramite apposito banner, che ti consentirà di accettare, rifiutare o personalizzare le tue scelte, e la presente informativa sarà aggiornata con una specifica cookie policy.

## 11. I tuoi diritti
Nei limiti previsti dal GDPR hai diritto di:
- accedere ai tuoi dati e ottenerne copia (art. 15);
- ottenerne la rettifica o l'integrazione (art. 16);
- ottenerne la cancellazione (art. 17);
- ottenere la limitazione del trattamento (art. 18);
- ricevere i dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e trasmetterli a un altro titolare (portabilità, art. 20);
- **opporti in qualsiasi momento** al trattamento basato sul legittimo interesse, per motivi connessi alla tua situazione particolare (art. 21);
- revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento effettuato prima della revoca (art. 7.3).
Puoi esercitare i diritti scrivendo a info@comebutta.com o alla PEC amm.comebutta.srl@pec.it. Ti risponderemo senza ingiustificato ritardo e comunque entro un mese dalla richiesta, prorogabile di due mesi nei casi più complessi. Potremo chiederti informazioni utili a verificare la tua identità.
Se ritieni che il trattamento violi il GDPR, hai diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it) o all'autorità di controllo dello Stato UE in cui risiedi o lavori.

## 12. Minori
I servizi di Come Butta sono rivolti a imprese e professionisti e non sono destinati a minori di 18 anni.

## 13. Modifiche
Possiamo aggiornare questa informativa, ad esempio in caso di modifiche normative o dei servizi offerti. La versione in vigore è sempre pubblicata sul Sito con la data dell'ultimo aggiornamento; in caso di modifiche rilevanti ne daremo comunicazione agli utenti della Piattaforma.
`,w=`# Termini e Condizioni Generali
@Condizioni generali di licenza e condizioni d'uso della piattaforma Come Butta
@Ultimo aggiornamento: 13 novembre 2026

## Parte I – Disposizioni generali

## 1. Chi siamo
La piattaforma è fornita da **Come Butta S.r.l.**, con sede legale in Corso Ventidue Marzo 30, 20135 Milano (MI), codice fiscale, partita IVA e n. di iscrizione al Registro delle Imprese di Milano Monza Brianza Lodi 14941800964, REA MI-2816931, capitale sociale Euro 10.000,00 interamente versato, PEC amm.comebutta.srl@pec.it, e-mail info@comebutta.com ("Come Butta").

## 2. Definizioni
- **Piattaforma**: la web-app "Come Butta" per il monitoraggio e la rendicontazione dei rifiuti degli immobili, accessibile tramite browser all'indirizzo app.comebutta.com o ad altro indirizzo comunicato da Come Butta.
- **Cliente**: l'impresa, l'ente o il professionista che ottiene da Come Butta la licenza d'uso della Piattaforma.
- **Utente**: la persona fisica autorizzata dal Cliente ad accedere alla Piattaforma (es. amministratori, supervisori, operatori incaricati della raccolta dati).
- **Ordine**: il contratto di licenza, l'offerta accettata o altro documento sottoscritto dal Cliente e da Come Butta che indica, tra l'altro, gli Immobili, la durata e i corrispettivi.
- **Immobile**: ciascun immobile del Cliente attivato nella Piattaforma.
- **Dati del Cliente**: i dati e le informazioni inseriti, generati o elaborati tramite la Piattaforma nell'ambito del suo utilizzo da parte del Cliente e degli Utenti.
- **Credenziali**: le credenziali personali di accesso alla Piattaforma.
- **Condizioni**: i presenti Termini e Condizioni Generali.

## 3. Ambito di applicazione e prevalenza
3.1 Le presenti Condizioni disciplinano: (i) nella Parte II, la licenza d'uso della Piattaforma tra Come Butta e il Cliente; (ii) nella Parte III, le regole di utilizzo della Piattaforma da parte degli Utenti.
3.2 Le Condizioni formano parte integrante di ogni Ordine. In caso di contrasto, le previsioni dell'Ordine e degli eventuali allegati negoziati tra le parti prevalgono sulle presenti Condizioni.
3.3 La Piattaforma è destinata esclusivamente a utenti professionali. Il Cliente dichiara di agire nell'ambito della propria attività imprenditoriale o professionale; non trovano pertanto applicazione le disposizioni del Codice del Consumo (D.Lgs. 206/2005).

## Parte II – Condizioni generali di licenza

## 4. Oggetto della licenza
4.1 Come Butta concede al Cliente, che accetta, una licenza d'uso non esclusiva, non trasferibile e non sublicenziabile della Piattaforma, in modalità software as a service, per la durata e con riferimento agli Immobili indicati nell'Ordine.
4.2 La Piattaforma consente di configurare lo stato di fatto di ciascun Immobile (contenitori, volumetrie, frazioni merceologiche, calendari di raccolta, responsabili), di registrare il livello di riempimento dei contenitori a ogni ritiro, anche in assenza di connessione, e di ottenere reportistiche, indicatori ed esportazioni dei dati in formato strutturato.
4.3 La licenza non comprende la fornitura di dispositivi fisici né servizi di consulenza, che potranno essere oggetto di accordi separati.
4.4 Alcune funzionalità sono facoltative e vengono attivate solo su richiesta del Cliente, tra cui la possibilità per gli Utenti di fotografare gli oggetti fuori formato (es. arredi o apparecchiature non conferibili nei contenitori). Le foto hanno finalità solo informativa e non incidono sulle stime di cui all'art. 8.

## 5. Attivazione degli Immobili
5.1 L'attivazione di ciascun Immobile avviene sulla base dei dati forniti dal Cliente (es. indirizzo, numero e volumetria dei contenitori, frazioni presenti, calendario dei passaggi di raccolta).
5.2 Il Cliente può richiedere per iscritto l'attivazione di ulteriori Immobili. Come Butta conferma la richiesta o chiede le integrazioni necessarie e rende l'Immobile operativo.
5.3 Il Cliente è responsabile della correttezza e dell'aggiornamento dei dati forniti per la configurazione e si impegna ad aggiornare lo stato di fatto in caso di variazioni (es. numero o volumetria dei contenitori).

## 6. Durata e rinnovo
6.1 La licenza ha la durata indicata nell'Ordine.
6.2 Salvo diversa previsione dell'Ordine, alla scadenza la licenza si rinnova tacitamente per periodi successivi di 12 (dodici) mesi ciascuno, salvo disdetta comunicata per iscritto da una delle parti con un preavviso di almeno 90 (novanta) giorni rispetto alla scadenza del periodo in corso.

## 7. Corrispettivi e pagamenti
7.1 I corrispettivi, le eventuali quote di acconto e saldo e le relative scadenze sono indicati nell'Ordine e si intendono al netto dell'IVA e di ogni altro onere di legge.
7.2 Salvo diversa previsione dell'Ordine, i pagamenti sono effettuati tramite bonifico bancario entro 30 (trenta) giorni dalla data di ricevimento della fattura, sul conto corrente indicato da Come Butta.
7.3 In caso di ritardato pagamento sono dovuti gli interessi di mora ai sensi del D.Lgs. 231/2002. Decorsi inutilmente 15 (quindici) giorni da un sollecito scritto, Come Butta potrà sospendere l'accesso alla Piattaforma fino al pagamento, fermo il diritto di risolvere il contratto ai sensi dell'art. 19.
7.4 I corrispettivi per i periodi di rinnovo sono quelli indicati nell'Ordine. Eventuali variazioni dei corrispettivi per i periodi successivi saranno comunicate per iscritto con almeno 120 (centoventi) giorni di preavviso rispetto alla scadenza, così da consentire al Cliente di esercitare la disdetta.

## 8. Natura dei dati elaborati
8.1 Il monitoraggio effettuato tramite la Piattaforma avviene **su base stimata**. Il peso dei rifiuti è calcolato incrociando: (i) lo stato di fatto configurato per ciascun Immobile (numero, tipologia e volume nominale dei contenitori); (ii) i livelli di riempimento dichiarati dagli Utenti a ogni ritiro, selezionati tra livelli predefiniti (anche superiori al 100% per tenere conto di accumuli o conferimenti eccedenti la capienza nominale); (iii) coefficienti di densità media per ciascuna frazione, personalizzabili in sede di configurazione.
8.2 I dati generati dalla Piattaforma sono stime basate su informazioni dichiarate dal Cliente e dagli Utenti, hanno valore indicativo ai fini del monitoraggio gestionale e della rendicontazione interna, **non hanno valore certificativo** e non sostituiscono le pesature ufficiali a destino, i documenti di trasporto, i formulari o gli altri documenti previsti dalla normativa ambientale. Tale precisazione è riportata anche nei file di esportazione.
8.3 L'accuratezza delle stime dipende dalla correttezza dei dati inseriti; Come Butta non risponde di errori derivanti da dati incompleti, inesatti o non aggiornati forniti dal Cliente o dagli Utenti.

## 9. Ruolo di Come Butta
Come Butta opera esclusivamente quale fornitore tecnologico che concede in licenza la Piattaforma. Come Butta non svolge attività di raccolta, trasporto, pesatura, smaltimento, recupero, commercio o intermediazione di rifiuti, non assume il ruolo di produttore, detentore o gestore dei rifiuti degli Immobili e non emette documenti aventi valore legale. Restano a carico del Cliente gli obblighi previsti dalla normativa ambientale.

## 10. Livelli di servizio e assistenza
10.1 Come Butta si impegna a garantire una disponibilità della Piattaforma pari almeno al 99% (novantanove per cento) su base mensile, salvo diverso livello indicato nell'Ordine. Non sono computati i periodi di indisponibilità dovuti a manutenzione programmata (comunicata con ragionevole preavviso e, ove possibile, svolta in orari di minore utilizzo), interventi urgenti di sicurezza, forza maggiore, malfunzionamenti di reti o servizi di terzi non sotto il controllo di Come Butta o altre cause non imputabili a Come Butta.
10.2 Come Butta fornisce assistenza tramite e-mail all'indirizzo info@comebutta.com, nonché in remoto e telefonicamente, nei giorni lavorativi e in orario d'ufficio.
10.3 Come Butta è l'unica autorizzata ad accedere agli ambienti di sviluppo, ai componenti applicativi e al codice sorgente della Piattaforma.

## 11. Aggiornamenti ed evoluzione
11.1 Come Butta mantiene la Piattaforma in grado di svolgere le funzionalità descritte e applica, senza costi aggiuntivi e senza necessità di interventi del Cliente, gli aggiornamenti tecnici, di sicurezza e quelli resi necessari da modifiche normative.
11.2 La Piattaforma può evolvere nel tempo. Come Butta può modificarne funzionalità e interfaccia, purché le modifiche non riducano in modo sostanziale le funzionalità essenziali oggetto della licenza. Le funzionalità ulteriori rispetto a quelle descritte nell'Ordine non costituiscono obbligazioni di Come Butta.

## 12. Proprietà intellettuale
12.1 La Piattaforma, il relativo software, codice sorgente, banche dati, documentazione, marchi, loghi e ogni altro elemento sono e restano di esclusiva proprietà di Come Butta o dei suoi licenzianti. Nessun diritto è trasferito al Cliente o agli Utenti oltre alla licenza d'uso di cui all'art. 4.
12.2 Salvo quanto inderogabilmente consentito dalla legge (artt. 64-ter e 64-quater L. 633/1941), è vietato: copiare, modificare, tradurre, decompilare o disassemblare la Piattaforma; incorporarla in altri software; distribuirla, cederla, sublicenziarla o consentirne l'uso a terzi, a titolo gratuito od oneroso; comunicare a terzi informazioni tecniche sulla Piattaforma o usarle per finalità diverse dal contratto, in particolare per sviluppare prodotti concorrenti.
12.3 Il Cliente risponde del rispetto di tali obblighi da parte dei propri dipendenti, collaboratori e Utenti. Gli obblighi del presente articolo sopravvivono alla cessazione del contratto.
12.4 Come Butta si impegna a manlevare e tenere indenne il Cliente da pretese di terzi che lamentino la violazione di diritti di proprietà intellettuale connessa all'uso conforme della Piattaforma, a condizione che il Cliente ne dia tempestiva comunicazione scritta e consenta a Come Butta di gestirne la difesa.

## 13. Dati del Cliente
13.1 I Dati del Cliente restano di esclusiva titolarità del Cliente. Come Butta li tratta esclusivamente nei limiti e per le finalità necessarie all'esecuzione del contratto.
13.2 Come Butta può utilizzare i Dati del Cliente, in forma esclusivamente anonimizzata e aggregata (senza possibilità di re-identificazione degli interessati né del Cliente), per finalità statistiche, di studio e di miglioramento dei propri servizi. Tali dati non sono ceduti né comunicati a terzi in forma riconducibile al Cliente.
13.3 Su richiesta del Cliente, Come Butta esporta e fornisce, senza costi aggiuntivi, i Dati del Cliente in formato strutturato, di uso comune e leggibile da dispositivo automatico (es. CSV o XLSX), idoneo alla migrazione verso i sistemi del Cliente o di terzi da questo indicati.
13.4 Il Cliente garantisce di avere il diritto di inserire nella Piattaforma i dati che vi carica e manleva Come Butta da pretese di terzi derivanti dal contenuto di tali dati.

## 14. Protezione dei dati personali
14.1 Per i dati personali trattati nella Piattaforma per conto del Cliente, il Cliente è titolare del trattamento e Come Butta è responsabile del trattamento ai sensi dell'art. 28 GDPR. Il relativo trattamento è disciplinato da un accordo sul trattamento dei dati (DPA) allegato all'Ordine o, in mancanza, dalle clausole del presente articolo.
14.2 Come Butta: tratta i dati solo su istruzione documentata del Cliente; vincola alla riservatezza le persone autorizzate; adotta misure di sicurezza adeguate ai sensi dell'art. 32 GDPR; assiste il Cliente nel riscontro alle richieste degli interessati e negli adempimenti di cui agli artt. 32-36 GDPR; notifica al Cliente le violazioni di dati personali senza ingiustificato ritardo e comunque entro 48 ore dalla loro conoscenza; conserva i dati nello Spazio Economico Europeo, salvo diversa autorizzazione del Cliente; mette a disposizione le informazioni necessarie a dimostrare il rispetto degli obblighi e consente attività di audit con ragionevole preavviso.
14.3 Il Cliente autorizza in via generale Come Butta ad avvalersi di sub-responsabili. Alla data delle presenti Condizioni i sub-responsabili sono: Amazon Web Services EMEA SARL (infrastruttura cloud, hosting e autenticazione, region UE – Milano) e MailerSend (invio di e-mail di servizio). Come Butta informa il Cliente di ogni aggiunta o sostituzione, consentendogli di opporsi per motivi ragionevoli.
14.4 Alla cessazione del contratto, Come Butta restituisce i dati personali al Cliente e ne cancella le copie entro i termini previsti dall'Ordine o, in mancanza, entro 30 (trenta) giorni, salvo obblighi di conservazione di legge.
14.5 Il Cliente è responsabile di fornire agli Utenti e agli altri interessati l'informativa sul trattamento e di individuare un'idonea base giuridica. Per i dati di cui Come Butta è titolare si rinvia all'Informativa sulla privacy pubblicata su www.comebutta.com.
14.6 Se il Cliente attiva la funzione foto, le immagini possono ritrarre in modo occasionale persone, volti, targhe o altri elementi che consentono di identificare persone fisiche. In tal caso: (i) l'attivazione costituisce istruzione documentata del Cliente ai sensi dell'art. 28 GDPR; (ii) il Cliente informa gli interessati (es. personale, conduttori e occupanti degli Immobili), anche mediante avvisi nelle aree rifiuti; (iii) Come Butta rimuove sul dispositivo i metadati delle foto, compresa la posizione, non effettua riconoscimento facciale né altre elaborazioni biometriche e rende le foto visibili solo agli Utenti con ruolo di gestione; (iv) le foto sono conservate per 12 (dodici) mesi dallo scatto e comunque cancellate alla cessazione del contratto ai sensi dell'art. 14.4.

## 15. Riservatezza
Ciascuna parte si impegna a mantenere riservate le informazioni dell'altra parte di cui venga a conoscenza in esecuzione del contratto e a non utilizzarle per finalità diverse, per tutta la durata del contratto e per i 3 (tre) anni successivi, salvo che le informazioni siano o divengano di pubblico dominio senza sua colpa o debbano essere comunicate per obbligo di legge o ordine dell'autorità.

## 16. Garanzie
16.1 Come Butta garantisce che la Piattaforma è in grado di eseguire le operazioni descritte nell'Ordine e nella relativa documentazione, a condizione che sia utilizzata correttamente, tramite dispositivi, browser e connessioni adeguati, e in conformità alle presenti Condizioni.
16.2 Fuori da quanto espressamente previsto, la Piattaforma è fornita nello stato in cui si trova; Come Butta non garantisce che sia priva di errori o che funzioni senza interruzioni, né che i risultati delle stime siano idonei a scopi diversi da quelli di cui all'art. 8.
16.3 Come Butta si adopera con diligenza professionale per assicurare l'interoperabilità della Piattaforma con i software di terzi indicati nell'Ordine, ferma la necessaria collaborazione del Cliente e dei fornitori terzi; Come Butta non risponde di malfunzionamenti imputabili ai software o servizi di terzi.

## 17. Limitazione di responsabilità
17.1 Salvo i casi di dolo o colpa grave e gli altri casi in cui la legge non consente limitazioni (art. 1229 c.c.), Come Butta non risponde di danni indiretti o consequenziali, quali perdita di profitto, di fatturato, di opportunità commerciali o di dati non imputabile a Come Butta.
17.2 Negli stessi limiti, la responsabilità complessiva di Come Butta per qualsiasi danno derivante dal contratto non potrà eccedere l'importo dei corrispettivi effettivamente pagati dal Cliente nei 12 (dodici) mesi precedenti l'evento che ha causato il danno.
17.3 Come Butta non risponde di danni derivanti da: dati inesatti o incompleti forniti dal Cliente o dagli Utenti; uso della Piattaforma non conforme alle presenti Condizioni; custodia negligente delle Credenziali; malfunzionamenti di dispositivi, reti o servizi di terzi; forza maggiore.

## 18. Sospensione
Come Butta può sospendere, in tutto o in parte, l'accesso alla Piattaforma, dandone comunicazione al Cliente: (i) in caso di mancato pagamento ai sensi dell'art. 7.3; (ii) in caso di uso illecito o in violazione degli artt. 12 o 22, o di rischio concreto per la sicurezza della Piattaforma o dei dati; (iii) su ordine dell'autorità. La sospensione è limitata al tempo strettamente necessario.

## 19. Risoluzione e recesso
19.1 Ciascuna parte può risolvere il contratto ai sensi dell'art. 1456 c.c., mediante comunicazione scritta, in caso di grave inadempimento dell'altra parte. Costituiscono in ogni caso grave inadempimento del Cliente il mancato pagamento dei corrispettivi protratto per oltre 30 (trenta) giorni dalla scadenza e la violazione dell'art. 12; costituisce grave inadempimento di ciascuna parte la violazione dell'art. 25.
19.2 Fuori dai casi previsti dalla legge o dall'Ordine, il Cliente non può recedere dal contratto prima della scadenza del periodo di licenza in corso, fermo il diritto di disdetta di cui all'art. 6.2.

## 20. Effetti della cessazione
20.1 Alla cessazione del contratto per qualsiasi causa la licenza viene meno e l'accesso alla Piattaforma è disattivato, salvo quanto previsto ai paragrafi seguenti.
20.2 Per un periodo di 30 (trenta) giorni dalla cessazione, o per il diverso periodo previsto dall'Ordine, Come Butta garantisce al Cliente la possibilità di esportare i Dati del Cliente e un supporto ragionevole alle attività di migrazione; le attività di supporto ulteriori all'esportazione standard sono remunerate a tariffa oraria preventivamente concordata.
20.3 Decorso tale periodo, Come Butta cancella i Dati del Cliente secondo quanto previsto dall'art. 14.4.
20.4 I corrispettivi già maturati restano dovuti. Sopravvivono alla cessazione gli artt. 12, 13, 15, 17, 20 e 33.

## 21. Uso del nome del Cliente
Come Butta non utilizza il nome, i marchi o i segni distintivi del Cliente, né fa riferimento al contratto, per finalità promozionali o di comunicazione esterna senza la preventiva autorizzazione scritta del Cliente.

## 22. Obblighi del Cliente
Il Cliente si impegna a: (i) utilizzare la Piattaforma nel rispetto della legge e delle presenti Condizioni; (ii) individuare gli Utenti autorizzati e gestirne tempestivamente l'abilitazione e la disabilitazione; (iii) far rispettare agli Utenti la Parte III delle presenti Condizioni, rispondendo del loro operato; (iv) fornire la collaborazione necessaria alla configurazione e al corretto funzionamento della Piattaforma.

## 23. Comunicazioni
Le comunicazioni formali relative al contratto sono inviate per iscritto mediante PEC o lettera raccomandata con ricevuta di ritorno agli indirizzi indicati nell'Ordine; per Come Butta: PEC amm.comebutta.srl@pec.it. Le comunicazioni operative possono essere scambiate via e-mail.

## 24. Forza maggiore
Nessuna parte è responsabile per inadempimenti dovuti a eventi al di fuori del proprio ragionevole controllo (es. calamità naturali, atti dell'autorità, guerre, pandemie, interruzioni generalizzate di reti o servizi cloud), per la durata dell'evento. Restano fermi gli obblighi di pagamento già maturati.

## 25. Etica e compliance
Le parti si impegnano a rispettare la normativa applicabile in materia di anticorruzione, antiriciclaggio, sanzioni internazionali e controllo delle esportazioni, e a fornirsi reciprocamente le informazioni ragionevolmente richieste per dimostrarne il rispetto.

## Parte III – Condizioni d'uso per gli Utenti

## 26. Accesso e Credenziali
26.1 L'accesso alla Piattaforma è riservato agli Utenti abilitati dal Cliente, che ricevono un invito all'indirizzo e-mail indicato dal Cliente. I permessi di ciascun Utente (es. amministratore, supervisore, operatore) e gli Immobili o le aree accessibili sono stabiliti dal Cliente.
26.2 Le Credenziali sono personali e non possono essere condivise o cedute. L'Utente si impegna a custodirle con cura e riservatezza, a scegliere una password sicura e a comunicare immediatamente al Cliente e a Come Butta (info@comebutta.com) qualsiasi uso non autorizzato o sospetto di compromissione.
26.3 Le attività svolte con le Credenziali di un Utente si presumono compiute da tale Utente.

## 27. Uso consentito e divieti
27.1 L'Utente utilizza la Piattaforma esclusivamente per le attività affidategli dal Cliente e si impegna a inserire dati veritieri, accurati e aggiornati, in particolare i livelli di riempimento effettivamente rilevati.
27.2 È vietato: accedere o tentare di accedere ad aree, dati o funzionalità per cui non si è autorizzati; aggirare le misure di sicurezza; introdurre virus o codice dannoso; effettuare test di carico o di vulnerabilità, estrazioni automatizzate (scraping) o attività che possano sovraccaricare la Piattaforma; decompilare o tentare di ricavare il codice sorgente; inserire contenuti illeciti, offensivi o dati personali non necessari, in particolare categorie particolari di dati; utilizzare la Piattaforma per finalità diverse da quelle previste.
27.3 Quando fotografa un oggetto fuori formato, l'Utente inquadra solo l'oggetto ed evita di riprendere persone, volti, targhe, documenti o altri elementi che consentono di identificare persone fisiche; se compaiono, ripete la foto prima dell'invio. Nella nota alla foto non inserisce dati personali.

## 28. Funzionamento offline e fotocamera
28.1 In caso di connessione assente o debole, le registrazioni possono essere salvate temporaneamente sul dispositivo e vengono inviate alla Piattaforma al ripristino della connessione. Fino alla sincronizzazione i dati risiedono solo sul dispositivo: l'Utente non deve cancellare i dati del browser né effettuare il logout prima di aver verificato l'avvenuto invio, poiché le registrazioni non ancora sincronizzate andrebbero perse.
28.2 Per la lettura dei QR code dei contenitori e, se attiva, per le foto degli oggetti fuori formato, la Piattaforma può richiedere l'accesso alla fotocamera del dispositivo. Le immagini usate per leggere i QR code sono elaborate solo sul dispositivo e non vengono registrate né trasmesse. Le foto degli oggetti fuori formato sono ridotte e private dei metadati sul dispositivo, vi restano fino alla sincronizzazione e sono poi salvate nella Piattaforma.
28.3 L'Utente è responsabile dell'idoneità e della sicurezza del dispositivo e del browser utilizzati, che devono essere aggiornati.

## 29. Sospensione dell'account
Come Butta, anche su richiesta del Cliente, può sospendere o disattivare l'account dell'Utente in caso di violazione delle presenti Condizioni, di rischio per la sicurezza o di cessazione dell'autorizzazione da parte del Cliente.

## 30. Privacy degli Utenti
I dati personali degli Utenti sono trattati dal Cliente in qualità di titolare e da Come Butta in qualità di responsabile del trattamento, come descritto nell'Informativa sulla privacy pubblicata su www.comebutta.com, a cui si rinvia.

## Parte IV – Disposizioni finali

## 31. Modifiche alle Condizioni
31.1 Come Butta può modificare le presenti Condizioni per esigenze tecniche, organizzative o normative. Le modifiche sono comunicate al Cliente per iscritto con almeno 30 (trenta) giorni di preavviso e pubblicate sul sito www.comebutta.com.
31.2 Se le modifiche peggiorano in modo significativo la posizione del Cliente, quest'ultimo può recedere dal contratto entro la data di efficacia delle modifiche, con comunicazione scritta e senza penali; in tal caso Come Butta rimborsa la quota di corrispettivi pagati riferita al periodo non goduto. In mancanza di recesso, le modifiche si intendono accettate. Le modifiche imposte dalla legge si applicano dalla loro entrata in vigore.
31.3 Per gli Utenti, la versione in vigore delle Condizioni è quella pubblicata sul sito alla data di utilizzo della Piattaforma.

## 32. Disposizioni varie
32.1 Il Cliente non può cedere il contratto a terzi senza il consenso scritto di Come Butta. Come Butta può cedere il contratto a società che subentrino nella gestione della Piattaforma, dandone comunicazione al Cliente.
32.2 L'eventuale nullità o inefficacia di una clausola non pregiudica la validità delle restanti.
32.3 La tolleranza di una parte rispetto a inadempimenti dell'altra non costituisce rinuncia ai relativi diritti.
32.4 Per quanto non previsto si applicano le norme del Codice Civile, del Codice della proprietà industriale e della legge sul diritto d'autore relative alla tutela dei programmi per elaboratore.

## 33. Legge applicabile e foro competente
Le presenti Condizioni e ogni Ordine sono regolati dalla legge italiana. Per ogni controversia relativa alla loro interpretazione, esecuzione o cessazione è competente in via esclusiva il Foro di Milano.

## 34. Approvazione specifica
Ai sensi e per gli effetti degli artt. 1341 e 1342 c.c., il Cliente dichiara di aver letto e di approvare specificamente le seguenti clausole: art. 3.2 (prevalenza); art. 6.2 (rinnovo tacito e disdetta); art. 7.3 (interessi di mora e sospensione per mancato pagamento); art. 8 (natura stimata dei dati); art. 9 (ruolo di Come Butta); art. 11.2 (evoluzione della Piattaforma); art. 12 (proprietà intellettuale e divieti); art. 14.3 (autorizzazione generale ai sub-responsabili); art. 16.2 e 16.3 (limiti di garanzia); art. 17 (limitazione di responsabilità); art. 18 (sospensione); art. 19 (risoluzione e limiti al recesso); art. 20 (effetti della cessazione); art. 31 (modifiche unilaterali); art. 32.1 (divieto di cessione del contratto); art. 33 (foro esclusivo).
!SIGN
`,m={privacy:{source:D,pdf:"/privacy-policy.pdf"},termini:{source:w,pdf:"/termini-e-condizioni.pdf"}},u=m[document.body.dataset.doc??""]??m.privacy;f.createRoot(document.getElementById("root")).render(a.jsxs(p.StrictMode,{children:[a.jsx(v,{isHome:!1}),a.jsx(q,{source:u.source,pdf:u.pdf}),a.jsx(b,{})]}));
