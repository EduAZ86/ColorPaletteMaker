import { FC } from "react";
import { ISearchBarProps } from "./types";
import { SearchBarContanier } from "./styles.tw";
import { InputSearchBar } from "./InputSearchBar";
import { ResultsSearch } from "./ResultsSearch";
import { TagColor } from "@/class/TagColor";
import Link from "next/link";


const exampleTags1 = new TagColor('#fa4b32', 'red',"3dsadasd")
const exampleTags2 = new TagColor('#cfcc3f', 'wite', "asdasdsd43asd")
const exampleTagArrray = [exampleTags1, exampleTags2]

export const SearchBar: FC<ISearchBarProps> = ({ }) => {
    const handleChange = () => { }
    
    return (
        <SearchBarContanier>
            <InputSearchBar
                onChange={handleChange}
            />
            <Link href={'/tag'} >+</Link>
            <ResultsSearch 
                tagsResults={exampleTagArrray}
            />
        </SearchBarContanier>
    )
}