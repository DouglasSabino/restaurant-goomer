const { modelsProducts } = require('../models/modelsProducts')

const servicesProducts = {
  getProducts: async () => {
    const products = await modelsProducts.getProducts();
    return products;
  }
};

module.exports = { servicesProducts }