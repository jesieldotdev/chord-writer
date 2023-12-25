// ThemeToggle.tsx
import React, { Fragment, useContext } from "react";
import Provider, { Context } from "../../global/Context";
import {DarkMode } from "@styled-icons/material";
import { Theme } from "../../global/themes";

const ThemeToggle: React.FC = () => {
  const { toggleTheme, theme } = useContext<Theme | any>(Context);

  return (
    <>
    {/* <button onClick={toggleTheme}> */}
        
        <DarkMode size={32} onClick={toggleTheme} color={theme.text} />
    {/* </button> */}
    {/* <DarkMode color="red" /> */}

    </>
  );
};

export default ThemeToggle;
