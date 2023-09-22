
export interface menuOptionsType {
    id:string;
    name:string;
    ref:string;
    icon: React.ReactNode
    subMenu:subMenuOptionType[]
}

export interface subMenuOptionType {
    id:string;
    name:string;
}

export interface CurrentPressButtonHookType {
    currentPress: string;
    selectButton: (id: string) => void;
  }