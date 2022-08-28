const { servicesProducts } = require('../services/servicesProducts');
const { productValidation, productValidationById } = require('../middlewares/productsValidation'); 

const controllerProducts = {
    /** @type {import('express').RequestParamHandler} */
    getProducts: async (_req, res, _next) => {
        const products = await servicesProducts.getProducts();
        return res.status(200).json(products);
    },
    getProductById: async (id) => {
      try {
        const product = await servicesProducts.getProductsById(Number(id));
        return product
      } catch (error) {
        next(error);
      }
    },
    /** @type {import('express').RequestParamHandler} */
    postProduct: async (req, res, next) => {
        try {
          const body = await productValidation(req.body)
          await servicesProducts.postProduct(body);
          return res.status(201).json({ message: "product created sucessfully"});
        } catch (error) {
          next(error);  
        }
    },
    putProduct: async (req, res, next) => {
      const { id } = req.params;
      try {
        const product = await controllerProducts.getProductById(Number(id));
        if (!product) return next('PRODUCT_NOT_EXIST');
        const body = await productValidationById(req.body);
        await servicesProducts.putProduct(id, body);
        return res.status(200).json({ message: "Product updated sucessfully" });
      } catch (error) {
        next(error);
      }
    },
    deleteProduct: async (req, res, next) => {
      const { id } = req.params;
      try {
        const product = await controllerProducts.getProductById(Number(id));
        if (product.length === 0) return next('PRODUCT_NOT_EXIST');
        await servicesProducts.deleteProduct(Number(id));
        return res.status(204).end();
      } catch (error) {
        next(error);
      }
    },
};

module.exports = { controllerProducts };
