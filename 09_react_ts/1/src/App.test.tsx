import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('показывает заголовок приложения', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'React TS Demo' })).toBeInTheDocument()
  })
})
