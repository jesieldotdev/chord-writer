// ThemeToggle.tsx
import React, { Fragment, useContext } from "react";
import Provider, { Context } from "../../global/Context";
import { DarkMode, LightMode } from "@styled-icons/material";
import { Theme } from "../../global/themes";

const ThemeToggle: React.FC = () => {
  const { toggleTheme, theme, isDark } = useContext<Theme | any>(Context);

  return (
    <>
      {/* <button
        style={{
          backgroundColor: theme.text,
          // borderRadius: "100%",
          padding: 0,
        }}
      > */}
        {isDark ? (
          <DarkMode
            size={24}
            onClick={toggleTheme}
            color={theme.text}
          />
        ) : (
          <LightMode
            size={24}
            onClick={toggleTheme}
            color={theme.text}
          />
        )}
      {/* </button> */}
      {/* <DarkMode color="red" /> */}
    </>
  );
};

export default ThemeToggle;
