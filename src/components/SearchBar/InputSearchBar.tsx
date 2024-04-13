'use client'
import { FC, useState } from "react";
import { IInputSearchBarProps } from "./types";
import { BiCross, BiSearch, BiX } from 'react-icons/bi';
import { useDataPaletteStore } from "@/services/dataPaletteStore";
import { Tag } from "./Tag";
import { ITag } from "@/types/data";
export const InputSearchBar: FC<IInputSearchBarProps> = ({ onChange }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { tagsToSend, clearTagsToSend } = useDataPaletteStore()
    return (
        <div className={`
            w-full
            flex relative
            flex-row
            bg-light-background dark:bg-dark-background
            items-center justify-center
            rounded-lg
            group        
        `}>
            {tagsToSend?.map((tag: ITag, index: number) => <Tag {...tag} size="small" key={`${index}-${tag.name}`} />)}
            {tagsToSend.length > 0 && <span
                onClick={() => clearTagsToSend()}
                className={
                    `
                    flex flex-row
                    items-center justify-center
                    px-1
                    text-xl
                    text-light-secundary
                    dark:text-dark-secundary 
                    cursor-pointer           
                `}
            >
                <BiX />
            </span>}
            {!isFocused && <span
                className={
                    `
                    flex flex-row
                    items-center justify-center
                    px-1
                    text-xl
                    text-light-secundary
                    dark:text-dark-secundary            
                `}
            >
                <BiSearch />
            </span>}
            <input
                className={`
                    w-full h-9 
                    rounded-lg                    
                    bg-transparent
                    focus:px-2
                    duration-700
                `}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Agregue un tag"
            />
        </div>
    )
}