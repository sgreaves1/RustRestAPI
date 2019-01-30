var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');

router.get('/:itemName/:attackItem', function (request, response) {
    response.status(HttpStatus['OK']).json({
        item: request.params.itemName,
        attackItem: request.params.attackItem,
        cost: 64
    });
});

module.exports = router;
