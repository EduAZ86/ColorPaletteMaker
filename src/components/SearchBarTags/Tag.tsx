import { FC } from "react"
import { ITagProps } from "./types"
import { Typography } from "../Typography"
import { useDataPaletteStore } from "@/lib/store/dataPaletteStore";


export const Tag: FC<ITagProps> = ({ color, name, _id, size }) => {
    const { addTagsToSend, removeTagToSend } = useDataPaletteStore();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        addTagsToSend({ color, name, _id })
        if (size === 'small') {
            removeTagToSend(name)
        }
    }
    return (
        <span
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
                style={{ cursor: 'pointer' }}
            >
                {name}
            </Typography>
            <span></span>
        </span>
    )
}