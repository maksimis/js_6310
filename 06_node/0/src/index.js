import dotenv from 'dotenv'

import { createBot } from './bot.js'

// читает переменные из файла .env в process.env
// (без dotenv: node --env-file=.env src/index.js, Node >= 20.6)
dotenv.config()

createBot(process.env.TELEGRAM_BOT_TOKEN)
console.log('Бот запущен...')
