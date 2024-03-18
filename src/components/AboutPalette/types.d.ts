import { ColorPalleteType } from "@/types/paletteColor.type";

export interface IAboutPalettetProps {
    palette: ColorPalleteType;
    date?: string;
}

export interface IAboutPalettetContainerProps {
    children: ReactNode;
}