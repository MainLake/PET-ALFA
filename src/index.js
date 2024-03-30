import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Initializer from "./routes/initializer/Initializer";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Initializer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Initializer>,
  document.getElementById("root")
);
