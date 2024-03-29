import { FC } from "react";
import { ISearchBarProps } from "./types";
import { SearchBarContanier } from "./styles.tw";
import { InputSearchBar } from "./InputSearchBar";
import { ResultsSearch } from "./ResultsSearch";
import { TagColor } from "@/class/TagColor";


const exampleTags1 = new TagColor('#fa4b32', 'red')
const exampleTags2 = new TagColor('#cfcc3f', 'wite')
const exampleTagArrray = [exampleTags1, exampleTags2]

export const SearchBar: FC<ISearchBarProps> = ({ }) => {
    const handleChange = () => { }
    const handleClickTag = () => { }
    return (
        <SearchBarContanier>
            <InputSearchBar
                onChange={handleChange}
            />
            <ResultsSearch
                tagsResults={exampleTagArrray}
                handleClick={handleClickTag}
            />
        </SearchBarContanier>
    )
}