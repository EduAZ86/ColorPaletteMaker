import { IColectionPalettesStore } from "@/types/colectionPalettesStore.interface";
import { create } from "zustand";
import { getFavsToLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../../services/serviceOfTheLocalStorage";
import { IColorPallete } from "@/types/data";

export const useColectionStore = create<IColectionPalettesStore>((set, get) => ({
    LocalColection: [],
    addToLocalColection: (palette: IColorPallete) => {
        saveToLocalStorage(palette);
        const localColectionPalettes = getFavsToLocalStorage();
        set(() => ({ LocalColection: localColectionPalettes }));
    },
    getFavsToLocalStorage: () => {
        const localColectionPalettes = getFavsToLocalStorage();
        set(() => ({ LocalColection: localColectionPalettes }));
    },
    clearLocalColection: () => {
        set(() => ({ LocalColection: [] }));
    },
    removeFromLocalStorage: (idPalette: string) => {
        removeFromLocalStorage(idPalette);
        const localColectionPalettes = getFavsToLocalStorage();
        set(() => ({ LocalColection: localColectionPalettes }));
    }
}))