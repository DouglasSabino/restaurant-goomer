const express = require('express');
const { controllerRestaurants } = require('../controllers/controllerRestaurants');

const restaurantsRouter = express.Router();

// ROTAS GET'S
restaurantsRouter.get('/', controllerRestaurants.getRestaurants);
restaurantsRouter.get('/:id', controllerRestaurants.getRestaurantsById);
restaurantsRouter.get('/product/:id', controllerRestaurants.getProductsByRestaurant);

// ROTA POST
restaurantsRouter.post('/', controllerRestaurants.postRestaurant);

// ROTA PUT
restaurantsRouter.put('/:id', controllerRestaurants.putRestaurant);

// ROTA DELETE
restaurantsRouter.delete('/:id', controllerRestaurants.deleteRestaurant);

module.exports = { restaurantsRouter }