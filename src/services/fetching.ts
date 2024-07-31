import { fetchData } from "@/lib/axios/axios.instance";
import { ISendPaletteData, ITag } from "@/types/data";
import { TInteraction } from "@/types/fetchParams";
import axios from "axios";



export const findTagsByName = async (name: string) => {
    try {
        const response = await fetchData.get(`/tags`, {
            params: {
                name: name === "" ? "." : name
            }
        });
        return response.data.data.response

    } catch (error) {
        console.log(error);
    }
};

export const findPalettesByName = async (name: string) => {
    try {
        const response = await fetchData.get(`/paletteColors`, {
            params: {
                name: name
            }
        });
        return response.data.data.response
    } catch (error) {
        console.log(error);
    }
};

export const getPalettesByTag = async (arrayIdTags: string[] = []) => {
    try {
        console.log('Array IDs to find', arrayIdTags);
        const response = await fetchData.get(`/palettesbytag?arrayIdTags=${arrayIdTags}`);
        return response.data.data.response;
    } catch (error) {
        console.log(error);
    }
};

export const getDataPalettesForPage = async (offset: number, lengthPage: number) => {
    try {
        const response = await fetchData.get(`/paletteColors?lengthPage=${lengthPage}&offset=${offset}`);
        return response.data.data.response
    } catch (error) {
        console.log(error);
    }
};

export const getDatapaletteByID = async (idPalette: string) => {
    try {
        const response = await fetchData.get(`/paletteColors/${idPalette}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const postNewPaletteColor = async (dataPalette: ISendPaletteData) => {
    try {
        const response = await fetchData.post('/paletteColors', dataPalette);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const updateSocialColorPalette = async (idPalette: string, interaction: TInteraction) => {
    try {
        const response = await fetchData.put(`/paletteColors/${idPalette}?interaction=${interaction}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const postNewTag = async (dataTag: ITag) => {
    try {
        const response = await fetchData.post('/tags', dataTag);
        return response.data
    } catch (error) {
        console.log(error);
    }
};