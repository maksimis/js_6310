import { useState } from "react"

import { Button } from "../components/Button/Button"

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(prev => prev + 1)

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>+</Button>
    </div>
  )
}

export default Home