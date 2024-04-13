import { FC } from "react"
import { ITagProps } from "./types"
import { Typography } from "../Typography"
import { useDataPaletteStore } from "@/services/dataPaletteStore"

export const Tag: FC<ITagProps> = ({ color, name, _id, size }) => {
    const { addTagsToSend, removeTagToSend } = useDataPaletteStore();

    const handleClick = () => {
        addTagsToSend({ color, name, _id })
        if (size === 'small') {
            removeTagToSend(name)
        }
    }
    return (
        <button
            className={`
                w-fit h-fit  py-1
                ${size === 'large' ? 'px-4' : 'px-1'}
                flex relative
                flex-row
                items-center justify-center
                gap-2
                rounded-l-full rounded-r-full
                bg-light-background dark:bg-dark-background
                cursor-pointer
            `}
            onClick={handleClick}
            type="button"
        >
            <span
                className={`
                w-3 h-3 block rounded-full
                cursor-pointer
                `}
                style={{
                    background: color
                }}
            />
            <Typography
                variant="label"
                style={{cursor:'pointer'}}
            >
                {name}
            </Typography>
            <span></span>
        </button>
    )
}