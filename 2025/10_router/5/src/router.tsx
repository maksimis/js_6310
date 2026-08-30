// router.tsx
import { createBrowserRouter, Navigate } from 'react-router'

import App from './App'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'user/:userId',
        element: <UserProfile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
])