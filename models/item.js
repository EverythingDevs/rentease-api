import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




const itemSchema = new Schema({
    title: { type: String, required: true },
    location: {type: String, required: true},
    googlemaplink: {type: String, required: true},
    price: { type: String, required: true },
    description: { type: String, required: true },
    amenities: { type: String, required: true },
    category: { type: Types.ObjectId, ref: 'Category' },
    roomstatus: {type: String, required: true},
    image: { type: String, required: true },
    user: { type: Types.ObjectId, required: true, ref: 'Item' }
}, {
    timestamps: true
})

itemSchema.plugin(toJSON);

export const ItemModel = model("Item", itemSchema)