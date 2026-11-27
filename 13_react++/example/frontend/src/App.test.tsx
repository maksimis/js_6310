import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('показывает демо компонентов библиотеки', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'UI Library Demo' })).toBeInTheDocument()
  })

  test('клик по Primary Button увеличивает счётчик', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Primary Button' }))
    expect(screen.getAllByText('Кликов: 1')).toHaveLength(1)
  })
})
