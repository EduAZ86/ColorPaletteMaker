import { FC } from "react";
import { IResultsSearchProps } from "./types";
import { Tag } from "./Tag";
import { Typography } from "../Typography";

export const ResultsSearch: FC<IResultsSearchProps> = ({ tagsResults }) => {

    const tagsColor = tagsResults.filter(tag => tag.color)
    const tagsColection = tagsResults.filter(tag => tag.color === undefined)

    return (
        <div
            className={`
            w-fit h-fit
            flex flex-col            
            
            `}
        >
            <div>
                <Typography variant="label" >colors</Typography>
                <div
                    className={`
                    mr-2
                    flex relative            
                    flex-row flex-wrap
                    gap-2
                    p-4
                    bg-light-secundary dark:bg-dark-secundary            
                    rounded-lg 
                    `}
                >
                    {tagsColor?.map((item, index) => {
                        return (
                            <Tag
                                key={index}
                                {...item}
                                size="large"
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                <Typography variant="label" >collections</Typography>
                <div
                    className={`
                    mr-2
                    flex relative            
                    flex-row flex-wrap
                    gap-2
                    p-4
                    bg-light-secundary dark:bg-dark-secundary            
                    rounded-lg 
                    `}
                >
                    {tagsColection?.map((item, index) => {
                        return (
                            <Tag
                                key={index}
                                {...item}
                                size="large"
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}