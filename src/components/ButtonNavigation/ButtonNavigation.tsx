"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";
import { IButtonNavigationProps } from "./types";
import { ButtonNavigationComponent, ButtonNavigationContainer } from "./styles.tw";
import { SubMenu } from '../SubMenuHome';

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
