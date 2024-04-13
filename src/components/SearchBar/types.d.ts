import { ITagColor } from "@/class/TagColor";
import { ITag } from "@/types/data";
import { ReactNode } from "react";

export interface ISearchBarProps {
}

export interface ISearchBarContainerProps {
    children: ReactNode;
}

export interface IInputSearchBarProps {
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface IResultsSearchProps {
    tagsResults: ITag[];
}

type TagSize = 'large' | 'small'

export interface ITagProps extends ITag {
    size: TagSize;
}