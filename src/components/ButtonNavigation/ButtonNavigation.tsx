"use client"
import { menuOptionsType } from "@/types/menuOptions.type";
import {useRouter} from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SubMenu from "../SubMenuHome";


interface ButtonNavigationProps {
    option:menuOptionsType
    setCurrentPressButton:(id: string) => void
    currentPressButton:string
  }

const ButtonNavigation:React.FC <ButtonNavigationProps>= ({option, currentPressButton, setCurrentPressButton}) => {

    const router = useRouter()

    const [currentPress, setCurrentPress] = useState(false)

    useEffect(()=>{
        setCurrentPress(option.name === currentPressButton)

    },[currentPressButton])
    
    
    
    const handleClick = (id:string) => {
        setCurrentPressButton(id)
        router.push(option.ref)

    } 
    
    return(
        <div className={`flex relative flex-col-reverse md:flex-col`}>
            <button 
                className={`
                    flex flex-col relative h-14 w-14 justify-center items-center px-2 pb-2 pt-0 gap-2 text-light-font bg-transparent rounded-lg cursor-pointer 
                    ${currentPress? 'shadow-press-button dark:shadow-dark-current-button' : 'shadow-button dark:shadow-dark-button'}  
                    dark:text-dark-font 
                    active:shadow-press-button active:dark:shadow-dark-press-button                    
                    md:flex-row md:justify-start md:h-9 md:w-40 md:font-roboto md:text-xs md:items-center md:pb-2 md:pt-2`}
                onClick={() => handleClick(option.name)}
            >
                <span 
                    className="
                        h-8 w-fit text-2xl text-center 
                        md:text-base md:h-fit">
                    {option.icon}
                </span>
                <span className="text-3xs md:text-base">
                    {option.name}
                </span>
            </button>
            { currentPress && (option.subMenu.length > 0) && <SubMenu
                key={option.name}
                subMenu={option.subMenu}
            />}
        </div>
    )
}

export default ButtonNavigation