import { menuOptionsType } from "@/types/menuOptions.type";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SubMenu from "../SubMenuHome";


interface ButtonNavigationProps {
    option:menuOptionsType
    setCurrentPressButton:Dispatch<SetStateAction<string>>
    currentPressButton:string
  }

const ButtonNavigation:React.FC <ButtonNavigationProps>= ({option, currentPressButton, setCurrentPressButton}) => {

    const [currentPress, setCurrentPress] = useState(false)
    useEffect(()=>{
        setCurrentPress(option.name === currentPressButton)

    },[currentPressButton])
    
    
    
    const handleClick = (id:string) => {
        setCurrentPressButton(id)
    } 
    
    return(
        <div className={`flex relative flex-col-reverse md:flex-col`}>
            <button 
                className={`
                    flex flex-col relative h-14 w-14 justify-center items-center p-2 gap-2 text-light-font bg-transparent rounded-lg cursor-pointer ${currentPress? 'shadow-press-button dark:shadow-dark-current-button' : 'shadow-button dark:shadow-dark-button'  }  
                    dark:text-dark-font 
                    active:shadow-press-button active:dark:shadow-dark-press-button                    
                    md:flex-row md:justify-start md:h-9 md:w-40 md:font-roboto md:text-xs md:items-center `}
                onClick={() => handleClick(option.name)}
            >
                {option.icon}
                <span className="text-[0.6rem] md:text-base">
                    {option.name}
                </span>
            </button>
            { currentPress && (option.subMenu.length > 0)&& <SubMenu
                key={option.name}
                subMenu={option.subMenu}
            />}
        </div>
    )
}

export default ButtonNavigation