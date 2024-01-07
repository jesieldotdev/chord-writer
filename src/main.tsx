import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SnackbarProvider } from "notistack";
import Provider from "./global/Context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OpenView from "./pages/Open/index.tsx";
import Home from "./pages/Home/index.tsx";
import SheetView from "./pages/Open/components/SheetView/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sheets",
    element: <OpenView />,
  },
  {
    path:"/sheet/:id",
    element: <SheetView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <SnackbarProvider />
      <App />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
