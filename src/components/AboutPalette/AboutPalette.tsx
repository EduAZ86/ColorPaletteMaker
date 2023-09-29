'use client'
import React from "react";

import FavButton from "../FavButton";
import { ColorPalleteType } from "@/types/paletteColor.type";

interface AboutPaletteProps {
    palette: ColorPalleteType
}

const AboutPalette:React.FC <AboutPaletteProps> = ({palette}) => {

    
    return(
        <div className='
            flex flex-row w-full pt-1 px-1 bg-light-background rounded-xl justify-around items-center
            dark:bg-dark-background 
        '>
            <FavButton
                key={`${palette.idColors}FavButton`}
                idPalette = {palette.idColors}
            />
            <span className='text-xs opacity-70 text-light-font
                dark:text-dark-font
            '>
                8 mounth
            </span>
        </div>
    )
}

export default AboutPalette