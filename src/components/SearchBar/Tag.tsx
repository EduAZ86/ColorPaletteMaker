import { FC } from "react"
import { ITagProps } from "./types"
import { Typography } from "../Typography"
import { useDataPaletteStore } from "@/services/dataPaletteStore"

export const Tag: FC<ITagProps> = ({ tagData }) => {
    const { addTags } = useDataPaletteStore();

    const handleClick = () => {
        addTags(tagData)
    }
    return (
        <button
            className={`
                w-fit h-fit px-4 py-1
                flex relative
                flex-row
                items-center justify-center
                gap-2
                rounded-l-full rounded-r-full
                bg-light-background dark:bg-dark-background
            `}
            onClick={handleClick}
        >
            <span
                className={`
                w-3 h-3 block rounded-full
                `}
                style={{
                    background: tagData.color
                }}
            />
            <Typography
                variant="label"
            >
                {tagData.name}
            </Typography>
        </button>
    )
}