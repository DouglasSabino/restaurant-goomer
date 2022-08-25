const { productsRouter } = require('../routers/productsRouter');
const { restaurantsRouter } = require('../routers/restaurantsRouter')
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/products', productsRouter);
app.use('/restaurants', restaurantsRouter);

app.get('/', (_req, res) => {
    res.status(200).json('api no ar');
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

