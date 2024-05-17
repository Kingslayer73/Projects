import React, { useContext} from "react";
import { ThemeContext} from "./App"

export default function FunctionalComponent(){
const darkTheme = useContext(ThemeContext)
const ThemeStyles = {

    backgroundColor : darkTheme ? "white" : "black",
    color : darkTheme ? "black" : "white",

}

return (
    <div style = {ThemeStyles}>
        <h1>useContext Test</h1>
    </div>
);
}