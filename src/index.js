import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./contexts/StateProvider";
import { initialState } from "./contexts/initialState";
import reducer from "./contexts/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>
);
