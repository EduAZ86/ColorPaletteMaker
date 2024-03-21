import { ReactNode } from "react";

export interface IPaletteColorProps {
    first_color: string;
    second_color: string;
    third_color: string;
    fourth_color: string;
    fifth_color: string;
    first_color_rgb: string;
    second_color_rgb: string;
    third_color_rgb: string;
    fourth_color_rgb: string;
    fifth_color_rgb: string;
}

export interface IPaletteColorContainerProps {
    children: ReactNode;
}