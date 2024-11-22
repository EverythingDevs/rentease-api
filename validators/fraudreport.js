import Joi from "joi";

export const FraudReportValidator = Joi.object({
    nameofreporter: Joi.string().required(),
    contactofreporter: Joi.string().required(),
    nameofscammer: Joi.string().required(),
    contactofscammer: Joi.string().required(),
    description: Joi.string().required(),
    fraudimage: Joi.string().required()

});

export const updateFraudReportValidator = Joi.object({
    nameofreporter: Joi.string(),
    contactofreporter: Joi.string(),
    nameofscammer: Joi.string(),
    contactofscammer: Joi.string(),
    description: Joi.string(),
    fraudimage: Joi.string(),

});