import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Using React 18, which causes an error in the browser console:
// "Uncaught SyntaxError: Unexpected token '<' (at index.js:1:1)"
// Reason: React 18 is not released yet ...
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
