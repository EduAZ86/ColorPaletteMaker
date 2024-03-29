import { FC } from "react";
import { IResultsSearchProps } from "./types";
import { Tag } from "./Tag";

export const ResultsSearch: FC<IResultsSearchProps> = ({ tagsResults, handleClick }) => {

    return (
        <div
            className={`
             w-full h-fit
             flex relative
             flex-row flex-wrap
             gap-2             
            `}
        >
            {tagsResults.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        tagData={item}
                        handleClick={handleClick}
                    />
                )
            })}
        </div>
    )
}