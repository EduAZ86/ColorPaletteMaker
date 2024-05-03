
interface IColors {
    colorsExa: IColorsExa;
    colorsRGB: IColorsRGB;
}

interface IDate {
    creationDate: string;
    create_date_ms: number;
    time_ago: string;
}

interface ISocial {
    favs: number;
    shares: number;
    downloads: number;
}

export interface IColorsExa {
    first_color: string;
    second_color: string;
    third_color: string;
    fourth_color: string;
    fifth_color: string;
}

export interface IColorsRGB {
    first_color_rgb: string;
    second_color_rgb: string;
    third_color_rgb: string;
    fourth_color_rgb: string;
    fifth_color_rgb: string;
}

export interface ITag {
    name: string;
    color: string;
    _id: string;
}

export interface IColorPallete {
    _id: string;
    idColors: string;
    colors: IColors;
    tags: ITag[];
    social: ISocial;
    date: IDate;
}

interface IIncommingDataPaletteResponse {
    data: IColorPallete[];
}

export interface IIncommingDataPalette {
    response: IIncommingDataPaletteResponse;
    success: boolean;

}
export interface ISendPaletteData {
    colors: IColorsExa;
    tags: ITag[];
    createDate_ms: number;
}
