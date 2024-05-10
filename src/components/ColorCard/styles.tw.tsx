import { FC } from "react";
import { IColorCardContainerProps } from "./types";

export const ColorCardContainer: FC<IColorCardContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex relative
            flex-col 
            justify-center
            w-14 h-20
            md:w-14 md:h-20
            items-center 
            gap-1 p-1
            md:my-0 my-2        
    `}
        >
            {children}
        </div>
    )
}