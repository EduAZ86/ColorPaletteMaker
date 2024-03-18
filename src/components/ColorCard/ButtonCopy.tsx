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
                group-hover:opacity-80 group-hover:h-fit duration-700 delay-200
                dark:text-dark-font
                cursor-pointer` }
             ${colorSchema === 'rgb' &&
                `
                text-4xs opacity-0 text-light-font h-0
                group-hover:opacity-90 
                md:group-hover:h-fit 
                duration-700 delay-200
                dark:text-dark-font
                cursor-pointer           
            
             ` }
            
             `}

            onClick={handleClick}
        >
            {color}
        </button>
    )
}