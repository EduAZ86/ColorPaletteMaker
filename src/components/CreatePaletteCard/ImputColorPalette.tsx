'use client'
import { FC, useState } from "react";
import { IInputColorPaletteProps } from "./types";

export const InputColorPalette: FC<IInputColorPaletteProps> = ({ register, id, name }) => {
    const [inputValue, setInputValue] = useState<string>('')
    return (
        <div
            className={`
                w-16 h-32 inline-block relative rounded-full overflow-hidden
            `}
        >
            <input
                className={`
                block
                -top-2 -left-1
                cursor-pointer
                absolute
                 w-20 h-36 appearance-none
                rounded-t-full rounded-b-full
                outline-none            
                `}
                onChange={(e) => setInputValue(e.target.value)}
                id={id}
                name={name}
                type="color"
                {...register}
            />
            <span
            className={`
                bock absolute
                top-14 left-0
                text-sm
            `}
            >{inputValue.toUpperCase()}</span>
        </div>



    )
}