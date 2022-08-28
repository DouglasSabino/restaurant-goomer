const express = require('express');
const { controllerProducts } = require('../controllers/controllerProducts ');

const productsRouter = express.Router();

// ROTA GET
productsRouter.get('/', controllerProducts.getProducts);

// ROTA POST
productsRouter.post('/', controllerProducts.postProduct);

// ROTA PUT
productsRouter.put('/:id', controllerProducts.putProduct);

// ROTA DELETE
productsRouter.delete('/:id', controllerProducts.deleteProduct);

module.exports = { productsRouter };