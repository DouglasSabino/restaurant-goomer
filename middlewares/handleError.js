const Joi = require('joi');

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err,req, res, next) => {
    if (Joi.isError(err)) {
        const [code, message] = err.message.split('|')
        return res.status(Number(code)).json({ message: `${message}` });
    }
};

module.exports = { middlewareError };