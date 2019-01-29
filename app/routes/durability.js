var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');

router.get('/', function (request, response) {
    response.status(HttpStatus['OK']).json({cost: 64});
});

module.exports = router;
