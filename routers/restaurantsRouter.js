const express = require('express');
const { controllerRestaurants } = require('../controllers/controllerRestaurants');

const restaurantsRouter = express.Router();

restaurantsRouter.get('/', controllerRestaurants.getRestaurants);

module.exports = { restaurantsRouter }