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

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === lightTheme ? darkTheme : lightTheme);
  };

    return (
        <Context.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </Context.Provider>
    )
}

export default Provider