var express = require('express');
var router = express.Router();
const HttpStatus = require('literal-http-status');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(HttpStatus['OK']).json({'route':'Index'});
});

module.exports = router;
