import { IColorPallete } from "@/types/data";

const KEY = "palettes_fav";

interface IPaletteFavs {
    favs: IColorPallete[]
}

const palettesFavs: IPaletteFavs = {
    favs: []
}

export const saveToLocalStorage = (PaletteFav: IColorPallete) => {
    const currentFavs: IColorPallete[] = getFavsToLocalStorage();
    if (!currentFavs.includes(PaletteFav)) {
        const updateFavs = [...currentFavs, PaletteFav];
        palettesFavs.favs = updateFavs;
        window.localStorage.setItem(KEY, JSON.stringify(palettesFavs));
    }
}

export const getFavsToLocalStorage = (): IColorPallete[] => {
    const localStorage = window.localStorage.getItem(KEY)
    const currentPalettesFavs: IPaletteFavs = localStorage ? JSON.parse(localStorage) : palettesFavs
    return currentPalettesFavs.favs
}

export const removeFromLocalStorage = (IDPaletteFav: string) => {
    const currentFavs: IColorPallete[] = getFavsToLocalStorage();
    const updateFavs = currentFavs.filter((item: IColorPallete) => item._id !== IDPaletteFav)
    palettesFavs.favs = updateFavs;
    window.localStorage.setItem(KEY, JSON.stringify(palettesFavs));
}

