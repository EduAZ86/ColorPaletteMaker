import { IColorPallete } from "@/types/data";
import { ReactNode } from "react";

export interface ICardMapperProps {
    arrayColorPalettes: IColorPallete[];
}

export interface ICardMapperContainerProps {
    children: ReactNode;
}