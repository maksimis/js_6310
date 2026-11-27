// Окружение jsdom + Fetch API и TextEncoder из Node.
// В jsdom их нет, а react-router v7 создаёт Request при каждой навигации.
// AbortController/AbortSignal тоже берём из Node: Request принимает только «свой» signal.
const { TestEnvironment } = require('jest-environment-jsdom')

class JsdomWithFetch extends TestEnvironment {
  constructor(...args) {
    super(...args)
    Object.assign(this.global, {
      TextEncoder, TextDecoder, ReadableStream,
      Request, Response, Headers, FormData, fetch,
      AbortController, AbortSignal,
    })
  }
}

module.exports = JsdomWithFetch
