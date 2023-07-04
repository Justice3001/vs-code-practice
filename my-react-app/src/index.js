import React, { useState } from "react";
import ReactDOM from "react-dom";
import RandomNameGenerator from "./RandomNameGenerator";
import "./index.css"; 


function MyMainComponent() {



  return (
    <div>
      <RandomNameGenerator />
    </div>
  );
}

ReactDOM.render(<MyMainComponent />, document.querySelector("#root"));
