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
    postRestaurant: async (body) => {
       const { photo, name, addres } = body;
       const SQL_POST_RESTAURANT = 'INSERT INTO goomer.restaurants (photo, name, addres) VALUES (?, ?, ?);';
       const [restaurant] = await db.query(SQL_POST_RESTAURANT, [photo, name, addres]);
       return restaurant;
    },
};

module.exports = { modelsRestaurants };