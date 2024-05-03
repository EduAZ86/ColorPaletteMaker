import { FC } from "react";
import { IColorTagProps } from "./types";

export const ColorTag: FC<IColorTagProps> = ({ color }) => {
    return (
        <span
            className={`
        w-12 
        h-24 
        rounded-t-full rounded-b-full      
        `}
            style={{ background: color }}
        />
    )
}