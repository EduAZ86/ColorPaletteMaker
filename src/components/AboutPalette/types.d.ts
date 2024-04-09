import { ColorPalleteType } from "@/types/data";

export interface IAboutPalettetProps {
    palette: ColorPalleteType;
    date?: string;
}

export interface IAboutPalettetContainerProps {
    children: ReactNode;
}