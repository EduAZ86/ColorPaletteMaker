'use client'
import { useDrawnPalette } from "@/hooks/useDrawnPalette";
import React from "react";
import { BiDownload } from 'react-icons/bi'

interface DownloadPaletteButtonProps {
    palette: string[]
}

const DownloadPaletteButton: React.FC<DownloadPaletteButtonProps> = ({ palette }) => {

    const { canvasRef, downloadPalette } = useDrawnPalette(palette)

    const handleClick = () => {
        downloadPalette()
    }

    return (
        <div
            className={`
                w-fit
            `}
        >
            <canvas className='w-0 h-0' ref={canvasRef} width={500} height={300}></canvas>
            <button
                className={`
                flex 
                w-fit py-1 px-2  rounded-md              
                active:shadow-current-button active:dark:shadow-dark-current-button
                text-center
            `}
                onClick={() => handleClick()}
            >
                <BiDownload />
            </button>
        </div>
    )
}

export default DownloadPaletteButton