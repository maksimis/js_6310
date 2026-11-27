import { memo, useCallback, useMemo, useState } from 'react'

import { Button } from '../components/Button/Button'

type ChildProps = {
  counter: number
}

// Чистая функция без props и state — объявляем ВНЕ компонента:
// ссылка на неё стабильна, в зависимости её добавлять не нужно
function slowFib(n: number): number { // O(2^n): специально медленно
  return n <= 1 ? n : slowFib(n - 1) + slowFib(n - 2)
}

function Child({ counter }: ChildProps) {
  console.log('Child rendered!')

  const fib = useMemo(() => {
    console.log('fib counted')

    return slowFib(counter)
  }, [counter]) // пересчёт только при изменении counter

  return <div>Fibonacci({counter}) = {fib}</div>
}

const ChildWithMemo = memo(Child) // тот же компонент, обёрнутый в memo
const MemoButton = memo(Button)

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [text, setText] = useState('')

  // без useCallback на каждый рендер создаётся НОВАЯ функция,
  // и memo(Button) всё равно перерисовывал бы кнопку
  const increment = useCallback(() => setCount(c => c + 1), [])

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <MemoButton onClick={increment}>Count +</MemoButton>
      <Button onClick={() => setCount2(c => c + 1)}>Count 2 +</Button>
      <input aria-label="Текст" value={text} onChange={e => setText(e.target.value)} />
      <Child counter={count} /> {/* рендерится при любом изменении Home */}
      <ChildWithMemo counter={count} /> {/* только при изменении count */}
    </div>
  )
}

export default Home
