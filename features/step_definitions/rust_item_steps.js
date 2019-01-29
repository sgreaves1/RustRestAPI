const expect = require('chai').expect;
const {Then} = require('cucumber');

Then(/the body should contain the cost$/, function (callback) {
    expect(JSON.parse(this.response.body).cost).to.equal(64);
    callback();
});