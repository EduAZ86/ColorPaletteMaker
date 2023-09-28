'use client'
import React from "react";

import FavButton from "../FavButton";

const AboutPalette:React.FC = () => {

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
        </div>
    )
}

export default AboutPalette