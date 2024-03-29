import { ITagColor } from "@/class/TagColor";
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
    tagsResults: ITagColor[];
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ITagProps {
    tagData: ITagColor;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}