import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
