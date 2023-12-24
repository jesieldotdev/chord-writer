import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as S from "./styles";
import Home from "./pages";
import React from "react";

function App() {
  React.useEffect(() => {
    // Define o título da página ao montar o componente
    document.title = "Chord Writter";

    // Esta função será executada quando o componente for desmontado
    return () => {
      document.title = "Página não encontrada"; // Opcional: restaura o título original
    };
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
