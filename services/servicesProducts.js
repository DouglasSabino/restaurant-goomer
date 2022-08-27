const { modelsProducts } = require('../models/modelsProducts')

const servicesProducts = {
  getProducts: async () => {
    const products = await modelsProducts.getProducts();
    return products;
  },
  postProduct: async (body) => {
    await modelsProducts.postProduct(body);
  },
};

module.exports = { servicesProducts }