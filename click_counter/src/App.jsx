import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  function handleCount() {
    setCount((c) => c + 1)
  }

  return (
    <>
      <button onClick={handleCount}>Clicked:{count}</button>
    </>
  )
}

export default App
