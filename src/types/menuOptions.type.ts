import { subMenuOptionType } from "@/class/MenuOptions.class";

export interface menuOptionsType {
    id: string;
    name: string;
    ref: string;
    icon: React.ReactNode
    subMenu: subMenuOptionType[]
}

export interface CurrentPressButtonHookType {
    currentPress: string;
    selectButton: (id: string) => void;
}