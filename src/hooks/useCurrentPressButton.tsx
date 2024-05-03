import React, { useState, useEffect } from "react"
import { CurrentPressButtonHookType, menuOptionsType } from "@/types/menuOptions.type"
import { usePathname } from "next/navigation"

const useCurrentPressButton = (options: menuOptionsType[]): CurrentPressButtonHookType => {

    const [currentPress, setCurrentPress] = useState('')
    const pathName = usePathname().slice(1)

    useEffect(() => {
        if (currentPress === '') {
            setCurrentPress(options[0]?.id)
        }
    }, [pathName])
    const selectButton: (id: string) => void = (id: string) => {
        setCurrentPress(id)
    }
    return { currentPress, selectButton }
}

export default useCurrentPressButton