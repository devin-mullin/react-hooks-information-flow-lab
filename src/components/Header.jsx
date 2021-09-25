import { useState } from "react";

function Header({ isDarkMode, onDarkModeClick }){
    return(
     <>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
     </>
    )
}


export default Header