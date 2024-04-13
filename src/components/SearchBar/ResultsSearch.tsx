import { FC } from "react";
import { IResultsSearchProps } from "./types";
import { Tag } from "./Tag";

export const ResultsSearch: FC<IResultsSearchProps> = ({ tagsResults }) => {

    return (
        <div
            className={`
             w-full h-fit
             flex relative
             flex-row flex-wrap
             gap-2             
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