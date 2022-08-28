const { modelsProducts } = require('../models/modelsProducts')

const servicesProducts = {
  getProducts: async () => {
    const products = await modelsProducts.getProducts();
    return products;
  },
  getProductsById: async (id) => {
    const product = await modelsProducts.getProductById(id);
    return product;
  },
  postProduct: async (body) => {
    await modelsProducts.postProduct(body);
  },
  putProduct: async (id, body) => {
    await modelsProducts.putProduct(id, body);
  },
  deleteProduct: async (id) => {
    await modelsProducts.deleteProduct(id);
  },
};

module.exports = { servicesProducts }