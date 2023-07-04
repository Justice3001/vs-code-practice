import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Clock from "./clock";
//import ControlledInputForm from "./controlledInputForms";
import RandomNameGenerator from "./RandomNameGenerator";
import "./index.css";


function MyMainComponent() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  /*const link = () => {
    return (
      <a href="https://www.nba.com">
        <h1>Click me!</h1>
      </a>
    );
  };*/

  return (
    <div>
      <RandomNameGenerator />
    </div>
  );
}

ReactDOM.render(<MyMainComponent />, document.querySelector("#root"));
