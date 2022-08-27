const Joi = require('joi');

const knowErros = {
    RESTAURANT_NOT_EXIST: { code: 404, message: "Restaurant not exist" },
    PRODUCT_NOT_EXIST: { code: 404, message: "Product not exist" },
    RESTAURANT_NOT_HAVE_PRODUCTS: { code: 404, message: "Restaurant not have products" }
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
    if (Joi.isError(err)) {
        const [code, message] = err.message.split('|')
        return res.status(Number(code)).json({ message: `${message}` });
    }
    
    const error = knowErros[err];
    if (error) return res.status(error.code).json({ message: `${error.message}` });
    return res.status(500).json({ message: "Internal Server Error" });
};

module.exports = { middlewareError };