# Тема 10 · шаг 2 — layout и вложенные маршруты

Маршруты вынесены в `router.tsx`. `App` — layout с `<NavLink>` и `<Outlet/>`; страницы Home, About, Login; `ErrorPage` показывает ошибку через `useRouteError()`; неизвестные адреса перенаправляются на главную.

## Запуск

```sh
npm install
npm run dev        # http://localhost:5173
npm test           # тесты (jest)
npm run lint       # eslint
npm run build      # проверка типов + сборка в dist/
```
