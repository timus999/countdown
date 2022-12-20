import React from "react";
import ReactDOM from "react-dom/client";
import Countdown from "./Countdown";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Countdown />
  </React.StrictMode>
);
