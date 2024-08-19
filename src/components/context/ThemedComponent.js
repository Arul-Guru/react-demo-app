import { useContext } from "react"
import { ThemeContext } from "./ContextComponent";

const ThemedComponent = ()=>{
    const {theme, toggleTheme} = useContext(ThemeContext);


    return(
        <div style={{background: theme === "light"?'#fff':'#000',color: theme === "light"?"#000":"#fff"}}>
            <p>Changin theme with context</p>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
        
    )
}

export default ThemedComponent;