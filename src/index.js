import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root")); // DEPRECIATED
const root = ReactDOM.createRoot(document.getElementById("root")); // target root div to inject entire application into that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
