import { FC } from "react";
import { IInputNameTagProps } from "./types";

export const InputNameTag: FC<IInputNameTagProps> = ({ register }) => {
    const name = 'name-name-tag';
    const id = 'id-name-tag';
    return (
        <div
            className={`
            md:w-1/3 md:h-16
            
            flex 
            flex-row relative
            justify-center items-center
            gap-4
        `}
        >
            <label>name</label>
            <input
                className={`
                    w-full h-8 rounded-md
                    px-2
                    bg-light-background dark:bg-dark-background
                `}
                id={id}
                name={name}
                type="text"
                {...register(name, { required: true })}
            />
        </div>
    )
}