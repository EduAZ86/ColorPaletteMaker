import TagModel from "../models/tags"
import { ITag } from "../types/data"

export const getTagsByNameController = async (name: string) => {
    let data;
    if (name === ".") {
        data = await TagModel.find({});
    } else {
        data = await TagModel.find({ name: name });
    }
    if (data && data.length > 0) {
        return { success: true, response: data };
    }
    return { response: [], success: false, message: 'there is no tags palette to show' };
};


export const postNewTagsController = async (incommingTag: ITag) => {
    if (incommingTag._id) {
        const foundTag = await TagModel.findById(incommingTag._id)
        if (!foundTag) {
            throw new Error('the tag already exists')
        };
    }
    const newTag = new TagModel({ name: incommingTag.name, color: incommingTag.color });
    const response = newTag.save();
    return { success: true, response: response }
};

export const deleteTagController = async (id: string) => {
    const foundTag = await TagModel.findById(id);
    if (!foundTag) {
        return { success: true, message: 'there is no fuund to tag' }
    }
    const removed = await foundTag.deleteOne()
    if (!removed) {
        return { success: false, message: 'could not delete tag' };
    };
    return { success: true, response: removed }
};

