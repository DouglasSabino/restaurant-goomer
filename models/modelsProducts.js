const { db } = require('./connection');

const modelsProducts = {
  getProducts: async () => {
    const SQL_GET_PRODUCTS = "SELECT * FROM goomer.products";
    const [products] = await db.query(SQL_GET_PRODUCTS);
    return products;
  },
  postProduct: async (body) => {
    const { photo, name, price, category, id_restaurant } = body;
    const SQL_POST_PRODUCTS = "INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (?,?,?,?,?)";
    await db.query(SQL_POST_PRODUCTS, [photo, name, price, category, id_restaurant])
  },
};

module.exports = { modelsProducts };
