import { FC } from "react";
import { ISearchBarContainerProps } from "./types";

export const SearchBarContanier: FC<ISearchBarContainerProps> = ({ children }) => {
    return (
        <div
            className={`
                w-full h-fit
                px-2
                flex relative
                flex-col
                gap-2
            `}
        >
            {children}
        </div>
    )
}

