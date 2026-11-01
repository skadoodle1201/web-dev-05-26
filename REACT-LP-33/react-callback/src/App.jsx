import { useState } from "react";
import "./App.css";

import { memo, useCallback } from "react";

const AddButton = memo(function AddButton({ onAdd }) {
  console.log("ADD BUTTON RERENDER");
  return <button onClick={onAdd}>Perform Operation</button>;
});

function Counter() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("ADD");
  const handleAdd = useCallback(() => {
    if (mode == "ADD") {
      setCount((c) => c + 1);
    } else if (mode == "SUBTRACT") {
      setCount((c) => c - 1);
    }
  }, [mode]);

  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setMode((m) => (m == "ADD" ? "SUBTRACT" : "ADD"));
        }}
      >
        Change to: {mode == "ADD" ? "SUBTRACT" : "ADD"}
      </button>
      <AddButton onAdd={handleAdd} />
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
