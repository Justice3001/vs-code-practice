import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css"; 


function MyMainComponent() {

  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<MyMainComponent />, document.querySelector("#root"));
