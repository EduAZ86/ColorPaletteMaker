"use client"
import { menuOptionsType } from "@/types/menuOptions.type";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";
import SubMenu from "../SubMenuHome";
import { IButtonNavigationProps } from "./types";
import { ButtonNavigationComponent, ButtonNavigationContainer } from "./styles.tw";



export const ButtonNavigation: React.FC<IButtonNavigationProps> = ({ option, currentPressButton, setCurrentPressButton }) => {

    const router = useRouter()

    const [currentPress, setCurrentPress] = useState(false)

    useEffect(() => {
        setCurrentPress(option.name === currentPressButton)

    }, [currentPressButton])



    const handleClick = (id: string) => {
        setCurrentPressButton(id)
        router.push(option.ref)

    }

    return (
        <ButtonNavigationContainer>
            <ButtonNavigationComponent
                option={option}
                currentPress={currentPress}
                handlerClick={() => handleClick(option.id)}
            />
            {currentPress && (option.subMenu.length > 0) && <SubMenu
                key={option.name}
                subMenu={option.subMenu}
            />}
        </ButtonNavigationContainer>
    )
}
