'use client'
import React from "react";
import {BiHeart} from 'react-icons/bi'
import FavButton from "../FavButton";
import DownloadPaletteButton from "../DownloadPaletteButton";

const AboutPalette:React.FC = () => {
    const palette = ['#CA3E47', '#451952', '#662549', '#AE445A', '#F39F5A'];
    return(
        <div className='
            flex flex-row w-full pt-1 px-1 bg-light-background rounded-xl justify-around items-center
            dark:bg-dark-background 
        '>
            <FavButton/>
            <span className='text-xs opacity-70 text-light-font
                dark:text-dark-font
            '>
                8 mounth
            </span>
            <DownloadPaletteButton
                palette={palette}
            />
        </div>
    )
}

export default AboutPalette