import { type ReactNode, useState } from "react"

import { AuthContext, type AuthContextType, type User } from "./AuthContext"

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (email: string, password: string): Promise<void> => {
    // Имитация API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockUser: User = {
      id: '1',
      name: 'Анна Петрова',
      email: email
    }
    
    setUser(mockUser)
  }
  
  const logout = () => {
    setUser(null)
  }
  
  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}