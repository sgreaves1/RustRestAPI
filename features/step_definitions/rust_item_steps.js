const expect = require('chai').expect;
const {Then} = require('cucumber');

Then(/the body should contain the cost of (\d+)$/, function (cost, callback) {
    expect(JSON.parse(this.response.body).name).to.equal('sheetmetaldoor');
    expect(JSON.parse(this.response.body).attackItem).to.equal('explosivebullets');
    expect(JSON.parse(this.response.body).cost).to.equal(cost);
    callback();
});

Then(/the body should contain a list of items that destroy the sheet metal door item$/, function (callback) {
    expect(JSON.parse(this.response.body).name).to.equal('sheetmetaldoor');
    expect(JSON.parse(this.response.body).durability.length).to.equal(2);
    callback();
});