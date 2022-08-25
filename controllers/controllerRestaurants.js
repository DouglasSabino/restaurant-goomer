const { servicesRestaurants } = require('../services/servicesRestaurants'); 

const controllerRestaurants = {
    getRestaurants: async (req, res) => {
      const restaurants = await servicesRestaurants.getRestaurants();
      res.status(200).json(restaurants);
    },
    getRestaurantsById: async (req, res) => {
      const { id } = req.params;
      const restaurant = await servicesRestaurants.getRestaurantsById(Number(id));
      res.status(200).json(restaurant);
    },
};

module.exports = { controllerRestaurants }