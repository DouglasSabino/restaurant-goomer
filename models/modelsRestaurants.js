const { db } = require('./connection');

const modelsRestaurants = {
    getRestaurants: async () => {
        const SQL_GET_RESTAURANTS = 'SELECT * FROM goomer.restaurants'
        const [restaurants] = await db.query(SQL_GET_RESTAURANTS);
        return restaurants; 
    },
    getRestaurantsById: async (id) => {
       const SQL_GET_RESTAURANT = 'SELECT * FROM goomer.restaurants WHERE id=?';
       const [restaurant] = await db.query(SQL_GET_RESTAURANT, [id]);
       return restaurant;
    },
};

module.exports = { modelsRestaurants };