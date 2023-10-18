import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { UserContextProvider } from "./context/contextUser/ContextUser";
import Initializer from "./routes/initializer/Initializer";

ReactDOM.render(
  <UserContextProvider>
    <Initializer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Initializer>
  </UserContextProvider>,
  document.getElementById("root")
);
