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
    const startTime = performance.now();

    // Simulate a delay before loading the React app
    setTimeout(() => {
      const endTime = performance.now();
      const elapsedTime = endTime - startTime;
      const minDelay = 4000; // Minimum delay in milliseconds

      if (elapsedTime < minDelay) {
        // If the elapsed time is less than the minimum delay, wait for the remaining time
        setTimeout(() => {
          setIsLoading(false);
        }, minDelay - elapsedTime);
      } else {
        setIsLoading(false);
      }
    }, 7000); // Adjust the total delay (in milliseconds) as needed
  }, []);

  return (
    <div>
      {isLoading ? <LoadingBox /> : <RandomNameGenerator />}
    </div>
  );
}

ReactDOM.render(<MyMainComponent />, document.querySelector("#root"));
