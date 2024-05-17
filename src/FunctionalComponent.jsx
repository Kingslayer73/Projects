import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext"

export default function FunctionalComponent(){
const darkTheme = useTheme();
const changeTheme = useThemeUpdate()

const themeStyles = {
    backgroundColor : darkTheme ? "white" : "black",
    color : darkTheme ? "black" : "white",
    padding : "4rem",
    margin : "4rem"
}

return (
    <>
        <button onClick={changeTheme}>Change Theme</button>
        <div class = "box" style = {themeStyles}>Functional Theme</div>
    </>
);
}