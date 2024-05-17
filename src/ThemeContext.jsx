import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={changeTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}