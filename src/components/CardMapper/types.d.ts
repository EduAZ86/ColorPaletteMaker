import { arrayPalettes } from "@/types/data";
import { ReactNode } from "react";

export interface ICardMapperProps {
    arrayColorPalettes: arrayPalettes;
}

export interface ICardMapperContainerProps {
    children: ReactNode;
}