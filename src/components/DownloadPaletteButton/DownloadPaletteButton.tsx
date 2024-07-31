'use client'
import { useDrawnPalette } from "@/hooks/useDrawnPalette";
import React from "react";
import { BiDownload } from 'react-icons/bi'
import { Typography } from "../Typography";
import { IColorPallete } from "@/types/data";
import { useDataPaletteStore } from "@/lib/store/dataPaletteStore";


interface DownloadPaletteButtonProps {
    palette: IColorPallete
}

const DownloadPaletteButton: React.FC<DownloadPaletteButtonProps> = ({ palette }) => {

    const arrayColorPalette: string[] = Object.values(palette.colors.colorsExa)
    const { canvasRef, downloadPalette } = useDrawnPalette(arrayColorPalette)
    const { updateSocialColorPalette } = useDataPaletteStore()

    const handleClick = () => {
        downloadPalette()
        updateSocialColorPalette(palette._id, "download")
    }

    return (
        <div
            className={`
                w-fit flex flex-row items-center
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
            <Typography variant="label">
                {palette.social.downloads}
            </Typography>
        </div>
    )
}

export default DownloadPaletteButton