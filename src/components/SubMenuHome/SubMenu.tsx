'use client'
import React from "react"
import useCurrentPressButton from "@/hooks/useCurrentPressButton";
import ThemeSwitcher from "../ThemeSwitcher";
import { ISubMenuProps } from "./types";
import { subMenuOptionType } from "@/class/MenuOptions.class";
import { useDataPaletteStore } from "@/lib/store/dataPaletteStore";


export const SubMenu: React.FC<ISubMenuProps> = ({ subMenu }) => {

    const { currentPress, selectButton } = useCurrentPressButton(subMenu)
    const { setNewOrder, setPopularOrder, setRandomOrder } = useDataPaletteStore()


    return (
        <div className="
            flex 
            flex-row 
            absolute bottom-14 
            w-fit
            h-8 items-center justify-center gap-1
             bg-light-background dark:bg-dark-background rounded-lg px-1
            md:relative md:bottom-0 md:left-0
        ">
            {subMenu.map((item: subMenuOptionType, index: number) => {
                const handleClick = (id: string) => {
                    selectButton(id)
                    if (item.name === "random") {
                        setRandomOrder()
                    }
                    if (item.name === "new") {
                        setNewOrder()
                    }
                    if (item.name === "popular") {
                        setPopularOrder()
                    }

                }
                const name: string = item.name
                const id: string = item.id
                if (id === 'settings') {
                    return (
                        <div
                            className={`
                            text-light-font
                             dark:text-dark-font
                              text-center 
                              px-2 py-1 
                              rounded-lg ${currentPress === id ? 'text-xxs shadow-subMenu dark:shadow-dark-subMenu' : 'text-xxs'}
                        `}
                            key={index}
                        >
                            <ThemeSwitcher
                                key={'settings'}
                            />
                        </div>
                    )
                }
                return (
                    <button
                        className={`
                        text-light-font 
                        dark:text-dark-font 
                        text-center px-2 py-1 
                        rounded-lg ${currentPress === id ? 'text-xxs shadow-subMenu dark:shadow-dark-subMenu' : 'text-xxs'}
                     `}
                        key={index}
                        onClick={() => handleClick(id)}
                    >
                        {name}
                    </button>
                )
            })}
        </div>
    )
}