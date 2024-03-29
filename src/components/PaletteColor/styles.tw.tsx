import { FC } from "react";
import { IPaletteColorContainerProps } from "./types";

export const PaleteColorContainer: FC<IPaletteColorContainerProps> = ({ children }) => {
    return (
        <div
            className={`
           flex flex-row w-fit bg-light-background rounded-xl
           dark:bg-dark-background 
           `}
        >
            {children}
        </div>
    )
}