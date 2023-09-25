'use client'
import React from "react"
import { subMenuOptionType } from "@/types/menuOptions.type";
import useCurrentPressButton from "@/hooks/useCurrentPressButton";
import ThemeSwitcher from "../ThemeSwitcher";


interface SubMenuProps {
    subMenu: subMenuOptionType[];
  }

const SubMenu:React.FC <SubMenuProps> = ({subMenu}) => {

    const {currentPress,selectButton} = useCurrentPressButton(subMenu)

    const handleClick = (id:string) => {
        selectButton(id)
    }

    return(
        <div className="
            flex flex-row absolute bottom-14 w-fit left-[-85%] h-8 items-center justify-center gap-1 bg-light-background dark:bg-dark-background rounded-lg px-1
            md:relative md:bottom-0 md:left-0
        ">
            {subMenu.map((item:subMenuOptionType,index:number)=>{
                const id:string = item.id
                if (id === 'settings') {
                    return(
                        <div className={`
                        text-light-font dark:text-dark-font text-center px-2 py-1 rounded-lg ${currentPress === id?'text-xxs shadow-subMenu dark:shadow-dark-subMenu':'text-xxs'}
                        `}>
                            <ThemeSwitcher/>
                        </div>
                    )
                }
                
                return(
                    <button className={`
                     text-light-font dark:text-dark-font text-center px-2 py-1 rounded-lg ${currentPress === id?'text-xxs shadow-subMenu dark:shadow-dark-subMenu':'text-xxs'}
                     `}                        
                        key={index}
                        onClick={() => handleClick(id)}
                    >
                        {item.name}
                    </button>
                )
            })}
        </div>
    )
}

export default SubMenu