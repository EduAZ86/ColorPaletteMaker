import { FC } from "react";
import { IButtonComponentProps } from "./types";

export const ButtonComponent: FC<IButtonComponentProps> = ({ children, handleClick, isFav }) => {
    return (
        <button
            className={`
            flex flex-row w-fit py-2  rounded-md gap-2 ${isFav && 'shadow-current-button dark:shadow-dark-current-button'}
            `}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}