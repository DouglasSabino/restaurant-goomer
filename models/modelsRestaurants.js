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
    putRestaurant: async (id, body) => {
       const { photo, name, addres } = body;
       const SQL_PUT_RESTAURANT = 'UPDATE goomer.restaurants SET photo=?, name=?, addres=? WHERE id=?'
       const [,updated] = await db.query(SQL_PUT_RESTAURANT, [photo, name, addres, id]);
       return updated;
    },
    deleteRestaurant: async (id) => {
        const SQL_DELETE_RESTAURANT = 'DELETE FROM goomer.restaurants WHERE id=?';
        await db.query(SQL_DELETE_RESTAURANT, [id]);
    },
};

module.exports = { modelsRestaurants };