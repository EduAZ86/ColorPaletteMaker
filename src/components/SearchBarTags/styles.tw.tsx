import { FC } from "react";
import { ISearchBarContainerProps } from "./types";

export const SearchBarContanier: FC<ISearchBarContainerProps> = ({ children, setOnFocusInput }) => {
    const handleFocus = () => {
        setOnFocusInput(true)
    }
    const handleOnBlur = () => {
        setOnFocusInput(false)
    }
    return (
        <div
            tabIndex={0}
            onFocus={handleFocus}
            onBlur={handleOnBlur}
            className={`
                w-full h-fit
                px-2
                flex relative
                flex-col
                gap-2
                z-20
            `}
        >
            {children}
        </div>
    )
}

