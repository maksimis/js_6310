import { Outlet, Link } from 'react-router'

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/login">Login</Link>
      </nav>
      
      <main>
        <Outlet /> {/* Здесь рендерятся дочерние маршруты */}
      </main>
    </div>
  )
}

export default App
