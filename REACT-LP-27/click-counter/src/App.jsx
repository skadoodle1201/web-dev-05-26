import { useState } from "react";

const counterOperations = (operation, setCount) => {
  switch (operation) {
    case "increment": {
      setCount((prev) => {
        return prev + 1;
      });
      break;
    }
    case "decrement": {
      setCount((prev) => {
        return prev - 1;
      });

      break;
    }
    case "reset": {
      setCount(0);
      break;
    }
    case "multiplyBy10": {
      setCount((prev) => {
        return prev * 10;
      });
      break;
    }

    default: {
      throw new Error("Invalid Operation");
    }
  }
};

const CounterButtons = ({ btnText, customOnClick }) => {
  return <button onClick={customOnClick}>{btnText}</button>;
};

function App() {
  const [count, setCount] = useState(0);
  const operations = {
    increment: {
      text: "Increment",
      click: () => {
        counterOperations("increment", setCount);
      },
    },
    decrement: {
      text: "Decrement",
      click: () => {
        counterOperations("decrement", setCount);
      },
    },
    reset: {
      text: "Reset",
      click: () => {
        counterOperations("reset", setCount);
      },
    },
    multiplyBy10: {
      text: "Multiply By 10",
      click: () => {
        counterOperations("multiplyBy10", setCount);
      },
    },
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      {Object.keys(operations).map((operation) => {
        return (
          <CounterButtons
            btnText={operations[operation].text}
            customOnClick={operations[operation].click}
          />
        );
      })}
    </>
  );
}

export default App;
