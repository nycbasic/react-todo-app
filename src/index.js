import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const storeWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
