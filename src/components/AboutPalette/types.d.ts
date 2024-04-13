import { ColorPalleteType, IColorPallete } from "@/types/data";

export interface IAboutPalettetProps {
    palette: IColorPallete;
    date?: string;
}

export interface IAboutPalettetContainerProps {
    children: ReactNode;
}