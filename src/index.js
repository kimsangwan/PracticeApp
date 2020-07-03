import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

let store = createStore(() => {
  return [
    {
      id: "test1",
      name: "test1",
      status: "test1",
      creat_on: "test1",
    },
  ];
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
