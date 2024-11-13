import Joi from "joi";

export const itemValidator = Joi.object ({
    title: Joi.string().required(),
    location: Joi.string().required(),
    googlemaplink: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    amenities: Joi.string().required(),
    category: Joi.string().required(),
    roomstatus: Joi.string().required(),
    image: Joi.string().required(),
});

export const updateItemValidator = Joi.object ({
    title: Joi.string(),
    location: Joi.string(),
    googlemaplink: Joi.string(),
    price: Joi.string(),
    description: Joi.string(),
    amenities: Joi.string(),
    category: Joi.string(),
    roomstatus: Joi.string(),
    image: Joi.string(),
});