# Тема 13 · UI-библиотека компонентов

Компоненты `Button` и `Card`, собранные Vite в режиме библиотеки (`build.lib`) с типами от `vite-plugin-dts`.

- `react`, `react-dom` и их подпути (`react/jsx-runtime`) вынесены в `external` и `peerDependencies` — в бандл не попадают.
- Стили публикуются отдельным файлом: `import '@my-app/ui-library/style.css'`.

```sh
npm install
npm run build   # tsc --noEmit + vite build → dist/
npm test
```
