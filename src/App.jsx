import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={() => setStep(step > 1 ? (c) => c - 1 : 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((p) => p + 1)}>+</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((p) => p + step)}>+</button>
      </div>

      <div>
        {/* setCount((step === 1 ? count : count + step)); */}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${-count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
export default App;
