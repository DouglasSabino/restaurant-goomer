const { servicesProducts } = require('../services/servicesProducts');

const controllerProducts = {
    /** @type {import('express').RequestParamHandler} */
    getProducts: async (_req, res, _next) => {
        const products = await servicesProducts.getProducts();
        return res.status(200).json(products);
    },
    /** @type {import('express').RequestParamHandler} */
    postProduct: async (req, res, _next) => {
        await servicesProducts.postProduct(req.body);
        return res.status(201).json('created product sucessfully');
    },
};

module.exports = { controllerProducts };
