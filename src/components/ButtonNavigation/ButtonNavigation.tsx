import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {HiFire} from 'react-icons/hi'

interface ButtonNavigationProps {
    option:{
        name:string;
        ico:string;
        ref:string;
    }
    setCurrentPressButton:Dispatch<SetStateAction<string>>
    currentPressButton:string
  }

const ButtonNavigation:React.FC <ButtonNavigationProps>= ({option, currentPressButton, setCurrentPressButton}) => {

    const icon = <HiFire className='h-12 text-xl md:text-base'/>
    const [currentPress, setCurrentPress] = useState(false)
    useEffect(()=>{
        setCurrentPress(option.name === currentPressButton)

    },[currentPressButton])
    
    
    
    const handleClick = (id:string) => {
        setCurrentPressButton(id)
    }
    console.log(`${option.name} is press? ${currentPress}`);
    
    return(
        <div className="inline-block">
            <button 
                className={`
                    flex flex-col h-14 w-14 justify-center items-center p-2 gap-2 text-light-font bg-transparent rounded-lg cursor-pointer ${currentPress? 'shadow-press-button dark:shadow-dark-current-button' : 'shadow-button dark:shadow-dark-button'  }  
                    dark:text-dark-font 
                    active:shadow-press-button active:dark:shadow-dark-press-button                    
                    md:flex-row md:justify-start md:h-9 md:w-40 md:font-roboto md:text-xs md:items-center `}
                onClick={() => handleClick(option.name)}
            >
                {icon}
                <span className="text-[0.6rem] md:text-base">
                    {option.name}
                </span>
            </button>
        </div>
    )
}

export default ButtonNavigation