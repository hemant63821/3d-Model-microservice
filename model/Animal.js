const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    obj: String,
    thumb: String
});

module.exports = mongoose.model('Animal', AnimalSchema);