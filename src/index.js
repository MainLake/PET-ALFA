import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Initializer from "./routes/initializer/Initializer";

// Importing the tailwind css file
import "./css/index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Initializer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Initializer>,
  document.getElementById("root")
);
