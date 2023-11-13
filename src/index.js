import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import { UserContextProvider } from "./context/contextUser/ContextUser";
import Initializer from "./routes/initializer/Initializer";

import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/contextUser/ContextUser";

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
