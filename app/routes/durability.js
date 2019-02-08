var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');
const db = require('../helpers/db');

router.param('itemName', function (request, response, next, itemName) {
    try {
        db.getItem(itemName, function (item) {
            request.item = item;
            next();
        });
    }
    catch(error) {
        console.log(error);
        next(error);
    }
});

router.get('/:itemName/', function (request, response) {
    response.status(HttpStatus['OK']).json();
});

router.get('/:itemName/:attackItem', function (request, response) {

    var item = request.item;

    var name = item.name;
    var attackItem = item.durability.find(x => x.name == 'explosivebullets');

    response.status(HttpStatus['OK']).json({name:name, attackItem: attackItem.name, cost:attackItem.cost});

});

router.use(function(error, request, response, next) {
    if (error) {
        response.status(500).send(error);
    }
});

module.exports = router;
