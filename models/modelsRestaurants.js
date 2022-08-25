const { db } = require('./connection');

const modelsRestaurants = {
    getRestaurants: async () => {
        const SQL_GET_RESTAURANTS = 'SELECT * FROM goomer.restaurants'
        const [restaurants] = await db.query(SQL_GET_RESTAURANTS);
        return restaurants; 
    },
};

module.exports = { modelsRestaurants };