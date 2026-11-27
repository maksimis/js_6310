// Логика бота отдельно от запуска: так её можно протестировать с моком
import TelegramBot from 'node-telegram-bot-api'

export function createBot(token) {
    if (!token) {
        throw new Error('Не задан TELEGRAM_BOT_TOKEN: скопируйте .env.example в .env и впишите токен')
    }

    const bot = new TelegramBot(token, { polling: true })

    // Обрабатываем команду /start
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, 'Привет! Я твой первый бот!')
    })

    // Обрабатываем остальные текстовые сообщения
    bot.on('message', (msg) => {
        if (msg.text !== '/start') {
            bot.sendMessage(msg.chat.id, `Вы сказали: "${msg.text}"`)
        }
    })

    return bot
}
