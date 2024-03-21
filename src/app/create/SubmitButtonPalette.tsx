import { FC } from "react"
import { ISubmitButtonProps } from "./types"

export const SubmitButtonPalette: FC<ISubmitButtonProps> = ({ handlerClick }) => {
    return (
        <button
            className={`
            w-fit h-5
            text-xs
            text-center
            dark:text-dark-font
            dark:bg-dark-background bg-light-background 
            px-2 pb-2 pt-0 gap-2 text-light-font bg-transparent rounded-lg cursor-pointer 
            active:shadow-press-button active:dark:shadow-dark-press-button                    
            md:flex-row md:justify-start md:h-9 md:w-40 md:font-roboto md:text-xs md:items-center md:pb-2 md:pt-2

        `}           
            type="submit"
        >
            Submit palette
        </button>
    )
}