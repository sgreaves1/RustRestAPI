var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');
const db = require('../helpers/db');

router.get('/:itemName/', function (request, response) {

    db.getItem(request.params.itemName, function (item) {
        response.status(HttpStatus['OK']).json(item);
    });
});

router.get('/:itemName/:attackItem', function (request, response) {

    db.getItem(request.params.itemName, function (item) {
        var name = item.name;
        var attackItem = item.durability.find(x => x.name == 'explosivebullets');

        response.status(HttpStatus['OK']).json({name:name, attackItem: attackItem.name, cost:attackItem.cost});

    });
});

module.exports = router;
