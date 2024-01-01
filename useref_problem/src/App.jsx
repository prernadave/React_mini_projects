import { useRef } from "react"


function App() {
  const inputRef = useRef(null)

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput} >pass</button>
    </div>
  )
}

export default App

// https://course.masaischool.com/assignments/13832