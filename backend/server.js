require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const db = require('./config/db');

db();

const app = express();
app.use(cors());

// Link to API - Products Route //

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

app.listen(port, console.log(`listening on port: ${port}`));