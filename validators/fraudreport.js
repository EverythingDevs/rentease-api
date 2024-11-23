import Joi from "joi";

export const FraudReportValidator = Joi.object({
    email: Joi.string().required(),
    nameofreporter: Joi.string().required(),
    contactofreporter: Joi.string().required(),
    dateofevent: Joi.string().required(),
    nameofscammer: Joi.string().required(),
    contactofscammer: Joi.string().required(),
    description: Joi.string().required(),
    fraudimage: Joi.string().required()

});

export const updateFraudReportValidator = Joi.object({
    email: Joi.string(),
    nameofreporter: Joi.string(),
    contactofreporter: Joi.string(),
    dateofevent: Joi.string(),
    nameofscammer: Joi.string(),
    contactofscammer: Joi.string(),
    description: Joi.string(),
    fraudimage: Joi.string(),

});