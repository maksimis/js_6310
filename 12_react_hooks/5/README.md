# Тема 12 · шаг 5 — useMemo и useCallback

`slowFib` вынесена из компонента, результат мемоизирован `useMemo`. `increment` стабилизирован `useCallback`, поэтому `memo(Button)` не перерисовывается при вводе текста.

## Запуск

```sh
npm install
npm run dev        # http://localhost:5173
npm test           # тесты (jest)
npm run lint       # eslint
npm run build      # проверка типов + сборка в dist/
```
