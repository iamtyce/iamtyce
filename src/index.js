import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import App from "./components/App/App";
import { GlobalStyles } from "./styles/GlobalStyles";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <Normalize />
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
