'use client'
import { FC, useEffect, useState } from "react";
import { IInputColorTagProps } from "./types";
import { useForm } from "react-hook-form";


export const InputColorTag: FC<IInputColorTagProps> = ({ register, watch }) => {
    const name = 'color-name-tag';
    const id = 'color-id-tag';
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    useEffect(() => {
        if (watch('colection')) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
        return () => {

        }
    }, [watch('colection')])


    const watched = `${!watch(name) || watch(name) === '#000000' || watch(name) === 'transparent' ? '' : watch(name)}`
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
                type="color"
                {...register(name, { required: true })}
                disabled={isDisabled}
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