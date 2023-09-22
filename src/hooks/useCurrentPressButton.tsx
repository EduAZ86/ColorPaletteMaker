import React,{useState,useEffect} from "react"
import { CurrentPressButtonHookType } from "@/types/menuOptions.type"

const useCurrentPressButton = (options:any[]):CurrentPressButtonHookType => {
    const [isCurrent, setIsCurrent] = useState(false)
    const [currentPress, setCurrentPress] = useState('')

    useEffect(()=>{
        if (currentPress === '') {
            setCurrentPress(options[0].id)            
        }
        
    },[])
    
    const idButton = (id:string) => {
        setIsCurrent(currentPress === id)
    }

    const selectButton:(id: string) => void = (id:string) => {
        setCurrentPress(id)
    }

    return {currentPress, selectButton, isCurrent, idButton}

}

export default useCurrentPressButton