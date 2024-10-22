import { useState } from "react";
import "./App.css";

export default function App() {
  const [Count, setCount] = useState(0);
  const [Step, setStep] = useState(1);
  const date = new Date("june 21 2021");
  date.setDate(date.getDate() + Count);

  function handleDec() {
    setCount((c) => c - Step);
  }
  function handleAdd() {
    setCount((s) => s + Step);
  }
  return (
    <div className="App">
      <div>
        <button
          onClick={() => setStep((s) => s - 1)}
          style={{ margin: "0 10px", padding: "5px 10px", fontSize: "16px" }}
        >
          -
        </button>
        <span>step: {Step}</span>
        <button
          onClick={() => setStep((s) => s + 1)}
          style={{ margin: "0 10px", padding: "5px 10px", fontSize: "16px" }}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={handleDec}>-</button>
        <span>Count:{Count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <p>
        <span>
          {Count === 0
            ? "Today is "
            : Count > 0
            ? `${Count} days from now is `
            : `${Math.abs(Count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <Counter />
    </div>
  );
}
const Counter = () => {};
