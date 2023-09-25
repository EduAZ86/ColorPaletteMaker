import React from 'react'

interface subMenuOptionType {
    id:string;
    name:string;
    
}
export class MenuOptions {
    id:string;
    name:string;
    ref:string;
    icon:React.ReactNode
    subMenu:subMenuOptionType[]

    constructor(
        name:string,
        ref:string,
        icon:React.JSX.Element,
    ){
        this.id = name
        this.name = name
        this.ref = ref
        this.icon = icon
        this.subMenu = []
    }
    public setSubMenu (arrayOptions:string[]) {
        const arrayResp:subMenuOptionType[] = []
        for (let i = 0; i < arrayOptions.length; i++) {
            arrayResp.push({
                id:arrayOptions[i].toLocaleLowerCase(),
                name:arrayOptions[i]
            })
            
        }
        this.subMenu = arrayResp
    }
}