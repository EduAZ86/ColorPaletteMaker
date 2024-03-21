import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

export interface ICreateContainerProps {
    children: ReactNode;
}

export interface ISubmitButtonProps {
    handlerClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IPaletteColorForm {
    handleSubmit: SubmitHandler<Inputs>;
    children: ReactNode;
}

export interface ICreateHeaderProps extends ICreateContainerProps { }

export interface ICreateFooterProps extends ICreateContainerProps { }

