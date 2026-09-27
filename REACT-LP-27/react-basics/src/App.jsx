import { useState } from "react";
import "./App.css";

import HeadingComponent from "./components/HeadingComponent";

function MainHeading() {
  const [waysToSayHello, setWaysToSayHello] = useState([
    "Hello",
    "Hey",
    "Namaste",
    "Hii",
    "Bonjour",
    "Ram Ram",
  ]);

  return (
    <>
      {waysToSayHello.map((way, index) => {
        return <HeadingComponent headingIndex={index} headingString={way} />;
      })}

      <button
        onClick={() => {
          setWaysToSayHello([...waysToSayHello, "Random Hello"]);
        }}
      >
        Add A version of Hello
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <MainHeading />
    </>
  );
}

export default App;
