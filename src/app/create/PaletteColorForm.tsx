'use client'
import { FC } from "react"
import { IPaletteColorForm } from "./types"

export const PaletteColorForm: FC<IPaletteColorForm> = ({ handleSubmit, children }) => {
    return (
        <form
            className={
                `
                w-full h-full
                flex relative
                flex-col
                justify-center items-center
                gap-6
                
                `
            }
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    )
}