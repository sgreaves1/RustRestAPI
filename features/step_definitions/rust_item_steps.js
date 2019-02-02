const expect = require('chai').expect;
const {Then} = require('cucumber');

Then(/the body should contain the cost$/, function (callback) {
    expect(JSON.parse(this.response.body).item).to.equal('sheetmetaldoor');
    expect(JSON.parse(this.response.body).attackItem).to.equal('explosivebullets');
    expect(JSON.parse(this.response.body).cost).to.equal(64);
    callback();
});

Then(/the body should contain a list of items that destroy the sheet metal door item$/, function (callback) {

});