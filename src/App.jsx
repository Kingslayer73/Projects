import React from 'react'
import FunctionalComponent from "./FunctionalComponent"
import './App.css'
import { ThemeProvider } from './ThemeContext';

function App() {
  
  return (
    <ThemeProvider>
      <FunctionalComponent />
    </ThemeProvider>
  )
}

export default App
