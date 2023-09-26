'use client'
import { useDrawnPalette } from "@/hooks/useDrawnPalette";
import React from "react";
import {BiDownload} from 'react-icons/bi'

interface DownloadPaletteButtonProps {
    palette:string[]
}

const DownloadPaletteButton:React.FC <DownloadPaletteButtonProps>= ({palette}) => {

    const {canvasRef, downloadPalette} = useDrawnPalette(palette)

    const handleClick = () => {
        downloadPalette()
    }

    return(
        <>
           <canvas className='w-0 h-0' ref={canvasRef} width={500} height={300}></canvas>
            <button
                className={`
                flex flex-row w-fit py-2 px-2 rounded-md gap-2
                active:shadow-current-button active:dark:shadow-dark-current-button
            `}
                onClick={() => handleClick()}
            >
                <BiDownload/>
            </button>
        </>
    )
}

export default DownloadPaletteButton