import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('показывает счётчик и увеличивает его по клику', () => {
    render(<App />)
    expect(screen.getByText(/Счетчик: 0/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Кнопка' }))
    expect(screen.getByText(/Счетчик: 1/)).toBeInTheDocument()
  })
})
