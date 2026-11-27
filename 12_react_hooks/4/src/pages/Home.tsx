import { memo, useState } from "react"

import { Button } from "../components/Button/Button"

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const increment2 = () => setCount2(prev => prev + 1)

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <Button onClick={increment}>Count +</Button>
      <Button onClick={increment2}>Count 2 +</Button>
      <Child counter={count} /> {/* Перерисовывается при каждом клике! */}
      <ChildWithMemo counter={count} /> {/* Не перерисовывается при каждом клике! */}
    </div>
  )
}

type ChildProps = {
  counter: number
}

const ChildWithMemo = memo(({ counter }: ChildProps) => <Child counter={counter} />)

function Child({ counter }: ChildProps) {
  console.log('Child rendered!') // Вызывается каждый раз

  const fibonacci = (num: number): number => {
    if (num <= 1) {
      return num
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2)
    }
  }  

  const fib =  fibonacci(counter)

  return <div>Fibonacci {fib}</div>
}

export default Home