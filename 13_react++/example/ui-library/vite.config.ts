import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      // тесты и настройка jest не нужны пользователям библиотеки
      exclude: ['src/**/*.test.tsx', 'src/setupTests.ts'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // react, react-dom и их подпути (react/jsx-runtime) — зависимости приложения,
      // в бандл библиотеки они попадать не должны
      external: [/^react(-dom)?(\/.*)?$/],
    },
  },
})
