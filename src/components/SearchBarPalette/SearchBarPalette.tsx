import { FC } from "react";
import { SearchBarContanier } from "./styles.tw";
import { IInputSearchBarProps, ISearchBarContainerProps, ISearchBarProps } from "./types";
import { InputSearchBar } from "./InputSearchBar";


export const SearchBarPalettes:FC<IInputSearchBarProps> = ({onChange}) => {
    return(
        <SearchBarContanier>
            <InputSearchBar
                onChange={onChange}
            />
        </SearchBarContanier>
    )
}