const mongoose = require('mongoose');

const durabilitySchema = mongoose.Schema({name: String, cost: Number});

const itemSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    durability: [durabilitySchema]
});

module.exports = mongoose.model('Item', itemSchema);