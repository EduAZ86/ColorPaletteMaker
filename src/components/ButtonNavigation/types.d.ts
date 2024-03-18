import { menuOptionsType } from "@/types/menuOptions.type";
import { ReactNode } from "react"

export interface IButtonNavigationProps {
    option: menuOptionsType
    setCurrentPressButton: (id: string) => void
    currentPressButton: string
}

export interface IButtonNavigationContainerProps {
    children: ReactNode;
}

export interface IButtonNavigationComponentProps {
    handlerClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    currentPress: boolean;
    option: menuOptionsType;
}