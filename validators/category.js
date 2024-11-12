import Joi from "joi";

    export const categoryValidationSchema = Joi.object({
       housetype: Joi.string().required(),
        
    
    });

    export const updateCategoryValidationSchema = Joi.object({
        housetype: Joi.string(),
       
    });