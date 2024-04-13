'use client'
import React from "react";
import FavButton from "../FavButton";
import { Typography } from "../Typography";
import { IAboutPalettetProps } from "./types";
import { AboutPaletteContainer } from "./styles.tw";
import DownloadPaletteButton from "../DownloadPaletteButton";
import { setTimeAgo } from "@/utils/timeAgoCalculator";

const AboutPalette: React.FC<IAboutPalettetProps> = ({ palette }) => {
    const arrayColorPalette: string[] = Object.values(palette.colors.colorsExa)
    const timeAgo = setTimeAgo(palette.date.create_date_ms)
    return (
        <AboutPaletteContainer>
            <FavButton
                key={`${palette.idColors}-FavButton`}
                palette={palette}
            />
            <DownloadPaletteButton
                palette={arrayColorPalette}
            />
            <Typography
                variant="label"
            >
                {timeAgo}
            </Typography>
        </AboutPaletteContainer>
    )
}

export default AboutPalette