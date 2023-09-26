import React from "react";
import {BiHeart} from 'react-icons/bi'
import FavButton from "../FavButton";
import DownloadPaletteButton from "../DownloadPaletteButton";

const AboutPalette:React.FC = () => {
    const palette = ['#CA3E47', '#451952', '#662549', '#AE445A', '#F39F5A'];
    return(
        <div className='
            flex flex-row w-full py-1 px-1 bg-light-background rounded-xl justify-around
            dark:bg-dark-background 
        '>
            <FavButton/>
            <button className='text-sm'>
                date
            </button>
            <DownloadPaletteButton
                palette={palette}
            />
        </div>
    )
}

export default AboutPalette