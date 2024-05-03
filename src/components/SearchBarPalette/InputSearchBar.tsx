'use client'
import { FC, useState } from "react";
import { IInputSearchBarProps } from "./types";
import { BiSearch, BiX } from 'react-icons/bi';

export const InputSearchBar: FC<IInputSearchBarProps> = ({ onChange }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

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