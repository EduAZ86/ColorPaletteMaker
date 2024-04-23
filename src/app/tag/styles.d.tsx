import { FC } from "react";
import { ICreateTagContainerProps, ICreateTagFooterProps, ICreateTagHeaderProps } from "./types";

export const CreateTagContainer: FC<ICreateTagContainerProps> = ({ children }) => {
    return (
        <div
            className={`
            flex w-full h-full flex-col justify-center items-center pl-0 pb-28 gap-10
            md:pb-0 md:pl-5 md:pr-4
            `}
        >
            {children}
        </div>
    )
}

export const CreateTagHeader: FC<ICreateTagHeaderProps> = ({ children }) => {
    return (
        <div
            className={`
            
            `}
        >
            {children}
        </div>
    )
}

export const CreateTagFooter: FC<ICreateTagFooterProps> = ({ children }) => {
    return (
        <div
            className={`
            
            `}
        >
            {children}
        </div>
    )
}