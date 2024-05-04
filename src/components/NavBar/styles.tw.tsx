import { FC } from "react";
import { INavBarContainerProps, INavBarSubContainerProps } from "./types";

export const NavBarContainer: FC<INavBarContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            fixed flex 
            md:flex-col flex-row 
            bg-light-background w-screen h-16 
            pl-0 pt-4
             left-0 bottom-0 shadow-bar z-20
          dark:bg-dark-background dark:shadow-dark-bar
            md:w-44  md:pl-2  md:top-0 md:h-screen md:shadow-bar
        `}
        >
            {children}
        </div>
    )
}


export const NavBArSubContainer: FC<INavBarSubContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex flex-row w-full h-full aling items-center justify-evenly gap-4 left-0 bg-light-background 
            dark:bg-dark-background
            md:flex-col md:items-start md:justify-start md:gap-4
            `}
        >
            {children}
        </div>
    )
}