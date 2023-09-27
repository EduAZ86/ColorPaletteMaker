'use client'
import React from "react";
import { CopyToClipboard } from "@/utils/copyToClipboard";

interface ColorCardProps {
    colorRGB:string;
    colorHEXA:string;
}

const ColorCard:React.FC<ColorCardProps> = ({colorRGB, colorHEXA}) => {
    
   const handleCopy = (color:string) => {
    CopyToClipboard(color)
   }

    return(
        <div className={`
            flex flex-col justify-center w-14 items-center group-hover:gap-2 px-1 py-1
            
        `}>
            <button 
                onClick={() => handleCopy(colorRGB)}
                className={`
                    text-4xs opacity-0 text-light-font h-0
                    group-hover:opacity-90 group-hover:h-fit duration-700 delay-100
                    dark:text-dark-font
                    cursor-pointer            
                `}
            
            >{colorRGB}</button>
            <span 
                className={`
                w-12 h-12 rounded-t-full rounded-b-full
                group-hover:h-24 duration-700
                `}
                style={{background:colorHEXA}}
                />
            <button 
                onClick={() => handleCopy(colorHEXA)}
                className={`
                    text-3xs opacity-0 text-light-font h-0
                    group-hover:opacity-80 group-hover:h-fit duration-700 delay-100
                    dark:text-dark-font
                    cursor-pointer
                `}
                >{colorHEXA}</button>
        </div>
    )
}

export default ColorCard