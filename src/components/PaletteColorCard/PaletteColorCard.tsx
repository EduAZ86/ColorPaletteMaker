import React from 'react'
import AboutPalette from '../AboutPalette'
import { PaletteColor } from '../PaletteColor'
import { PaletteColorCardContainer } from './styles.tw'
import { IPaletteColorCardProps } from './types'

export const PaletteColorCard: React.FC<IPaletteColorCardProps> = ({ paletteColorProp }) => {

    return (
        <PaletteColorCardContainer>
            <PaletteColor
                key={paletteColorProp.idColors}
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
            <AboutPalette
                key={`${paletteColorProp.idColors}AboutPalette`}
                palette={paletteColorProp}
            />
        </PaletteColorCardContainer>
    )
}