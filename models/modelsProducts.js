const { db } = require('./connection');

const modelsProducts = {
  getProducts: async () => {
    const SQL_GET_PRODUCTS = "SELECT * FROM goomer.products";
    const [products] = await db.query(SQL_GET_PRODUCTS);
    return products;
  },
  getProductById: async (id) => {
    const SQL_GET_PRODUCTS_BT_ID = "SELECT * FROM goomer.products WHERE id=?";
    const [product] = await db.query(SQL_GET_PRODUCTS_BT_ID, [id]);
    return product;
  },
  postProduct: async (body) => {
    const { photo, name, price, category, id_restaurant } = body;
    const SQL_POST_PRODUCTS = "INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (?,?,?,?,?)";
    await db.query(SQL_POST_PRODUCTS, [photo, name, price, category, id_restaurant]);
  },
  putProduct: async (id, body) => {
    const { photo, name, price, category } = body;
    const SQL_PUT_PRODUCT = "UPDATE goomer.products SET photo=?, name=?, price=?, category=? WHERE id=?";
    await db.query(SQL_PUT_PRODUCT, [photo, name, price, category, id]);
  },
  deleteProduct: async (id) => {
    const SQL_DELETE_PRODUCT = "DELETE FROM goomer.products WHERE id=?";
    await db.query(SQL_DELETE_PRODUCT, [id]); 
  },
};

module.exports = { modelsProducts };
