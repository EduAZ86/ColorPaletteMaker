import { Schema, model, models } from 'mongoose';

const TagSchema = new Schema({
    name: String,
    color: String
});

const TagModel = models.Tag || model('Tag', TagSchema);

export default TagModel