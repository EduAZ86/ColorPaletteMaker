'use client'
import React from 'react'
import ColorCard from '../ColorCard'

interface PaletteColorProps {
    first_color:string;
    second_color:string;    
    third_color:string;    
    fourth_color:string;
    fifth_color:string;
    first_color_rgb:string;
    second_color_rgb:string;    
    third_color_rgb:string;    
    fourth_color_rgb:string;
    fifth_color_rgb:string;
}

const PaletteColor:React.FC<PaletteColorProps> = ({
    first_color,
    second_color,    
    third_color,    
    fourth_color,
    fifth_color,
    first_color_rgb,
    second_color_rgb,    
    third_color_rgb,    
    fourth_color_rgb,
    fifth_color_rgb
}) => {

    return(
        <div className='
            flex flex-row w-fit bg-light-background rounded-xl group 
            dark:bg-dark-background 
        '
            >
                <ColorCard
                    key={first_color}
                    colorHEXA={first_color}
                    colorRGB={first_color_rgb}
                />
                <ColorCard
                    key={second_color}
                    colorHEXA={second_color}
                    colorRGB={second_color_rgb}
                />
                <ColorCard
                    key={third_color}
                    colorHEXA={third_color}
                    colorRGB={third_color_rgb}
                />
                <ColorCard
                    key={fourth_color}
                    colorHEXA={fourth_color}
                    colorRGB={fourth_color_rgb}
                />
                <ColorCard
                    key={fifth_color}
                    colorHEXA={fifth_color}
                    colorRGB={fifth_color_rgb}
                />
        </div>
    )
}

export default PaletteColor