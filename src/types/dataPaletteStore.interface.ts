import { IColorPallete, ISendPaletteData } from "./data";
import { TInteraction } from "./fetchParams";

export interface IDataPaletteStore {
    offset?: string;
    lengthPage?: string;
    paletteColor: IColorPallete[];
    currentPaletteColor: IColorPallete | null;
    getAllPaletteForPage: (offset: number, lengthPage: number) => Promise<void>;
    getPaletteForID: (idPalette: string) => Promise<void>;
    postNewPaletteColor: (dataPalette: ISendPaletteData) => Promise<void>;
    updateSocialColorPalette: (idPalette: string, interaction: TInteraction) => Promise<void>;
}