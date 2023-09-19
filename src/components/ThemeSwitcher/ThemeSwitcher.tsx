'use client'
import React,{useEffect, useState} from "react";
import { useTheme } from 'next-themes'


const ThemeSwitcher:React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const [emogi, setEmogi] = useState('')
    const {theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(()=>{
        setEmogi(theme === 'light'? '🌙' : '🌞')       

    },[theme])
    
    if (!mounted) {
        return null
    }
    const handleTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light')
    }

    return(
        <div className="flex flex-row w-16 justify-center items-center">     
            <button 
                className="w-full text-center"
            onClick={() => handleTheme()}>{emogi}</button>
        </div>
    )
}

export default ThemeSwitcher