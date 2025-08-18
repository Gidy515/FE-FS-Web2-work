import { useState } from "react";
import "./index.css";

export default function App() {
  const [stepsCount, setStepsCount] = useState(1);
  const [counter, setCounter] = useState(0);

  // change step size
  function addStep() {
    setStepsCount((prev) => prev + 1);
  }

  function subtractStep() {
    setStepsCount((prev) => prev - 1);
  }

  // use step size to update counter
  function incrementCounter() {
    setCounter((prev) => prev + stepsCount);
  }

  function decrementCounter() {
    setCounter((prev) => prev - stepsCount);
  }

  return (
    <div>
      <h2>Step Size: {stepsCount}</h2>
      <div>
        <button onClick={subtractStep}>-1</button>
        <button onClick={addStep}>+1</button>
      </div>

      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={decrementCounter}>-</button>
        <button onClick={incrementCounter}>+</button>
      </div>
    </div>
  );
}
