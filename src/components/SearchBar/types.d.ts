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

export interface ITagProps {
    tagData: ITag;
}