'use client'
import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'

const ThemeSwitcher: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const [emogi, setEmogi] = useState(<></>)
    const { theme, setTheme } = useTheme();
    const sun = <BiSun className='h-4 text-xs' />
    const moon = <BiMoon className='h-4 text-xs' />

    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(() => {
        setEmogi(theme === 'light' ? moon : sun)

    }, [theme])

    if (!mounted) {
        return null
    }
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            onClick={() => handleTheme()}
            className={`flex flex-row w-8
        justify-center items-center
        duration-500
        
        `}>
            <div
                className={`
                 flex flex-row
                 w-fit text-center`}
            >
                <span
                    className="text-xl"
                >{emogi}
                </span>
            </div>
        </button>
    )
}

export default ThemeSwitcher