import React, {createContext, useState} from "react";
import { lightTheme, darkTheme, Theme } from './themes';


interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
  }

export const Context = createContext<ThemeContextProps | any>({})

const Provider: React.FC = ({
    children
}) => {
    const [theme, setTheme] = useState(darkTheme);
    const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === lightTheme ? darkTheme : lightTheme);
    setIsDark(!isDark)
  };

  console.log(isDark)

    return (
        <Context.Provider value={{theme, setTheme, toggleTheme, isDark}}>
            {children}
        </Context.Provider>
    )
}

export default Provider