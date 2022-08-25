const { servicesProducts } = require('../services/servicesProducts');

const controllerProducts = {
    /** @type {import('express').RequestParamHandler} */
    getProducts: async (_req, res) => {
        const products = await servicesProducts.getProducts();
        res.status(200).json(products);
    },
};

module.exports = { controllerProducts };
