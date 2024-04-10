import { IIncommingDataPalette, ISendPaletteData } from "@/types/data";
import { TInteraction } from "@/types/fetchParams";
import axios, { AxiosResponse } from "axios";

const BASE_URL = "./http://";

const fetchData = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

export const getDataPalettesForPage = async (offset: number, lengthPage: number) => {
    try {
        const response: AxiosResponse<IIncommingDataPalette> = await fetchData.get(`/get?lengthPage=${lengthPage}&offset=${offset}`);
        return response.data.response.data
    } catch (error) {
        console.log(error);
    }
};

export const getDatapaletteByID = async (idPalette: string) => {
    try {
        const response = await fetchData.get(`./getbyid/:${idPalette}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const postNewPaletteColor = async (dataPalette: ISendPaletteData) => {
    try {
        const response = await fetchData.post('./new', dataPalette);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const updateSocialColorPalette = async (idPalette: string, interaction: TInteraction) => {
    try {
        const response = await fetchData.put(`/update?idPalette=${idPalette}&interaction=${interaction}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const findTagsByName = async (name: string) => {
    try {
        const response = await fetchData.get(`/tags/getByName/:${name}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
};