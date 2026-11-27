# Тема 10 · шаг 6 — защищённые маршруты и useForm

`ProtectedRoute` закрывает `user/:userId/edit`: без входа — редирект на `/login`, после входа — обратно. Форма регистрации построена на типизированном хуке `useForm<T>` (`src/hooks/useForm.ts`, тесты рядом).

## Запуск

```sh
npm install
npm run dev        # http://localhost:5173
npm test           # тесты (jest)
npm run lint       # eslint
npm run build      # проверка типов + сборка в dist/
```
