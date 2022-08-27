const Joi = require('joi');

const productValidation = async (body) => {
    const schema = Joi.object({
        photo: Joi.string().required().messages({
            'string.empty': '400|"photo" is required',
            'any.required':  '400|"photo" is required'
        }),
        name: Joi.string().required().min(4).messages({
            'string.min': '400|"name" require four (4) or more characters',
            'string.empty': '400|"name" is required',
            'any.required':  '400|"name" is required'
        }),
        price: Joi.number().required().messages({
            'number.empty': '400|"price" is required',
            'any.required':  '400|"price" is required'
        }),
        category: Joi.string().required().messages({
            'string.empty': '400|"category" is required',
            'any.required':  '400|"category" is required'
        }),
        id_restaurant: Joi.number().required().messages({
            'number.empty': '400|"id_restaurant" is required',
            'any.required':  '400|"id_restaurant" is required'
        }),
    });
    const resp = await schema.validateAsync(body);
    return resp;
}

const productValidationById = async (body) => {
    const schema = Joi.object({
        photo: Joi.string().required().messages({
            'string.empty': '400|"photo" is required',
            'any.required':  '400|"photo" is required'
        }),
        name: Joi.string().required().min(4).messages({
            'string.min': '400|"name" require four (4) or more characters',
            'string.empty': '400|"name" is required',
            'any.required':  '400|"name" is required'
        }),
        price: Joi.number().required().messages({
            'number.empty': '400|"price" is required',
            'any.required':  '400|"price" is required'
        }),
        category: Joi.string().required().messages({
            'string.empty': '400|"category" is required',
            'any.required':  '400|"category" is required'
        }),
    });
    const resp = await schema.validateAsync(body);
    return resp;
}

module.exports = { productValidation, productValidationById }