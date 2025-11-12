import { useState, type JSX } from 'react'

import './App.css'
import './App.css'
import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

function App(): JSX.Element {
  const t = 5
  const l = 10
  const b = true
  const arr = [15, 20]
  const [count, setCount] = useState<number>(0)

  //let count2 = 0

  const handleButtonClick = () => {
    setCount(tt => tt + 1)
    //count = count + 1
    //console.log(count2)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>React TS Demo</h1>
      </header>

      <main className="app-main">
        <Card title='Это заголовок 1' className='main-card'>
          Счетчик: {count}
          <Button variant='secondary' onClick={() => handleButtonClick()}>Кнопка</Button>
        </Card>
        {!b ? t : l}
        <div>
          {arr.map((x, i) => <div key={i}>{x}</div>)}
        </div>
        <Card title='Это заголовок' className='main-card'>
          <div>Это чилдрены</div>
          <div>Еще один ребенок</div>
          <Button>Кнопка</Button>
        </Card>
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