import type { JSX } from 'react'
import './App.css'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React TS Demo</h1>
      </header>

      <main className="app-main">

      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>React TS Demo v1.0.0 - Демонстрационное приложение</p>
          <p>React + TypeScript + Vite + Jest</p>
        </div>
      </footer>
    </div>
  )
}

export default App