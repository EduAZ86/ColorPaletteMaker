import { ISendPaletteData } from "@/types/data";
import { TInteraction } from "@/types/fetchParams";
import axios from "axios";

const BASE_URL = "./http://";

const fetchData = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

export const getDataPalettesForPage = async (offset: number, lengthPage: number) => {
    try {
        const response = await fetchData.get(`/get?lengthPage=${lengthPage}&offset=${offset}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
};

export const getDatapaletteByID = async (idPalette: string) => {
    try {
        const response = await fetchData.get(`./getbyid/:${idPalette}`)
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
        const response = await fetchData.put(`/update?idPalette=${idPalette}&interaction=${interaction}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}