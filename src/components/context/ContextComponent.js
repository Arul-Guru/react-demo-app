import { createContext, useState } from "react"

const ThemeContext = createContext();

const CotextComponent = ({children})=>{
    const [theme, setTheme] = useState("light");
    

    const toggleTheme = ()=>{
        if(theme === "light")
            setTheme("dark")
        else 
            setTheme("light")
        // setTheme((prev)=>{ prev === "light"? "dark":"light"})

    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, CotextComponent}
