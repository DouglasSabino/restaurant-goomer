const express = require('express');
const { controllerProducts } = require('../controllers/controllerProducts ');

const productsRouter = express.Router();

productsRouter.get('/', controllerProducts.getProducts);

module.exports = { productsRouter };