import { FC } from "react";
import { IButtonCopyProps } from "./types";

export const ButtonCopy: FC<IButtonCopyProps> = ({ color, colorSchema, handleClick }) => {
    return (
        <button
            className={`
                ${colorSchema === 'exa' && `
                text-3xs 
                md:opacity-0 opacity-100 
                text-light-font h-0
                md:group-hover:opacity-80
                md:group-hover:h-fit
                md:group-hover:duration-700 group-hover:delay-200
                dark:text-dark-font
                cursor-pointer
                hover:dark:text-red-500  hover:text-red-500 
                hover:duration-200 hover:delay-0            
                ` }
             ${colorSchema === 'rgb' &&
                `
                
                text-4xs                
                md:opacity-0 opacity-100 
                text-light-font 
                md:h-0 h-fit 
                md:group-hover:opacity-90 
                md:group-hover:h-fit 
                md:group-hover:duration-700
                md:group-hover:delay-200
                dark:text-dark-font
                cursor-pointer           
                hover:dark:text-red-500 hover:duration-200 hover:delay-0 hover:text-red-500               
            
             ` }            
             `}
            onClick={handleClick}
        >
            {color}
        </button>
    )
}