import { FC } from "react";
import { ICreateTagsContainerProps, IImputsContainerProps } from "./types";

export const CreateTagContainer: FC<ICreateTagsContainerProps> = ({ children }) => {
    return (
        <div
            className={`
        flex flex-col w-fit h-fit py-2 px-2 bg-light-background rounded-xl shadow-card
        dark:bg-dark-background dark:shadow-dark-card
    `}
        >
            {children}
        </div>
    )
};

export const InputsContainerProps: FC<IImputsContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex flex-row w-fit bg-light-background rounded-xl 
            dark:bg-dark-background gap-2
            `}
        >
            {children}
        </div>
    )
}