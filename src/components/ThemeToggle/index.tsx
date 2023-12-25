// ThemeToggle.tsx
import React, { useContext } from 'react';
import Provider, { Context } from "../../global/Context";

const ThemeToggle: React.FC = () => {
  const {toggleTheme, theme} = useContext<any>(Context);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
