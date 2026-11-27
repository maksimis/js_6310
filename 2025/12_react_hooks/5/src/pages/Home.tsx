import { memo, useCallback, useMemo, useState } from "react"

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

  const fibonacci = useCallback((num: bigint): bigint => {
    if (num <= 1n) {
      return num
    } else {
      return fibonacci(num - 1n) + fibonacci(num - 2n)
    }
  }, [])  

  const fib = useMemo(() => {
    console.log("fib counted")

    return fibonacci(BigInt(counter))
  }, [counter, fibonacci])

  return <div>Fibonacci {fib}</div>
}

export default Home