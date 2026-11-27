import { memo, useState } from "react"

import { Button } from "../components/Button/Button"

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(prev => prev + 1)

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>+</Button>
      <Child /> {/* Перерисовывается при каждом клике! */}
      <ChildWithMemo /> {/* Не перерисовывается при каждом клике! */}
    </div>
  )
}

const ChildWithMemo = memo(() => <Child />)

function Child() {
  console.log('Child rendered!') // Вызывается каждый раз

  return <div>Static Content</div>
}

export default Home