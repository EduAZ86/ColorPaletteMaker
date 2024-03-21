import { FC } from "react";
import { ICreateContainerProps, ICreateFooterProps, ICreateHeaderProps } from "./types";

export const CreateContainer: FC<ICreateContainerProps> = ({ children }) => {
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

export const CreateHeader: FC<ICreateHeaderProps> = ({ children }) => {
    return (
        <div
            className={`
            
            `}
        >
            {children}
        </div>
    )
}

export const CreateFooter: FC<ICreateFooterProps> = ({ children }) => {
    return (
        <div
            className={`
            
            `}
        >
            {children}
        </div>
    )
}