import { IColorPallete, ISendPaletteData, ITag } from "./data";
import { TInteraction } from "./fetchParams";

export interface IDataPaletteStore {
    offset: number;
    lengthPage: number;
    tagsToSend: ITag[];
    tagsResults: ITag[];
    paletteColor: IColorPallete[];
    currentPaletteColor: IColorPallete | null;
    getAllPaletteForPage: () => Promise<void>;
    clearPalettes: () => void;
    getPaletteForID: (idPalette: string) => Promise<void>;
    clearCurrentPalette: () => void
    postNewPaletteColor: (dataPalette: ISendPaletteData) => Promise<void>;
    updateSocialColorPalette: (idPalette: string, interaction: TInteraction) => Promise<void>;
    addTagsToSend: (tag: ITag) => void;
    removeTagToSend: (tagName: string) => void;
    clearTagsToSend: () => void;
    getTagsResults: (name: string) => Promise<void>;
    clearTagsResults: () => void;
    setOffset: (offset: number) => void;
    clearOffset: () => void;
    setLengthPage: (lengthPage: number) => void;
    setRandomOrder: () => void;
    setNewOrder: () => void;
    setPopularOrder: () => void;
    getPaletteForTag: (arrayIdTags: string[]) => Promise<void>;
}