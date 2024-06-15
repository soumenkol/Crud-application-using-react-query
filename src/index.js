import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import {store} from "../src/Redux-toolkit/Store/store.js"
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
    </Provider>
    <ToastContainer autoClose={1500} />
  </QueryClientProvider>
  </React.StrictMode>
);
