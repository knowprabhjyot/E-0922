import { useEffect } from "react";
import { useState } from "react";


// Concept of this is toggle either to light or dark
export function useTheme(initialTheme = "light") {
    const [theme, setTheme] = useState(initialTheme);
    // Specific Hoook for handling the validtity

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.remove('light', 'dark');
        body.classList.add(theme);

    }, [theme]);

    const toggleTheme =() => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    }

    return  { theme, toggleTheme }
}