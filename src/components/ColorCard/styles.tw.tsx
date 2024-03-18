import { FC } from "react";
import { IColorCardContainerProps } from "./types";

export const ColorCardContainer: FC<IColorCardContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex relative
            flex-col justify-center
            w-14 h-24
            items-center 
            gap-2 px-1 py-1        
    `}
        >
            {children}
        </div>
    )
}