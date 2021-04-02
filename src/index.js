import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
