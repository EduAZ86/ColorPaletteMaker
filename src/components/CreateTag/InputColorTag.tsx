'use client'
import { FC } from "react";
import { IInputColorTagProps } from "./types";


export const InputColorTag: FC<IInputColorTagProps> = ({ register, watch }) => {
    const name = 'color-name-tag';
    const id = 'color-id-tag';

    const watched = `${!watch(name) || watch(name) === '#000000' ? '' : watch(name)}`
    return (
        <div
            className={`
                md:w-20 md:h-32
                w-14 h-20 
                inline-block relative rounded-full overflow-hidden
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
                {...register(name, { required: true })}

            />
            <span
                className={`
                bock absolute
                w-full
                md:top-14 md:left-0
                top-8
                md:text-sm text-3xs
                text-center
                text-light-font
                dark:text-dark-font
            `}
            >{watched.toUpperCase()}</span>
        </div>



    )
}