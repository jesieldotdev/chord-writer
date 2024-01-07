// ThemeToggle.tsx
import React, { Fragment, useContext } from "react";
import Provider, { Context } from "../../global/Context";
import { DarkMode, LightMode } from "@styled-icons/material";
import { CiDark, CiLight } from "react-icons/ci";

import { Theme } from "../../global/themes";

interface ThemeToggleProps {
  showText?: boolean;
}

const ThemeToggle = ({ showText }: ThemeToggleProps) => {
  const { toggleTheme, theme, isDark } = useContext<Theme | any>(Context);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        // padding: -16
      }}
    >
      {/* <button
        style={{
          backgroundColor: theme.text,
          // borderRadius: "100%",
          padding: 0,
        }}
      > */}
      {!isDark ? (
        <CiDark size={24} onClick={toggleTheme} color={theme.text} />
      ) : (
        // <DarkMode
        //   size={24}
        //   onClick={toggleTheme}
        //   color={theme.text}
        // />
        <CiLight size={24} onClick={toggleTheme} color={theme.text} />
        // <LightMode
        //   size={24}
        //   onClick={toggleTheme}
        //   color={theme.text}
        // />
      )}
      {/* </button> */}
      {/* <DarkMode color="red" /> */}
      <p>{showText ? (isDark ? "Tema Claro" : "Tema Light") : null}</p>
    </div>
  );
};

export default ThemeToggle;
