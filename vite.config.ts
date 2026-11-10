import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import { resolve } from 'node:path'

// Multi-page: home + pagine legali (servite come /privacy/ e /termini-e-condizioni/).
export default defineConfig({
  plugins: [react(), tailwind()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        termini: resolve(__dirname, 'termini-e-condizioni/index.html'),
      },
    },
  },
})
