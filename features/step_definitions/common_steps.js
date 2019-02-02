const {Then} = require('cucumber'),
    HttpStatus = require('literal-http-status'),
    expect = require('chai').expect;

Then(/^it should return (.*)$/, function (responseType, callback) {
    expect(this.response.statusCode).to.equal(HttpStatus[responseType]);
    callback();
});