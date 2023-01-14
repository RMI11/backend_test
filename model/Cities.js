const mongoose = require('mongoose');

const CitiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: String
});

module.exports = mongoose.model('Cities', CitiesSchema);