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
    postRestaurant: async (body) => {
        const restaurant = await modelsRestaurants.postRestaurant(body);
        return restaurant;
    },
    putRestaurant: async (id, body) => {
        const updated = await modelsRestaurants.putRestaurant(id, body);
        return updated;
    },
    deleteRestaurant: async (id) => {
        await modelsRestaurants.deleteRestaurant(id);
    },
};

module.exports = { servicesRestaurants };
