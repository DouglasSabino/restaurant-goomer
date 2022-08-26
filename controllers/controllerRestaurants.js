const { servicesRestaurants } = require('../services/servicesRestaurants'); 
const { restaurantValidation } = require('../middlewares/restaurantsValidation');
const { number } = require('joi');

const controllerRestaurants = {
    getRestaurants: async (req, res) => {
      const restaurants = await servicesRestaurants.getRestaurants();
      return res.status(200).json(restaurants);
    },
    getRestaurantsById: async (req, res) => {
      const { id } = req.params;
      const restaurant = await servicesRestaurants.getRestaurantsById(Number(id));
      return res.status(200).json(restaurant);
    },
    postRestaurant: async (req, res, next) => {
      try {
        const body = await restaurantValidation(req.body);
        await servicesRestaurants.postRestaurant(body);
        return res.status(201).json('restaurant created successfully');
      } catch (error) {
        return next(error);
      }
    },
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
};

module.exports = { controllerRestaurants }