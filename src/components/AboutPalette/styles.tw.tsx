import { FC } from "react";
import { IAboutPalettetContainerProps } from "./types";

export const AboutPaletteContainer: FC<IAboutPalettetContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex flex-row w-full pt-1 px-1 bg-light-background rounded-xl 
          
            items-center justify-evenly
            gap-4
            dark:bg-dark-background 
            `}
        >
            {children}
        </div>
    )
}