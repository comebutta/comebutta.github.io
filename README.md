# ComeButta – Sito istituzionale

Sito single-page in italiano per [ComeButta](https://comebutta.com): piattaforma per il tracciamento dei ritiri e la generazione di report sullo smaltimento rifiuti.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** (v4) per lo stile
- Build statica adatta a hosting statico (S3+CloudFront, Netlify, Vercel, GitHub Pages)

## Prerequisiti

- **Node.js** 18+ (consigliato 20 LTS)
- **npm** 9+

## Installazione

```bash
npm install
```

## Script

### Sviluppo locale

```bash
npm run dev
```

Apre il server di sviluppo (di solito su `http://localhost:5173`). Modifiche al codice si riflettono in hot reload.

### Build per la produzione

```bash
npm run build
```

Genera l’output statico nella cartella `dist/`: HTML, CSS e JS ottimizzati e pronti per il deploy.

### Anteprima della build in locale

Dopo aver eseguito `npm run build`:

```bash
npm run preview
```

Serve la cartella `dist/` in locale (es. `http://localhost:4173`) per verificare il sito come in produzione.

## Deploy come sito statico

La build è solo file statici in `dist/`. Puoi ospitarla su qualsiasi host per siti statici.

### Esempio: Netlify

1. Collega il repository a Netlify.
2. Imposta:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy: Netlify eseguirà `npm run build` e pubblicherà il contenuto di `dist/`.

### Esempio: Vercel

1. Importa il progetto su Vercel.
2. Vercel rileva automaticamente Vite; in caso contrario imposta **Output Directory** su `dist` e il comando di build su `npm run build`.
3. Deploy.

### Esempio: AWS S3 + CloudFront

1. Esegui `npm run build`.
2. Carica il contenuto di `dist/` su un bucket S3 (abilitando “Static website hosting” oppure usando CloudFront come origine).
3. Crea una distribuzione CloudFront con origine sul bucket S3.
4. Configura il dominio (opzionale) e certificato SSL.

### Esempio: GitHub Pages

1. Nel repository, imposta **Settings → Pages** su “Deploy from a branch”.
2. Usa un’azione GitHub (es. `peaceiris/actions-gh-pages`) che esegua `npm install && npm run build` e pubblichi la cartella `dist/` sul branch `gh-pages` (o sulla cartella `docs`).

## Privacy Policy

Il footer contiene un link a **Privacy Policy** che punta a `/privacy-policy.pdf`. In `public/` è presente un file di riferimento: quando hai il PDF definitivo, posizionalo in `public/privacy-policy.pdf` (o assicurati che sia servito come `/privacy-policy.pdf` dal tuo host).

## Struttura progetto

- `src/App.tsx` – pagina unica con sezioni e anchor
- `src/components/` – Navbar, Hero, Soluzione, Prezzi, Contattaci, Footer
- `src/index.css` – stili globali e tema Tailwind (@theme)
- `tailwind.config.ts` – palette colori (esteso da CSS dove necessario)
- `index.html` – entry HTML, `lang="it"`

## Licenza

Privato – COPYRIGHT 2026 © Daniele Foà – P.IVA 03413302319
