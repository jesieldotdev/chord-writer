// import "./App.css";
import {GlobalStyles}  from './global/GlobalStyles';
import React, { useContext } from "react";
import { Context } from "./global/Context";
// import RoutesComp from './routes/routes'

function App() {
  const {theme} = useContext(Context);


  return (
    <>
      <GlobalStyles Theme={theme} />
     {/* <RoutesComp />  */}
    </>
  );
}

export default App;
