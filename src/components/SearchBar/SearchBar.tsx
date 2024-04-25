'use client'
import Link from "next/link";
import { ISearchBarProps } from "./types";
import { TagColor } from "@/class/TagColor";
import { ResultsSearch } from "./ResultsSearch";
import { FC, useEffect, useState } from "react";
import { SearchBarContanier } from "./styles.tw";
import { InputSearchBar } from "./InputSearchBar";
import { useDataPaletteStore } from "@/services/dataPaletteStore";


const exampleTags1 = new TagColor('#fa4b32', 'red', "3dsadasd")
const exampleTags2 = new TagColor('#cfcc3f', 'wite', "asdasdsd43asd")
const exampleTagArrray = [exampleTags1, exampleTags2]

export const SearchBar: FC<ISearchBarProps> = ({ }) => {

    const [nameTag, setNameTag] = useState<string>('')
    const { tagsResults, getTagsResults, clearTagsResults } = useDataPaletteStore()

    useEffect(() => {
        getTagsResults(nameTag)
        return () => {
            clearTagsResults()
        }
    }, [nameTag])

    const handleChange = (e: any) => {
        setNameTag(e.target.value)
    }
    return (
        <SearchBarContanier>
            <InputSearchBar
                onChange={handleChange}
            />
            <Link href={'/tag'} >+</Link>
            <ResultsSearch
                tagsResults={tagsResults}
            />
        </SearchBarContanier>
    )
}