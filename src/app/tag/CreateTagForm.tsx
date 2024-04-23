'use client'
import { FC } from "react"
import { ICreateTagForm } from "./types"

export const CreateTagForm: FC<ICreateTagForm> = ({ handleSubmit, children }) => {
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