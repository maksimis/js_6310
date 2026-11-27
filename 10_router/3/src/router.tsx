import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'

import App from './App'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import UserEdit from './pages/UserEdit'
import UserProfile from './pages/UserProfile'

// routes экспортируются отдельно, чтобы в тестах собрать createMemoryRouter
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'user/:userId', element: <UserProfile /> },
      { path: 'user/:userId/edit', element: <UserEdit /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
