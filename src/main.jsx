import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import historyReducer from "./store/Search.js";

const store = createStore(historyReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
