import React, { createContext, useState } from "react";
import { lightTheme, darkTheme, Theme } from "./themes";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Context = createContext<ThemeContextProps | any>({});

const Provider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [isDark, setIsDark] = useState(false);
  const th = localStorage.getItem("@isDark");

  const toggleTheme = () => {
    setTheme(prev => prev === darkTheme ? lightTheme : darkTheme)
    setIsDark(!isDark)
    localStorage.setItem("@isDark", JSON.stringify(!isDark));
  };

  React.useEffect(() => {
    if (JSON.parse(th)) {
      setIsDark(true);
      setTheme(darkTheme);
    } else {
      setIsDark(false);
      setTheme(lightTheme);
    }
  }, []);


  return (
    <Context.Provider value={{ theme, setTheme, toggleTheme, isDark }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
