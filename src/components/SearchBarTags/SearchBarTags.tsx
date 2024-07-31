'use client'
import { ISearchBarProps } from "./types";
import { ResultsSearch } from "./ResultsSearch";
import { FC, useEffect, useState } from "react";
import { SearchBarContanier } from "./styles.tw";
import { InputSearchBar } from "./InputSearchBar";
import { useDataPaletteStore } from "@/lib/store/dataPaletteStore";


export const SearchBarTags: FC<ISearchBarProps> = ({ addTagButton }) => {

    const [nameTag, setNameTag] = useState<string>('');
    const [onFocusInput, setOnFocusInput] = useState<boolean>(false);
    const { tagsResults, getTagsResults, clearTagsResults } = useDataPaletteStore();

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
        <SearchBarContanier
            setOnFocusInput={setOnFocusInput}
        >
            <InputSearchBar
                onChange={handleChange}
                addTagButton={addTagButton}
            />
            {onFocusInput &&
                <ResultsSearch
                    tagsResults={tagsResults}
                />
            }
        </SearchBarContanier>
    )
}