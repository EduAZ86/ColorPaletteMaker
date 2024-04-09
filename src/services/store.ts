import { IDataPaletteStore } from "@/types/dataPaletteStore.interface";
import { create } from "zustand";
import { getDataPalettesForPage, getDatapaletteByID, postNewPaletteColor, updateSocialColorPalette } from "./fetching";
import { ISendPaletteData } from "@/types/data";
import { TInteraction } from "@/types/fetchParams";

export const useDataPaletteStore = create<IDataPaletteStore>((set, get) => ({
    offset: 0,
    lengthPage: 10,
    paletteColor: [],
    currentPaletteColor: null,
    getAllPaletteForPage: async () => {
        const { offset, lengthPage } = get();
        const morePalettes = await getDataPalettesForPage(offset!, lengthPage!);
        set(state => ({ paletteColor: [...state.paletteColor, ...morePalettes!] }));
        set({ offset: offset! + lengthPage! });
    },
    getPaletteForID: async (idPalette: string) => {
        const currentPalette = await getDatapaletteByID(idPalette)
        set(() => ({ currentPaletteColor: currentPalette }));
    },
    postNewPaletteColor: async (dataPalette: ISendPaletteData) => {
        await postNewPaletteColor(dataPalette);
        const morePalettes = await getDataPalettesForPage(0, 10);
        set(() => ({ paletteColor: morePalettes }));
    },
    updateSocialColorPalette: async (idPalette: string, interaction: TInteraction) => {
        await updateSocialColorPalette(idPalette, interaction);
        const { offset, lengthPage } = get();
        const morePalettes = await getDataPalettesForPage(offset!, lengthPage!);
        set(() => ({ paletteColor: morePalettes }));
    },
}),

)