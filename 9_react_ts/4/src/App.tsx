import { useState, type JSX } from 'react'

import './App.css'
import './App.css'
import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

function App(): JSX.Element {
  const [count, setSount] = useState(0)

  const handleButtonClick = () => {
    setSount(prev => prev + 1)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>React TS Demo</h1>
      </header>

      <main className="app-main">
        <Card title='Это заголовок' className='main-card'>
          Счетчик: {count}
          <Button variant='secondary' onClick={() => handleButtonClick()}>Кнопка</Button>
        </Card>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <Card>
            <p>React TS Demo v1.0.0 - Демонстрационное приложение</p>
            <p>React + TypeScript + Vite + Jest</p>
          </Card>
        </div>
      </footer>
    </div>
  )
}

export default App
