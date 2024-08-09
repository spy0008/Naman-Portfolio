 "use client";

import React, { useEffect, useState, createContext, useContext } from 'react'


type Theme = "light" | "dark";

type ThemeContaxtType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContaxt = createContext<ThemeContaxtType | null>(null);


type ThemeConstextProviderProps = {
    children: React.ReactNode;
}

export default function ThemeContextProvider({
    children
}: ThemeConstextProviderProps ) {


    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if(theme === "light") {
            setTheme('dark');
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme('light');
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };


    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        
        if(localTheme) {
            setTheme(localTheme);

            if(localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-colr-schem: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);
  return <ThemeContaxt.Provider value={{
    theme,
    toggleTheme,
  }}>
    {children}
  </ThemeContaxt.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContaxt);

    if ( context === null) {
        throw new Error("useTheme must be used wihin a ThemeContextProvidder");
    }

    return context;
}
