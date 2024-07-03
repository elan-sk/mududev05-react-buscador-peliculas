import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: 'https://elan-sk.github.io/mududev05-react-buscador-peliculas'
})
