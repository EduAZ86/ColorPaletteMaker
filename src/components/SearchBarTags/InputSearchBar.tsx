'use client'
import { FC, useState } from "react";
import { IInputSearchBarProps } from "./types";
import { BiSearch, BiX } from 'react-icons/bi';

import { Tag } from "./Tag";
import { ITag } from "@/types/data";
import Link from "next/link";
import { useDataPaletteStore } from "@/lib/store/dataPaletteStore";
export const InputSearchBar: FC<IInputSearchBarProps> = ({ onChange, addTagButton }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { tagsToSend, clearTagsToSend } = useDataPaletteStore()
    const handleFocusInput = () => {
        setIsFocused(true)
    }
    const handleOnBlurInput = () => {
        setIsFocused(false)
    }
    return (
        <div className={`
            w-full
            flex relative
            flex-row
            bg-light-background dark:bg-dark-background
            items-center justify-center
            rounded-lg
            group
            gap-1
            px-2        
        `}>
            {addTagButton && <Link href={'/tag'} style={{ fontSize: '20px', textAlign: 'center', opacity: 0.6 }} >+</Link>}
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
                onFocus={() => handleFocusInput()}
                onBlur={() => handleOnBlurInput()}
                placeholder="Agregue un tag"
            />
        </div>
    )
}