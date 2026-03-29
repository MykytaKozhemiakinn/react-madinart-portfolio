import React from "react";
import ReactDOM from "react-dom";
import process from "process";
import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

window.process = process;

ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
