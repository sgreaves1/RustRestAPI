const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Item', itemSchema);