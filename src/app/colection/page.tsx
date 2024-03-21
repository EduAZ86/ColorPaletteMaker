"use client"
import { CardMapper } from '@/components/CardMapper'
import { arrayPalettesTEST } from '@/constants/testPalettes'
import { useFavoritesStore } from '@/store/favoritesStore'
import { ColorPalleteType } from '@/types/paletteColor.type'

import React from 'react'

const Colection: React.FC = () => {
  const allFavs = useFavoritesStore((state) => state.palette_favs)

  const filteredFavs = allFavs.filter((idPalette_fav) => idPalette_fav !== undefined);
  const testFav = filteredFavs.map((idPalette_fav) => {
    const match = arrayPalettesTEST.find((item) => item.idColors === idPalette_fav);
    return match;
  });

  return (
    <main className="
        flex w-full h-full flex-col justify-center items-center pl-0 pb-28
        md:pb-0 md:pl-5 md:pr-4
        ">
      {testFav && testFav.length > 0 && <CardMapper arrayColorPalettes={testFav as ColorPalleteType[]} />}
    </main>
  )
}

export default Colection