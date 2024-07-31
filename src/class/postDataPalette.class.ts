import { hexToRgb } from "../utils/colorsCalculator";
import { IColorPallete, IColors, IColorsExa, IDate, ISocial, ITag, IincommigPaletteData } from "@/types/dataApi";


export class postDataPalette  {
    idColors: string;
    colors: IColors;
    tags: ITag[];
    social: ISocial;
    date: IDate;
    constructor(data: IincommigPaletteData) {
        this.idColors = this.idGenerator(data.colors);
        this.tags = data.tags;
        this.date = {
            create_date_ms: data.createDate_ms,
            creationDate: this.stringCreateData(data.createDate_ms),
            time_ago: '0 seconds'
        };
        this.social = {
            downloads: 0,
            favs: 0,
            shares: 0
        };
        this.colors = {
            colorsExa: data.colors,
            colorsRGB: {
                first_color_rgb: hexToRgb(data.colors.first_color),
                second_color_rgb: hexToRgb(data.colors.second_color),
                third_color_rgb: hexToRgb(data.colors.third_color),
                fourth_color_rgb: hexToRgb(data.colors.fourth_color),
                fifth_color_rgb: hexToRgb(data.colors.fifth_color)
            }
        };

    }
    private idGenerator(colors: IColorsExa) {
        const first = colors.first_color.replace(/^#/, '');
        const second = colors.second_color.replace(/^#/, '');
        const third = colors.third_color.replace(/^#/, '');
        const fourth = colors.fourth_color.replace(/^#/, '');
        const fifth = colors.fifth_color.replace(/^#/, '');

        return `${first}-${second}-${third}-${fourth}-${fifth}`
    }

    private stringCreateData(date_ms: number) {
        const dateString = new Date(date_ms).toLocaleString();
        return dateString
    }

}