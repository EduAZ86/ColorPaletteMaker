import { ReactNode } from "react";

export interface ICreateTagContainerProps {
    children: ReactNode;
};

export interface ICreateTagHeaderProps{
    children: ReactNode;
};

export interface ICreateTagFooterProps {
    children: ReactNode;
};

export interface ICreateTagForm {
    handleSubmit: SubmitHandler<Inputs>;
    children: ReactNode;
}
