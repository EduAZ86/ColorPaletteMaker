'use client'
import { options } from "@/constants/navbarOptions"
import { FC } from "react"

import useCurrentPressButton from "@/hooks/useCurrentPressButton"
import { NavBArSubContainer, NavBarContainer } from "./styles.tw"
import { ButtonNavigation } from "../ButtonNavigation"

const NavBar: FC = () => {

    const { currentPress, selectButton } = useCurrentPressButton(options)

    return (
        <NavBarContainer>
            <NavBArSubContainer >
                {options.map((item, index) => {
                    return (
                        <ButtonNavigation
                            key={`${index}-${item.name}`}
                            setCurrentPressButton={selectButton}
                            currentPressButton={currentPress}
                            option={item}
                        />
                    )
                })}
            </NavBArSubContainer>
        </NavBarContainer>
    )
}

export default NavBar