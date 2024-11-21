import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SnackbarProvider } from "notistack";
import Provider from "./global/Context.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <SnackbarProvider />
      <App />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
