'use client'
import React from "react";
import { CopyToClipboard } from "@/utils/copyToClipboard";
import { IColorCardProps } from "./types";
import { ColorCardContainer } from "./styles.tw";
import { ButtonCopy } from "./ButtonCopy";
import { ColorTag } from "./ColorTag";


const ColorCard: React.FC<IColorCardProps> = ({ colorRGB, colorHEXA }) => {

    const handleCopy = (color: string) => {
        CopyToClipboard(color)
    }

    return (
        <ColorCardContainer>
            <ButtonCopy
                key={'colorRGB'}
                color={colorRGB}
                colorSchema="rgb"
                handleClick={() => handleCopy(colorRGB)}
            />
            <ColorTag color={colorHEXA} />
            <ButtonCopy
                key={'colorEXA'}
                colorSchema="exa"
                color={colorHEXA}
                handleClick={() => handleCopy(colorHEXA)}
            />
        </ColorCardContainer>
    )
}

export default ColorCard