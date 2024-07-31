
import { IincommigPaletteData } from "@/types/dataApi";
import PaletteColorModel from "../models/paletteColor"
import TagModel from "../models/tags";

import { TInteraction } from "../types/types";
import { postDataPalette } from "@/class/postDataPalette.class";

export const getPalleteByIdController = async (idPalette: string) => {
    const data = await PaletteColorModel.findById(idPalette);
    if (!data) {
        return { success: true, message: 'there is no color palette to show' };
    };
    return { success: true, response: data }
};

export const getAllPalletesByPageController = async (lengthPage: string, offset: string) => {
    console.log('lengthPage', lengthPage, 'offset', offset);
    
    const data = await PaletteColorModel.find()
        .skip(Number(offset))
        .limit(Number(lengthPage))
        .lean();

    if (data.length === 0) {
        return { success: false, messsage: 'There are no color palettes to show' };
    }

    const completeData = await Promise.all(data.map(async (palette) => {
        const completeTags = await Promise.all(palette.tags.map(async (idTag: any) => {
            const tag = await TagModel.findById(idTag).lean();
            return tag;
        }));

        const completeDataPalette = { ...palette, tags: completeTags };
        return completeDataPalette;
    }));

    return { success: true, response: completeData };
};

export const postNewPalleteColorController = async (incommigPaletteData: IincommigPaletteData) => {

    const newDataPaletteObject = new postDataPalette({
        colors: incommigPaletteData.colors,
        createDate_ms: incommigPaletteData.createDate_ms,
        tags: incommigPaletteData.tags
    });
    const foundColorPalette = await PaletteColorModel.findOne({ id: newDataPaletteObject.idColors })
    if (foundColorPalette) {
        throw new Error('the color palette already exists')
    };
    const newDataPalette = new PaletteColorModel(newDataPaletteObject);
    const response = await newDataPalette.save();
    return { success: true, response: response }
};

export const deletePaletteController = async (idPalette: string) => {
    const foundColorPalette = await PaletteColorModel.findById(idPalette);
    if (!foundColorPalette) {
        return { success: true, message: 'there is no color palette to delete' }
    };
    const removed = await foundColorPalette.deleteOne();
    if (!removed) {
        return { success: false, message: 'could not delete palette' };
    };
    return { success: true, response: removed }
};

export const updateSocialColorPaletteController = async (idPalette: string, interaction: TInteraction) => {
    let foundColorPalette = await PaletteColorModel.findById(idPalette);
    if (!foundColorPalette) {
        return { success: true, message: 'there is no color palette to download' }
    };

    let social = foundColorPalette.social || { favs: 0, shares: 0, downloads: 0 };

    const updateVariantSchema: Record<TInteraction, (social: any) => void> = {
        fav: (social: any) => { social.favs! += 1; },
        disfav: (social: any) => {
            if (social.favs < 1) {
                social.favs! += 1
            } else {
                social.favs = 0
            }
        },
        download: (social: any) => { social.downloads! += 1; },
        share: (social: any) => { social.shares! += 1; }
    };
    const updateFunction = updateVariantSchema[interaction];
    if (updateFunction) {
        updateFunction(social);
    } else {
        return { success: false, message: 'Invalid interaction type' };
    }
    foundColorPalette.social = social;
    await foundColorPalette.save();
    return { success: true, message: 'Color palette social updated successfully' };
};

export const findPalettesByTags = async (data: string[] = []) => {
    const palettes = await PaletteColorModel.find({
        tags: { $all: data }
    }).populate('tags')
    if (palettes) {
        return { success: true, response: palettes }
    } else {
        return { success: false, message: 'error find palettes' };
    }
};