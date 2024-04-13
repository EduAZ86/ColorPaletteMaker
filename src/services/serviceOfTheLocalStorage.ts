import { IColorPallete } from "@/types/data";

export const saveToLocalStorage = (clave: string, palette: IColorPallete) => {
    localStorage.setItem(clave, JSON.stringify(palette));
}

export const getFavsToLocalStorage = () => {
    const palettesFavs: IColorPallete[] = Object.keys(localStorage).map(clave => {
        const valor = localStorage.getItem(clave);
        return valor ? JSON.parse(valor) : null;
    }).filter(valor => valor !== null);
    return palettesFavs
}

export const removeFromLocalStorage = (idPalette: string) => {
    localStorage.removeItem(idPalette);
}
