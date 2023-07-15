import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import RandomNameGenerator from "./RandomNameGenerator";
import "./index.css";

function LoadingBox() {
  return (
    <div className="loading-box">
      <div className="waviy">
        <span style={{ "--i": 1 }}>L</span>
        <span style={{ "--i": 2 }}>o</span>
        <span style={{ "--i": 3 }}>a</span>
        <span style={{ "--i": 4 }}>d</span>
        <span style={{ "--i": 5 }}>i</span>
        <span style={{ "--i": 6 }}>n</span>
        <span style={{ "--i": 7 }}>g</span>
        <span style={{ "--i": 8 }}>.</span>
        <span style={{ "--i": 9 }}>.</span>
        <span style={{ "--i": 10 }}>.</span>
        <h2>"The only guarantee for failure is to stop trying"</h2>
      </div>
    </div>
  );
}

function MyMainComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 6500; // Delay in milliseconds

    // Simulate a delay before loading the React app
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {isLoading ? <LoadingBox /> : <RandomNameGenerator />}
    </div>
  );
}

ReactDOM.render(<MyMainComponent />, document.querySelector("#root"));
