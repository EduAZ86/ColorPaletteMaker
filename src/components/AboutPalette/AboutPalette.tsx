'use client'
import React from "react";
import FavButton from "../FavButton";
import { Typography } from "../Typography";
import { IAboutPalettetProps } from "./types";
import { AboutPaletteContainer } from "./styles.tw";

const AboutPalette: React.FC<IAboutPalettetProps> = ({ palette }) => {

    return (
        <AboutPaletteContainer>
            <FavButton
                key={`${palette.idColors}FavButton`}
                idPalette={palette.idColors}
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