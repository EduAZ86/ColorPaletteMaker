import { arrayPalettes } from "@/types/paletteColor.type";
import { ReactNode } from "react";

export interface ICardMapperProps {
    arrayColorPalettes: arrayPalettes;
}

export interface ICardMapperContainerProps {
    children: ReactNode;
}