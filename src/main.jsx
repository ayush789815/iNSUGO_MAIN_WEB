import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Important: Tailwind CSS must be imported here!
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <ToastContainer position="top-center" autoClose={2000} />
    </Provider>
  </>
);
