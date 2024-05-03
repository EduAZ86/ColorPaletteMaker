export type TLengthPage = "5" | "10" | "20" | "30" | "40" | "50" | "80" | "100" | string;

export type TInteraction = "fav" | "disfav" | "share" | "download";

export interface IGetAllPalettes {
    offset: number;
    lengthPage: number;
}

export interface IIdTagsToFind {
    arrayIdTags: string[];
}
