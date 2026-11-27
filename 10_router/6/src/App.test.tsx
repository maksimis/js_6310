import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'

import { AuthProvider } from './contexts/AuthContext/AuthProvider'
import { routes } from './router'

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })

  render(<AuthProvider><RouterProvider router={router} /></AuthProvider>)

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

  test('динамический маршрут: userId берётся из URL', () => {
    renderAt('/user/42')
    expect(screen.getByRole('heading', { name: /Профиль пользователя 42/ })).toBeInTheDocument()
  })

  test('в шапке показан гость', () => {
    renderAt('/')
    expect(screen.getByText('Гость')).toBeInTheDocument()
  })

  test('после входа в шапке показано имя пользователя', async () => {
    const router = renderAt('/login')

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'anna@example.com' } })
    fireEvent.change(screen.getByLabelText('Пароль:'), { target: { value: 'secret1' } })
    fireEvent.click(screen.getByRole('button', { name: 'Войти' }))

    expect(await screen.findByText(/Привет/, {}, { timeout: 3000 })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/')
  })

  test('защищённая страница без входа ведёт на /login, а после входа — обратно', async () => {
    const router = renderAt('/user/42/edit')

    expect(router.state.location.pathname).toBe('/login')

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'anna@example.com' } })
    fireEvent.change(screen.getByLabelText('Пароль:'), { target: { value: 'secret1' } })
    fireEvent.click(screen.getByRole('button', { name: 'Войти' }))

    expect(await screen.findByRole('heading', { name: /Редактирование пользователя 42/ }, { timeout: 3000 }))
      .toBeInTheDocument()
  })
})
