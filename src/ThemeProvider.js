import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider ({children}){
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const value = {
        theme, 
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}