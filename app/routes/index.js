var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');
const { name, version } = require('../../package.json');
const {connectionStatus} = require('../../app/helpers/connection-checker');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(HttpStatus['OK']).json({'route':'Index'});
});

router.get('/liveness', function (request, response) {
    response.status(HttpStatus['OK']).json({Alive: 'true'});
});

router.get('/readiness', function (request, response) {
    response.status(HttpStatus['OK']).json(connectionStatus());
});

router.get('/version', function (request, response) {
    response.status(HttpStatus['OK']).send({title: name, version : version});
});

module.exports = router;
