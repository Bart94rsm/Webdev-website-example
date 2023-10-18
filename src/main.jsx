import React from "react";
import ReactDOM from "react-dom/client";
import App from "./assets/components/AppState.jsx";
import AppReducer from "./assets/components/AppReducer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppReducer />
  </React.StrictMode>
);
