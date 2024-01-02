// import "./App.css";
import {GlobalStyles}  from './global/GlobalStyles';
import Home from "./pages/Home";
import React, { useContext } from "react";
import Provider, { Context } from "./global/Context";
import RoutesComp from './routes/routes'

function App() {
  const {theme} = useContext(Context);

  React.useEffect(() => {
    document.title = "Chord Writter";
    return () => {
      document.title = "Página não encontrada";
    };
  }, []);
  return (
    <>
      <GlobalStyles Theme={theme} />
     <RoutesComp /> 
    </>
  );
}

export default App;
