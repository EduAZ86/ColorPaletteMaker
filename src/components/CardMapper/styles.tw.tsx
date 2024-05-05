import { FC } from "react";
import { ICardMapperContainerProps } from "./types";

export const CardMapperContainer: FC<ICardMapperContainerProps> = ({ children }) => {
    return (
        <div
            className={`
                flex flex-row flex-wrap gap-4 justify-center items-center
                pb-24 md:pb-4
            `}
        >
            {children}
        </div>
    )
}