const { servicesRestaurants } = require('../services/servicesRestaurants'); 
const { restaurantValidation } = require('../middlewares/restaurantsValidation');
const { number } = require('joi');

const controllerRestaurants = {

    /** @type {import('express').RequestParamHandler} */
    getRestaurants: async (req, res) => {
      const restaurants = await servicesRestaurants.getRestaurants();
      return res.status(200).json(restaurants);
    },
    /** @type {import('express').RequestParamHandler} */
    getRestaurantsById: async (req, res) => {
      const { id } = req.params;
      const restaurant = await servicesRestaurants.getRestaurantsById(Number(id));
      return res.status(200).json(restaurant);
    },
    /** @type {import('express').RequestParamHandler} */
    postRestaurant: async (req, res, next) => {
      try {
        const body = await restaurantValidation(req.body);
        await servicesRestaurants.postRestaurant(body);
        return res.status(201).json('restaurant created successfully');
      } catch (error) {
        return next(error);
      }
    },
    /** @type {import('express').RequestParamHandler} */
    putRestaurant: async (req, res, next) => {
      const { id } = req.params;
      try {
        const body = await restaurantValidation(req.body);
        await servicesRestaurants.putRestaurant(Number(id), body);
        return res.status(202).json('restaurant updated sucessfully');
      } catch (error) {
        return next(error);
      }
    },
    /** @type {import('express').RequestParamHandler} */
    deleteRestaurant: async (req, res, next) => {
      const { id } = req.params;
      try{
        const restaurant = await servicesRestaurants.getRestaurantsById(Number(id));
        if (restaurant.length === 0) return next('RESTAURANT_NOT_EXIST');
        await servicesRestaurants.deleteRestaurant(Number(id));
        return res.status(204).end();
      }catch (error) {
        return next(error);
      }
    }, 
};

module.exports = { controllerRestaurants }