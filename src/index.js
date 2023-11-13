import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import { UserContextProvider } from "./context/contextUser/ContextUser";
import Initializer from "./routes/initializer/Initializer";

mapboxgl.accessToken = 'pk.eyJ1IjoiamVhYzA0IiwiYSI6ImNsb3dhYzc3YzB5cjUyb252cmt1bXJnbmkifQ.oC8AUueGT_XpshmXhDJm4A';

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
