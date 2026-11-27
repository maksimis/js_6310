import { useAuth } from "../../contexts/AuthContext/AuthContext"

const Header: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth()
  
  return (
    <header>
      <h1>Мое приложение</h1>      
      <div className="header-controls">       
        {isAuthenticated ? (
          <div className="user-info">
            <span>Привет, {user?.name}!</span>
            <button onClick={logout}>Выйти</button>
          </div>
        ) : (
          <span>Гость</span>
        )}
      </div>
    </header>
  )
}

export default Header