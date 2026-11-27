import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('показывает заголовок приложения', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'React TS Demo' })).toBeInTheDocument()
  })

  test('Card выводит заголовок и содержимое', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0)
  })
})
