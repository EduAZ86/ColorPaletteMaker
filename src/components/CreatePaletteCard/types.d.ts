import { ReactNode } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IInputColorPaletteProps {
    register: UseFormRegister;
    id: string;
    name: string;
    watch: UseFormWatch<FieldValues>;
}

export interface ICreatePaletteContainerProps {
    children: ReactNode;
}

export interface IImputsContainerProps {
    children: ReactNode;
}

export interface ICreatePaletteCardProps extends Pick<IInputColorPaletteProps, 'register' | 'watch'> { }