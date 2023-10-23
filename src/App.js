import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleIncCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecCounter = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncCounter}>Increase Count</button>
      <button onClick={handleDecCounter}>Decrease Count</button>
    </div>
  );
}
