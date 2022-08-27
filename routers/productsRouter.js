const express = require('express');
const { controllerProducts } = require('../controllers/controllerProducts ');

const productsRouter = express.Router();

// ROTA GET
productsRouter.get('/', controllerProducts.getProducts);

// ROTA POST
productsRouter.post('/', controllerProducts.postProduct)

module.exports = { productsRouter };