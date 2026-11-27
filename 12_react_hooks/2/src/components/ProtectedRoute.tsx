import { Navigate, Outlet, useLocation } from 'react-router'

import { useAuth } from '../contexts/AuthContext/AuthContext'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    // запоминаем, куда шёл пользователь, — LoginForm вернёт его туда после входа
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}
