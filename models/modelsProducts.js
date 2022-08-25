const { db } = require('./connection');

const modelsProducts = {
  getProducts: async () => {
    const SQL_GET_PRODUCTS = "SELECT * FROM goomer.products";
    const [products] = await db.query(SQL_GET_PRODUCTS);
    return products;
  },

};

module.exports = { modelsProducts };
