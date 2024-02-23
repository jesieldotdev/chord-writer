import { createBrowserRouter } from "react-router-dom";
import Editor from "../pages/Editor";
import OpenView from "../pages/Open";
import SheetView from "../pages/Open/components/SheetView";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Editor />,
  },
  {
    path: "/sheets",
    element: <OpenView />,
  },
  {
    path:"/sheet/:id",
    element: <SheetView />,
  },
  {
    path:"/login",
    element: <Login />
  }
]);

export default router