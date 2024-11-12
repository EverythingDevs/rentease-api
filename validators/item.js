import Joi from "joi";

export const itemValidator = Joi.object ({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    category: Joi.string(),
    price: Joi.string().required()
});

export const updateItemValidator = Joi.object ({
    title: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    category: Joi.string(),
    price: Joi.string()
});