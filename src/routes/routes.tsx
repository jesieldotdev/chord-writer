import { createBrowserRouter } from "react-router-dom";
import Editor from "../pages/Editor";
import MusicList from "../pages/MusicList";
import SheetView from "../pages/SheetView";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MusicList />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
  {
    path:"/:id",
    element: <SheetView />,
  },
  {
    path:"/login",
    element: <Login />
  }
]);

export default router