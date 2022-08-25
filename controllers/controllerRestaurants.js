const { servicesRestaurants } = require('../services/servicesRestaurants'); 

const controllerRestaurants = {
    getRestaurants: async (req, res) => {
      const restaurants = await servicesRestaurants.getRestaurants();
      res.status(200).json(restaurants);
    }
};

module.exports = { controllerRestaurants }