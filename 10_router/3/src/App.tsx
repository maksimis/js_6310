import { Outlet, Link } from 'react-router'

import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

function App() {
  return (
    <div className="app">
      <nav>
        <Button type='button'><Link to="/">Главная</Link></Button>
        <Button type='button'><Link to="/about">О нас</Link></Button>
        <Button type='button'><Link to="/login">Login</Link></Button>
        <Button type='button'><Link to="/user/123">Profile</Link></Button>
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
