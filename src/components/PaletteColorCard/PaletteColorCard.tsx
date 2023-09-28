'use client'
import React from 'react'
import PaletteColor from '../PaletteColor'
import AboutPalette from '../AboutPalette'
import { ColorPalleteType } from '@/types/paletteColor.type'

const PaletteColorCard:React.FC<{paletteColorProp:ColorPalleteType}> = ({paletteColorProp}) => {

    return(
        <div
            className='
                flex flex-col w-fit h-fit pt-2 pb-1 px-2 bg-light-background rounded-xl group shadow-card
                dark:bg-dark-background dark:shadow-dark-card
            '
        >
            <PaletteColor
                first_color={paletteColorProp.first_color}
                second_color={paletteColorProp.second_color}    
                third_color={paletteColorProp.third_color}    
                fourth_color={paletteColorProp.fourth_color}
                fifth_color={paletteColorProp.fifth_color}
                first_color_rgb={paletteColorProp.fifth_color_rgb}
                second_color_rgb={paletteColorProp.second_color_rgb}    
                third_color_rgb={paletteColorProp.third_color_rgb}    
                fourth_color_rgb={paletteColorProp.fourth_color_rgb}
                fifth_color_rgb={paletteColorProp.fifth_color_rgb}            
            />
            <AboutPalette/>
        </div>
    )
}

export default PaletteColorCard