import { Schema, model, models } from 'mongoose';

const ColorsExaSchema = new Schema({
    first_color: String,
    second_color: String,
    third_color: String,
    fourth_color: String,
    fifth_color: String
});

const ColorsRGBSchema = new Schema({
    first_color_rgb: String,
    second_color_rgb: String,
    third_color_rgb: String,
    fourth_color_rgb: String,
    fifth_color_rgb: String
});

const ColorsPaletteSchema = new Schema({
    colorsExa: ColorsExaSchema,
    colorsRGB: ColorsRGBSchema
});

const DateSchema = new Schema({
    creationDate: String,
    create_date_ms: Number,
    time_ago: String
});

const SocialSchema = new Schema({
    favs: Number,
    shares: Number,
    downloads: Number
});

const PaletteColorSchema = new Schema({
    idColors: String,
    colors: ColorsPaletteSchema,
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    social: SocialSchema,
    date: DateSchema
});

const PaletteColorModel = models.paletteColor || model('paletteColor', PaletteColorSchema)


export default PaletteColorModel