'use client'
import { options } from "@/constants/navbarOptions"
import React, { useState, useEffect } from "react"
import ButtonNavigation from "../ButtonNavigation"
import useCurrentPressButton from "@/hooks/useCurrentPressButton"

const NavBar:React.FC = () => {
 
    const {currentPress, selectButton} = useCurrentPressButton(options)

    return (
        <div className='fixed flex flex-col bg-light-background w-screen h-16 pl-0 pt-0 left-0 bottom-0 shadow-bar z-20
          dark:bg-dark-background dark:shadow-dark-bar
          md:flex-row  md:w-44  md:pl-2  md:top-0 md:h-screen md:shadow-bar'>
            <div className="flex flex-row w-full h-full aling items-center justify-evenly gap-4 left-0 bg-light-background 
            dark:bg-dark-background
            md:flex-col md:items-start md:justify-start md:gap-4" >

                {options.map((item, index) => {
                    return(
                        <ButtonNavigation
                            key={`${index}-${item.name}`}            
                            setCurrentPressButton = {selectButton}
                            currentPressButton = {currentPress}
                            option={item}
                        />
                    )
                })}

            </div>

        </div>
    )
}

export default NavBar