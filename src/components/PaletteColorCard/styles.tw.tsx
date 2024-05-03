import { FC } from "react";
import { IPaletteColorCardContainerProps } from "./types";

export const PaletteColorCardContainer: FC<IPaletteColorCardContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex 
            flex-col 
            w-fit h-fit 
            pt-2 pb-1 px-2 
            rounded-xl shadow-card
            bg-light-background 
            dark:bg-dark-background dark:shadow-dark-card 
            group
            `}
        >
            {children}
        </div>
    )
}