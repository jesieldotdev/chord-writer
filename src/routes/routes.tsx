import Home from "../pages/Home/index";
import { HashRouter,BrowserRouter, Routes, Route } from "react-router-dom";
import OpenView from "../pages/Open";
import SheetView from "../pages/Open/components/SheetView";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sheets" element={<OpenView />} />
        <Route path="/sheet/:id" element={<SheetView />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp