import { IColorPallete } from "@/types/data";
import { ReactNode } from "react";


export interface ICardMapperContainerProps {
    children: ReactNode;
}

export interface ICardMapperCollectionProps {
    arrayColorPalettes: IColorPallete[]
}