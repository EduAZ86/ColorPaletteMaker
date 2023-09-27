import React,{useState,useEffect} from "react"
import { CurrentPressButtonHookType } from "@/types/menuOptions.type"

const useCurrentPressButton = (options:any[]):CurrentPressButtonHookType => {
   
    const [currentPress, setCurrentPress] = useState('')

    useEffect(()=>{
        if (currentPress === '') {
            setCurrentPress(options[0].id)            
        }
        
    },[])

    const selectButton:(id: string) => void = (id:string) => {
        setCurrentPress(id)
    }

    return {currentPress, selectButton}

}

export default useCurrentPressButton