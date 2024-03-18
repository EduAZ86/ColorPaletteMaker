import { FC } from "react";
import { IColorTagProps } from "./types";

export const ColorTag: FC<IColorTagProps> = ({ color }) => {
    return (
        <span
            className={`
        w-12 
        h-24 
        rounded-t-full rounded-b-full
        group-hover:h-20 duration-700
        `}
            style={{ background: color }}
        />
    )
}