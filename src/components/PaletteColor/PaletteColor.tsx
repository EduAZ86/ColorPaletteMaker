import React from 'react'
import ColorCard from '../ColorCard'
import { hexToRgb } from '@/utils/colorsCalculator'

const PaletteColor:React.FC = () => {

    
    const color1 ='#CA3E47'
    const color2 ='#451952'
    const color3 ='#662549'
    const color4 ='#AE445A'
    const color5 ='#F39F5A'
    const colors = [color1,color2,color3,color4,color5]

    return(
        <div className='
            flex flex-row w-fit py-1 px-1 bg-light-background rounded-xl group shadow-button
            dark:bg-dark-background dark:shadow-dark-button
        '>
            {colors.map((item,index) => {
                return(
                    <ColorCard
                        key={index}
                        colorRGB={`(${hexToRgb(item)})`}
                        colorHEXA={item}
                    />
                )
            })}


        </div>
    )
}

export default PaletteColor