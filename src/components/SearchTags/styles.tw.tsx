import { FC } from "react";
import { ISearchTagContainerProps } from "./types";

export const SearchTagContainer: FC<ISearchTagContainerProps> = ({ children }) => {
    return (
        <div
        className={`
            w-10 h-7 flex
            flex-row
            items-center justify-center
            p-3
        `}
        >
            {children}
        </div>
    )
}