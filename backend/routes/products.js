const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');

router.get('/', async (req, res) => {
    try {
        const product = await Products.find()
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;