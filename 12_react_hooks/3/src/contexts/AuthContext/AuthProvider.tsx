import { type ReactNode, useState } from 'react'

import { AuthContext, type AuthContextType, type User } from './AuthContext'

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<void> => {
    // Имитация API-запроса
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (password.length < 6) {
      throw new Error('Неверный email или пароль')
    }

    setUser({ id: '1', name: 'Анна Петрова', email })
  }

  const logout = () => {
    setUser(null)
  }

  // value и функции создаются заново на каждом рендере — как это исправить
  // через useMemo/useCallback, разбираем в теме 12
  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
