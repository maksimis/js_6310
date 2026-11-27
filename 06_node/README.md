# Тема 6 · Node.js и npm — примеры

| Папка | Что показывает |
|---|---|
| `1_init` | `npm init -y` |
| `2_init` | проект с ES-модулями (`"type": "module"`) |
| `3_npm_install` | установка зависимостей и devDependencies |
| `4_package_json` | скрипты `start` / `dev` (`node --watch`) / `test` |
| `5_structure` | структура `src/`, модули CommonJS и ES (`import … from './utils/math.js'`) |
| `6_jest` | Jest с ES-модулями: `node --experimental-vm-modules`, `"jest": {"transform": {}}` |
| `7_bot` | Telegram-бот: логика в `src/bot.js`, тест с моком `jest.unstable_mockModule` |
| `8_eslint` | то же + ESLint (flat config) |
| `0` | итоговый проект: бот, тесты, coverage, ESLint |

## Запуск бота

```sh
npm install
cp .env.example .env    # впишите токен от @BotFather
npm start               # или: node --env-file=.env src/index.js (без dotenv)
npm test
npm run lint
```

Файл `.env` с токеном в git не коммитим — в репозитории только `.env.example`.
