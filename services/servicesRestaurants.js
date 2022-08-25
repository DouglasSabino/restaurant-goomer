const { modelsRestaurants } = require('../models/modelsRestaurants'); 

const servicesRestaurants = {
    getRestaurants: async () => {
        const restaurants = await modelsRestaurants.getRestaurants();
        return restaurants;
    }
};

module.exports = { servicesRestaurants };
