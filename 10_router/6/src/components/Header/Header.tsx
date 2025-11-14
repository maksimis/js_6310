import { Link } from "react-router"

import { useAuth } from "../../contexts/AuthContext/AuthContext"
import { Button } from "../Button/Button"

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
          <>
            <span>Гость</span>
            <Button type='button'><Link to="/register">Register</Link></Button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header