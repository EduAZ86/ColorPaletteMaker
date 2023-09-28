"use client"
import CardMapper from '@/components/CardMapper'
import { arrayPalettesTEST } from '@/constants/testPalettes'
import React from 'react'

const Colection:React.FC = () => {
    const testFav = arrayPalettesTEST.slice(1,4)
    return (
        <main className="
        flex w-full h-full flex-col justify-center items-center pl-0 pb-28
        md:pb-0 md:pl-5 md:pr-4
        ">
          <CardMapper
            arrayColorPalettes={testFav}
          />
      </main>
    )
}

export default Colection