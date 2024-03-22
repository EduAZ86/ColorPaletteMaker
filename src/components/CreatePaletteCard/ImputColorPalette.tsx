'use client'
import { FC } from "react";
import { IInputColorPaletteProps } from "./types";

export const InputColorPalette: FC<IInputColorPaletteProps> = ({ register, id, name, watch }) => {
    const watched = `${!watch(name) || watch(name) === '#000000' ? '' : watch(name)}`
    return (
        <div
            className={`
                w-20 h-32 inline-block relative rounded-full overflow-hidden
            `}
        >
            <input
                className={`
                block
                -top-2 -left-1
                cursor-pointer
                absolute
                 w-24 h-36 appearance-none
                rounded-t-full rounded-b-full
                outline-none            
                `}
                id={id}
                name={name}
                type="color"
                {...register(name)}
            />
            <span
                className={`
                bock absolute
                w-full
                top-14 left-0
                text-sm
                text-center
                text-light-font
                dark:text-dark-font
            `}
            >{watched.toUpperCase()}</span>
        </div>



    )
}