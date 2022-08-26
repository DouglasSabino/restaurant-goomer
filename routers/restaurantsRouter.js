const express = require('express');
const { controllerRestaurants } = require('../controllers/controllerRestaurants');

const restaurantsRouter = express.Router();

// ROTAS GET
restaurantsRouter.get('/', controllerRestaurants.getRestaurants);
restaurantsRouter.get('/:id', controllerRestaurants.getRestaurantsById);

// ROTA POST
restaurantsRouter.post('/', controllerRestaurants.postRestaurant)

module.exports = { restaurantsRouter }