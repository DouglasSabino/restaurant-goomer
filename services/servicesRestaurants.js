const { modelsRestaurants } = require('../models/modelsRestaurants'); 

const servicesRestaurants = {
    getRestaurants: async () => {
        const restaurants = await modelsRestaurants.getRestaurants();
        return restaurants;
    },
    getRestaurantsById: async (id) => {
        const restaurant = await modelsRestaurants.getRestaurantsById(id);
        return restaurant;
    },
};

module.exports = { servicesRestaurants };
