import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import setupStore from "./store/index";
import { App } from "./views/App";
import "./assets/scss/app.scss";

const store = setupStore({});

const container =
  document.getElementById("root") || document.createElement("div");
const root = createRoot(container);

/* istanbul ignore next */ 
if (process.env.NODE_ENV === "development" && process.env.REACT_APP_MSW) {
  /* istanbul ignore next */ 
  // eslint-disable-next-line global-require
  const { worker } = require("./__tests__/__mocks__/api/browser");
  /* istanbul ignore next */ 
  worker.start();
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
