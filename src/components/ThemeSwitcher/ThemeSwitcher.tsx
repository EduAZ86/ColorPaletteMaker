'use client'
import React,{useEffect, useState} from "react";
import { useTheme } from 'next-themes'


const ThemeSwitcher:React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }

    return(
        <div>
            <span>{`the current theme is: ${theme}`}</span>
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
}

export default ThemeSwitcher