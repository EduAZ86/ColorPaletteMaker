import { IColorPallete } from "./data";

export interface IColectionPalettesStore {
    LocalColection: IColorPallete[];
    addToLocalColection: (palette: IColorPallete) => void;
    getFavsToLocalStorage: () => void;
    removeFromLocalStorage: (clave: string) => void;
    clearLocalColection: () => void;
}