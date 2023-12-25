// import "./App.css";
import {GlobalStyles}  from './global/GlobalStyles';
import Home from "./pages";
import React, { useContext } from "react";
import Provider, { Context } from "./global/Context";

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
      <Home />
    </>
  );
}

export default App;
