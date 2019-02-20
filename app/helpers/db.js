const mongoose = require('mongoose');
const Item = require('../models/item');
const nconf = require('nconf');

function connect() {
    mongoose.connect(nconf.get('MONGODB_URL'), {useNewUrlParser: true});
};

function close() {
    mongoose.connection.close();
};

function getItem(itemToFind, callback) {
    Item.findOne({name: itemToFind})
        .exec()
        .then(doc => {
            callback(doc);
        })
        .catch(err => console.log(err));
};


module.exports = {getItem, close, connect}