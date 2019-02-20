const mongoose = require('mongoose');

const durabilitySchema = mongoose.Schema({name: String, cost: Number});

const itemSchema = mongoose.Schema({
    name: { type: String, required: true },
    durability: [durabilitySchema]
});

module.exports = mongoose.model('Item', itemSchema);