import React, { useState, useContext } from 'react'
import FunctionalComponent from "./FunctionalComponent"
import './App.css'

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={changeTheme}>Change Theme</button>
      <FunctionalComponent />
      </ThemeContext.Provider>
  )
}

export default App
