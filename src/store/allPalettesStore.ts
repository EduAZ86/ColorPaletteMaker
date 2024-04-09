"use client"
import { create } from "zustand"
import { ColorPalleteType, arrayPalettes } from '@/types/data'

interface AllPalettesStore {
    all_Palettes: arrayPalettes
    set_all_palettes:(all_palettes:arrayPalettes) => void
    add_new_palette:(palette:ColorPalleteType) => void
}

export const useAllPalettesStore = create<AllPalettesStore>((set) => ({
 all_Palettes:[],
 set_all_palettes: (all_palettes) => set((state) => ({
    all_Palettes:[...state.all_Palettes].concat(all_palettes)
 }))
 ,
 add_new_palette: (palette) => set((state) => ({
    all_Palettes:[...state.all_Palettes, palette]
 }))

}))