import React from "react";
import {HiFire} from 'react-icons/hi'

interface ButtonNavigationProps {
    option:{
        name:string;
        ico:string;
        ref:string;
    }
  }

const ButtonNavigation:React.FC <ButtonNavigationProps>= ({option}) => {

    const icon = <HiFire className='h-12 text-xl md:text-base'/>

    const handleClick = () => {

    }

    return(
        <div className="inline-block">
            <button
                className="
                    flex flex-col h-14 w-14 justify-center items-center p-2 gap-2 text-light-font bg-transparent rounded-lg cursor-pointer shadow-button 
                    dark:text-dark-font dark:shadow-dark-button
                    active:shadow-press-button active:dark:shadow-dark-press-button                    
                    md:flex-row md:justify-start md:h-9 md:w-40 md:font-roboto md:text-xs md:items-center md:shadow-button"
                onClick={() => handleClick()}
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