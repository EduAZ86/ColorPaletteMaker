import React from 'react'
import AboutPalette from '../AboutPalette'
import { PaletteColor } from '../PaletteColor'
import { PaletteColorCardContainer } from './styles.tw'
import { IPaletteColorCardProps } from './types'

export const PaletteColorCard: React.FC<IPaletteColorCardProps> = ({ paletteColorProp }) => {

    return (
        <PaletteColorCardContainer>
            <PaletteColor
                key={paletteColorProp._id}
                first_color={paletteColorProp.colors.colorsExa.first_color}
                second_color={paletteColorProp.colors.colorsExa.second_color}
                third_color={paletteColorProp.colors.colorsExa.third_color}
                fourth_color={paletteColorProp.colors.colorsExa.fourth_color}
                fifth_color={paletteColorProp.colors.colorsExa.fifth_color}
                first_color_rgb={paletteColorProp.colors.colorsRGB.first_color_rgb}
                second_color_rgb={paletteColorProp.colors.colorsRGB.second_color_rgb}
                third_color_rgb={paletteColorProp.colors.colorsRGB.third_color_rgb}
                fourth_color_rgb={paletteColorProp.colors.colorsRGB.fourth_color_rgb}
                fifth_color_rgb={paletteColorProp.colors.colorsRGB.fifth_color_rgb}
            />
            <AboutPalette
                key={`${paletteColorProp.idColors}-AboutPalette`}
                palette={paletteColorProp}
            />
        </PaletteColorCardContainer>
    )
}