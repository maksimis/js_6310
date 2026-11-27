import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // относительные пути к assets: сборка работает и в подпапке (GitHub Pages /репо/)
  base: './',
  plugins: [react()],
})
