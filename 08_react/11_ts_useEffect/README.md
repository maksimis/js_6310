# Тема 8 · 11_ts_useEffect — загрузка данных на TypeScript

`PostsList`: `unknown` + type guard вместо слепого `as Post[]`, `AbortController`, статус `loading | success | error`. Кастомные хуки `useApi<T>` (с `refetch`) и `useLocalStorage<T>` используются в `App`.

## Запуск

```sh
npm install
npm run dev     # http://localhost:5173
npm run lint
npm run build
```
