'use client'
import { ColorPalleteType, arrayPalettes } from '@/types/paletteColor.type'
import { create } from 'zustand'

interface favoritesState {
    palette_favs:arrayPalettes
    add_fav:(palette:ColorPalleteType) => void
    remove_fav:(palette:ColorPalleteType) => void
}

function getFromLocalStorage(key:string, defaultValue:arrayPalettes) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
}


export const useFavoritesStore = create<favoritesState>((set) => ({

    palette_favs: getFromLocalStorage('palette_favs', []),

    add_fav: (palette) => set((state) => {
        const current_palette_favs = [...state.palette_favs, palette]
        localStorage.setItem('palette_favs',JSON.stringify(current_palette_favs))
        return {palette_favs: current_palette_favs}
    }    
    ),
    remove_fav: (palette) => set(state => {
        const current_palette_favs = state.palette_favs.filter((item)=> item.idColors !== palette.idColors)
        localStorage.setItem('palette_favs',JSON.stringify(current_palette_favs))
        return {palette_favs: current_palette_favs}      
    })

}))