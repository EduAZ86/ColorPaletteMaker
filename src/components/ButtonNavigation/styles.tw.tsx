'use client'
import { FC } from "react";
import { IButtonNavigationComponentProps, IButtonNavigationContainerProps } from "./types";

export const ButtonNavigationContainer: FC<IButtonNavigationContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex relative flex-col-reverse md:flex-col
            `}
        >
            {children}
        </div>
    )
}

export const ButtonNavigationComponent: FC<IButtonNavigationComponentProps> = ({ handlerClick, currentPress, option }) => {

    return (
        <button
            className={`
            flex flex-col relative h-14 w-14 justify-center items-center px-2 pb-2 pt-0 gap-2 text-light-font bg-transparent rounded-lg cursor-pointer 
            ${currentPress ? 'shadow-press-button dark:shadow-dark-current-button' : 'shadow-button dark:shadow-dark-button'}  
            dark:text-dark-font 
            active:shadow-press-button active:dark:shadow-dark-press-button                    
            md:flex-row md:justify-start md:h-9 md:w-40 md:font-roboto md:text-xs md:items-center md:pb-2 md:pt-2
            `}
            onClick={handlerClick}
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
    )
}