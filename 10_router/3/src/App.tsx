import { NavLink, Outlet } from 'react-router'

import { Card } from './components/Card/Card'

function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/user/123">Profile</NavLink>
      </nav>

      <main>
        <Card>
          <Outlet /> {/* Здесь рендерятся дочерние маршруты */}
        </Card>
      </main>
    </div>
  )
}

export default App
