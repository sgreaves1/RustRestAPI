var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');
const db = require('../helpers/db');

router.get('/:itemName/', function (request, response) {

    var name = request.params.itemName;
    var item = db.getDurability(name);

    console.log(item.name);

    response.status(HttpStatus['OK']).json({
        item: item.name,
        durability:[
            { name: 'explosiveBullets',
              cost: 63 },
            { name: 'timedMine',
                cost: 1 }
        ]
    });
});

router.get('/:itemName/:attackItem', function (request, response) {
    response.status(HttpStatus['OK']).json({
        item: request.params.itemName,
        attackItem: request.params.attackItem,
        cost: 63
    });
});

module.exports = router;
