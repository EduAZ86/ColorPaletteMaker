import { IDataPaletteStore } from "@/types/dataPaletteStore.interface";
import { create } from "zustand";
import { findTagsByName, getDataPalettesForPage, getDatapaletteByID, getPalettesByTag, postNewPaletteColor, updateSocialColorPalette } from "../../services/fetching";
import { IColorPallete, ISendPaletteData, ITag } from "@/types/data";
import { TInteraction } from "@/types/fetchParams";

export const useDataPaletteStore = create<IDataPaletteStore>((set, get) => ({
    offset: 0,
    lengthPage: 10,
    paletteColor: [],
    tagsToSend: [],
    tagsResults: [],
    currentPaletteColor: null,
    addPalettes: (newPalettes) => set((state) => ({
        paletteColor: [...state.paletteColor, ...newPalettes]
    })),
    clearPalettes: () => {
        set(() => ({ paletteColor: [] }))
    },
    getPaletteForID: async (idPalette: string) => {
        const currentPalette = await getDatapaletteByID(idPalette)
        set(() => ({ currentPaletteColor: currentPalette }));
    },
    clearCurrentPalette: () => {
        set(() => ({ currentPaletteColor: null }))
    }
    ,
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
        const { tagsToSend } = get();
        const tagExists = tagsToSend.some(existingTag => existingTag.name === tag.name);
        if (!tagExists) {
            set((prevState) => ({ tagsToSend: [...prevState.tagsToSend, tag] }));
        }
    },
    removeTagToSend: (tagName: string) => {
        set((prevState) => ({
            tagsToSend: prevState.tagsToSend.filter(tag => tag.name !== tagName)
        }));
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
    },
    setPopularOrder: () => {
        set((state) => ({
            paletteColor: [...state.paletteColor].sort((a, b) => {
                return b.social.favs - a.social.favs;
            })
        }));
    },
    setNewOrder: () => {
        set((state) => ({
            paletteColor: [...state.paletteColor].sort((a, b) => {
                return b.date.create_date_ms - a.date.create_date_ms;
            })
        }));
    },
    setRandomOrder: () => {
        set((state) => ({
            paletteColor: [...state.paletteColor].sort(() => Math.random() - 0.5)
        }));
    },
    
    getPaletteForTag: async (arrayIdTags) => {
        const palettesForNameTag: IColorPallete[] = await getPalettesByTag(arrayIdTags)
        set(() => ({
            paletteColor: palettesForNameTag
        }));
    }
}),
)