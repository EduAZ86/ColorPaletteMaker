import { options } from "@/constants/navbarOptions"
import React from "react"
import ButtonNavigation from "../ButtonNavigation"
import ThemeSwitcher from "../ThemeSwitcher"


const NavBar:React.FC = () => {
    return (
        <div className='fixed flex flex-col md:flex-row w-screen md:w-36 h-16 md:h-screen bg-current pl-0 md:pl-4 pt-0 left-0 md:top-0 bottom-0 '>
            <div className="flex flex-row md:flex-col w-full h-full aling items-center md:items-start justify-evenly md:justify-start gap-0 md:gap-4 left-0 bg-slate-400 " >
                <ThemeSwitcher/>
                {options.map((item, index) => {
                    return(
                        <ButtonNavigation
                            key={`${index}-${item.name}`}
                            option={item}
                        />
                    )
                })}

            </div>

        </div>
    )
}

export default NavBar