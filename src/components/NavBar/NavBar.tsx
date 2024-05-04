'use client'
import { FC } from "react"
import { options } from "@/constants/navbarOptions"
import { ButtonNavigation } from "../ButtonNavigation"
import useCurrentPressButton from "@/hooks/useCurrentPressButton"
import { NavBArSubContainer, NavBarContainer } from "./styles.tw"
import { LogoContainer } from "./LogoContainer"

const NavBar: FC = () => {

    const { currentPress, selectButton } = useCurrentPressButton(options)

    return (
        <NavBarContainer>
            <LogoContainer />
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