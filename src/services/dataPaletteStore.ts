import { IDataPaletteStore } from "@/types/dataPaletteStore.interface";
import { create } from "zustand";
import { findTagsByName, getDataPalettesForPage, getDatapaletteByID, postNewPaletteColor, updateSocialColorPalette } from "./fetching";
import { ISendPaletteData, ITag } from "@/types/data";
import { TInteraction } from "@/types/fetchParams";

export const useDataPaletteStore = create<IDataPaletteStore>((set, get) => ({
    offset: 0,
    lengthPage: 10,
    paletteColor: [],
    tagsToSend: [],
    tagsResults: [],
    currentPaletteColor: null,
    getAllPaletteForPage: async () => {
        const { offset, lengthPage } = get();
        const morePalettes = await getDataPalettesForPage(offset!, lengthPage!);
        set(state => ({ paletteColor: [...state.paletteColor, ...morePalettes!] }));
        set({ offset: offset! + lengthPage! });
    },
    clearPalettes: () => {
        set(() => ({ paletteColor: [] }))
    },
    getPaletteForID: async (idPalette: string) => {
        const currentPalette = await getDatapaletteByID(idPalette)
        set(() => ({ currentPaletteColor: currentPalette }));
    },
    clearCurrentPalette: () => {
        set(() => ({ currentPaletteColor: null }))
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
    addTagsToSend: (tag: ITag) => {
        const { tagsToSend } = get()
        set(() => ({ tagsToSend: [...tagsToSend, tag] }))
    },
    clearTagsToSend: () => {
        set(() => ({ tagsToSend: [] }))
    },
    getTagsResults: async (name: string) => {
        const tagsResultsSearch = await findTagsByName(name)
        set(() => ({ tagsResults: tagsResultsSearch }))
    },
    clearTagsResults: () => {
        set(() => ({ tagsResults: [] }))
    },
    setOffset: (offset: number) => {
        set(() => ({ offset: offset }))
    },
    clearOffset: () => {
        set(() => ({ offset: 0 }))
    },
    setLengthPage: (lengthPage: number) => {
        set(() => ({ lengthPage: lengthPage }))
    }
}),

)