import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider ({children}){
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          setTheme(storedTheme);
        }
      }, []);
    
      const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        localStorage.setItem('theme', newTheme);
      };

    const value = {
        theme, 
        toggleTheme
    }
    
    return (
        <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}