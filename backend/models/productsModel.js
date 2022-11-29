const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    }, 
    price: {
        type: Number
    },
    inStock: {
        type: Boolean
    }
});

module.exports = mongoose.model('Products', productSchema);