import { ReactNode } from "react";

export interface IColorCardProps {
    colorRGB: string;
    colorHEXA: string;
}

export interface IColorCardContainerProps {
    children: ReactNode;
}

type colorType = 'exa' | 'rgb';

export interface IButtonCopyProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    colorSchema: colorType;
    color: string;
}

export interface IColorTagProps {
    color: string;
}