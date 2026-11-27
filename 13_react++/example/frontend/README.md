# Тема 13 · демо-приложение UI-библиотеки

Приложение подключает локальную библиотеку `../ui-library` (`"@my-app/ui-library": "file:../ui-library"`) и показывает все её компоненты.

## Запуск

```sh
cd ../ui-library && npm install && npm run build   # сначала собрать библиотеку
cd ../frontend && npm install
npm run dev
npm test      # тесты берут исходники библиотеки напрямую (moduleNameMapper)
npm run build # base: './' — сборку можно выложить в подпапку (GitHub Pages)
```
