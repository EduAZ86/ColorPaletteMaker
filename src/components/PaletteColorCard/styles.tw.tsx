import { FC } from "react";
import { IPaletteColorCardContainerProps } from "./types";

export const PaletteColorCardContainer: FC<IPaletteColorCardContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex flex-col w-fit h-fit pt-2 pb-1 px-2 bg-light-background rounded-xl shadow-card
            dark:bg-dark-background dark:shadow-dark-card group
            `}
        >
            {children}
        </div>
    )
}