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
                className="flex flex-col h-14 md:h-8 w-14 md:w-32 justify-center md:justify-start items-center p-2 gap-2 text-current rounded-md cursor-pointer active:scale-95"
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