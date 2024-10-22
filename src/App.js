import { useState } from "react";
import "./App.css";

export default function App() {
  const [Count, setCount] = useState(0);
  const date = new Date("june 21 2021");
  date.setDate(date.getDate() + Count);

  function handleDec() {
    setCount((c) => c - 1);
  }
  function handleAdd() {
    setCount((s) => s + 1);
  }
  return (
    <div className="App">
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
