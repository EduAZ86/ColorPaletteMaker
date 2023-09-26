import React from 'react'

import PaletteColor from '../PaletteColor'
import AboutPalette from '../AboutPalette'

const PaletteColorCard:React.FC = () => {

    return(
        <div
            className='
                flex flex-col w-fit py-2 px-2 bg-light-background rounded-xl gap-2 group shadow-card
                dark:bg-dark-background dark:shadow-dark-card
            '
        >
            <PaletteColor/>
            <AboutPalette/>
        </div>
    )
}

export default PaletteColorCard