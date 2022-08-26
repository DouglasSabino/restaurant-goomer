const Joi = require('joi');

const restaurantValidation = async (body) => {
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
        addres: Joi.string().required().min(10).messages({
            'string.min': '400|"addres" require ten (10) or more characters',
            'string.empty': '400|"addres" is required',
            'any.required':  '400|"addres" is required'
        }),
    });
    const resp = await schema.validateAsync(body);
    return resp;
}

module.exports = { restaurantValidation }