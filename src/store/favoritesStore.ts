'use client'

import { create } from 'zustand'

interface favoritesState {
    palette_favs:string[]
    add_fav:(idPalette:string) => void
    remove_fav:(idPalette:string) => void
    loadStorage:() => void
}


export const useFavoritesStore = create<favoritesState>((set) => ({

    palette_favs:[],
    loadStorage: () => {
        if (typeof window !== 'undefined') {
            const favs_palettes_storage = localStorage.getItem('palettes_favs')
            if (favs_palettes_storage) {
                set({palette_favs: JSON.parse(favs_palettes_storage) })
            }
        }
    },

    add_fav: (idPalette) => set((state) => {
        const current_palette_favs = [...state.palette_favs, idPalette]
        localStorage.setItem('palettes_favs',JSON.stringify(current_palette_favs))
        return {palette_favs: current_palette_favs}
    }    
    ),
    remove_fav: (idPalette) => set(state => {
        const current_palette_favs = state.palette_favs.filter((item)=> item !== idPalette)
        localStorage.setItem('palettes_favs',JSON.stringify(current_palette_favs))
        return {palette_favs: current_palette_favs}      
    })

}))
useFavoritesStore.getState().loadStorage()