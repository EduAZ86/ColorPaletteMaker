import React from 'react'

export interface subMenuOptionType {
    id: string;
    name: string;

}
interface IArrayOptions {
    name: string;

}
export class MenuOptions {
    id: string;
    name: string;
    ref: string;
    icon: React.ReactNode
    subMenu: subMenuOptionType[]


    constructor(
        name: string,
        ref: string,
        icon: React.JSX.Element,
    ) {
        this.id = name
        this.name = name
        this.ref = ref
        this.icon = icon
        this.subMenu = []
    }
    public setSubMenu(arrayOptions: IArrayOptions[]) {
        const arrayResp: subMenuOptionType[] = arrayOptions.map((item) => {
            const id = item.name ? item.name.toLocaleLowerCase() : "";
            const newOption: subMenuOptionType = {
                id: id,
                name: item.name
            }
            return newOption
        })
        this.subMenu = arrayResp
    }
}