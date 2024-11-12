import Joi from "joi";

export const signUpUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('user', 'admin')
});

export const logInUserValidator = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


export const updateProfileValidator = Joi.object({
    name: Joi.string(),
    avatar: Joi.string(),
    password: Joi.string(), 
});