import { ITagColor } from "@/class/TagColor";
import { ITag } from "@/types/data";
import { ReactNode } from "react";

export interface ISearchBarProps {
    addTagButton: boolean;
}

export interface ISearchBarContainerProps {
    children: ReactNode;
    setOnFocusInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IInputSearchBarProps {
    addTagButton: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface IResultsSearchProps {
    tagsResults: ITag[];
}

type TagSize = 'large' | 'small'

export interface ITagProps extends ITag {
    size: TagSize;
}