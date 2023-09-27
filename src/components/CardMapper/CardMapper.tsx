'use client'
import { arrayPalettes } from '@/types/paletteColor.type'
import React from 'react'
import PaletteColorCard from '../PaletteColorCard'



const CardMapper: React.FC<{ arrayColorPalettes: arrayPalettes }> = ({ arrayColorPalettes }) => {

    return(
        <div
            className='flex flex-row flex-wrap gap-4 justify-center items-center'
        >
            {arrayColorPalettes.map(( item ) => {
                return(
                    <PaletteColorCard
                        key={item.idColors}
                        paletteColorProp = {item}
                    />
                )
            })}
        </div>
    )
}

export default CardMapper