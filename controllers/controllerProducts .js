const { servicesProducts } = require('../services/servicesProducts');
const { productValidation } = require('../middlewares/productsValidation'); 

const controllerProducts = {
    /** @type {import('express').RequestParamHandler} */
    getProducts: async (_req, res, _next) => {
        const products = await servicesProducts.getProducts();
        return res.status(200).json(products);
    },
    /** @type {import('express').RequestParamHandler} */
    postProduct: async (req, res, next) => {
        try {
          const body = await productValidation(req.body)
          await servicesProducts.postProduct(body);
          return res.status(201).json({ message: "created product sucessfully"});
        } catch (error) {
          next(error);  
        }
    },
};

module.exports = { controllerProducts };
