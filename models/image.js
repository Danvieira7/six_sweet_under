const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var imageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Image', imageSchema);