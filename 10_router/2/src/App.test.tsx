import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'

import { routes } from './router'

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })

  render(<RouterProvider router={router} />)

  return router
}

describe('Маршруты', () => {
  test('главная страница по адресу /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument()
  })

  test('страница About', () => {
    renderAt('/about')
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  test('неизвестный адрес перенаправляет на главную', () => {
    const router = renderAt('/no-such-page')

    expect(router.state.location.pathname).toBe('/')
  })
})
