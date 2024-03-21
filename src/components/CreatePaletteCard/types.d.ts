import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IInputColorPaletteProps {
    register: UseFormRegister;
    id: string;
    name: string;
}

export interface ICreatePaletteContainerProps {
    children: ReactNode;
}

export interface IImputsContainerProps {
    children: ReactNode;
}

export interface ICreatePaletteCardProps {
    register: UseFormRegister;
}