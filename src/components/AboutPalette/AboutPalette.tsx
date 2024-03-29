'use client'
import React from "react";
import FavButton from "../FavButton";
import { Typography } from "../Typography";
import { IAboutPalettetProps } from "./types";
import { AboutPaletteContainer } from "./styles.tw";
import DownloadPaletteButton from "../DownloadPaletteButton";

const AboutPalette: React.FC<IAboutPalettetProps> = ({ palette }) => {
    const arrayColorPalette = [palette.first_color, palette.second_color, palette.third_color, palette.fourth_color, palette.fifth_color]
    return (
        <AboutPaletteContainer>
            <FavButton
                key={`${palette.idColors}FavButton`}
                idPalette={palette.idColors}
            />
            <DownloadPaletteButton
                palette={arrayColorPalette}
            />
            <Typography
                variant="label"
            >
                8 mounth
            </Typography>
        </AboutPaletteContainer>
    )
}

export default AboutPalette