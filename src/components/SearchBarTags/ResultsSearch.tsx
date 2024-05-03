import { FC } from "react";
import { IResultsSearchProps } from "./types";
import { Tag } from "./Tag";

export const ResultsSearch: FC<IResultsSearchProps> = ({ tagsResults }) => {
    return (
        <div
            className={`
            w-fit h-fit            
            mr-2
            flex relative            
            flex-row flex-wrap
            gap-2
            p-4
            bg-light-secundary dark:bg-dark-secundary            
            rounded-lg             
            `}
        >
            {tagsResults?.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        {...item}
                        size="large"
                    />
                )
            })}
        </div>
    )
}