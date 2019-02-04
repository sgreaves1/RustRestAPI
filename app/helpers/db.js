const mongoose = require('mongoose');
const Item = require('../models/item');

function connect() {
    mongoose.connect('mongodb://m001-student:' + process.env.MONGO_ATLAS_PW + '@sandbox-shard-00-00-uwspm.mongodb.net:27017,sandbox-shard-00-01-uwspm.mongodb.net:27017,sandbox-shard-00-02-uwspm.mongodb.net:27017/test?ssl=true&replicaSet=Sandbox-shard-0&authSource=admin&retryWrites=true');
};

function getDurability(itemToFind) {

    connect();

    return Item.find({name: itemToFind});
}

module.exports = {getDurability}