import { beforeEach, describe, expect, jest, test } from '@jest/globals'

// В ES-модулях jest.mock() не поднимается над import,
// поэтому мокаем модуль через unstable_mockModule и импортируем бота ПОСЛЕ этого
const handlers = { onText: [], on: [] }
const sendMessage = jest.fn()
const TelegramBot = jest.fn().mockImplementation(() => ({
    onText: (regexp, callback) => handlers.onText.push([regexp, callback]),
    on: (event, callback) => handlers.on.push([event, callback]),
    sendMessage,
}))

jest.unstable_mockModule('node-telegram-bot-api', () => ({ default: TelegramBot }))

const { createBot } = await import('../src/bot.js')

describe('Telegram-бот', () => {
    beforeEach(() => {
        handlers.onText = []
        handlers.on = []
        sendMessage.mockClear()
        TelegramBot.mockClear()
    })

    test('создаёт бота с polling', () => {
        createBot('test-token')
        expect(TelegramBot).toHaveBeenCalledWith('test-token', { polling: true })
    })

    test('без токена бросает понятную ошибку', () => {
        expect(() => createBot(undefined)).toThrow('TELEGRAM_BOT_TOKEN')
    })

    test('отвечает на /start', () => {
        createBot('test-token')
        const [, onStart] = handlers.onText[0]

        onStart({ chat: { id: 42 }, text: '/start' })
        expect(sendMessage).toHaveBeenCalledWith(42, 'Привет! Я твой первый бот!')
    })

    test('повторяет обычный текст', () => {
        createBot('test-token')
        const [, onMessage] = handlers.on.find(([event]) => event === 'message')

        onMessage({ chat: { id: 42 }, text: 'Привет' })
        expect(sendMessage).toHaveBeenCalledWith(42, 'Вы сказали: "Привет"')
    })
})
