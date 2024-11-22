import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




const reportFraudSchema = new Schema({
    nameofreporter: {type: String, required: true},
    contactofreporter: {type: String, required: true},
    nameofscammer: {type: String, required: true},
    contactofscammer: {type: String, required: true},
    description: {type: String, required:  true},
    fraudimage: {type: String, required: true},
}, {
    timestamps: true
})

reportFraudSchema.plugin(toJSON);

export const ReportFraudModel = model("ReportFraud", reportFraudSchema)