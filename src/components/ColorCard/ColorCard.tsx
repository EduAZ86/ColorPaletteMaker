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
            flex flex-col justify-center items-center group-hover:gap-2 cursor-pointer px-1 py-1
            
        `}>
            <button 
                onClick={() => handleCopy(colorRGB)}
                className={`
                    text-4xs opacity-0 text-light-font
                    group-hover:opacity-90 duration-700 delay-100
                    dark:text-dark-font            
                `}
            
            >{colorRGB}</button>
            <span 
                className={`
                w-10 h-10 rounded-t-full rounded-b-full
                group-hover:h-24 duration-700
                `}
                style={{background:colorHEXA}}
                />
            <button 
                onClick={() => handleCopy(colorHEXA)}
                className={`
                    text-3xs opacity-0 text-light-font
                    group-hover:opacity-80 duration-700 delay-100
                    dark:text-dark-font
                `}
                >{colorHEXA}</button>
        </div>
    )
}

export default ColorCard