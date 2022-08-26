const Joi = require('joi');

const knowErros = {
    RESTAURANT_NOT_EXIST: { code: 404, message: "Restaurant not exist" },
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err,req, res, next) => {
    if (Joi.isError(err)) {
        const [code, message] = err.message.split('|')
        return res.status(Number(code)).json({ message: `${message}` });
    }
    
    const error = knowErros[err];
    if (error) return res.status(error.code).json(error.message);
    return res.status(500).json('Internal server error');
};

module.exports = { middlewareError };