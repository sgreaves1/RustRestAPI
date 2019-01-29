const expect = require('chai').expect;
const {Then} = require('cucumber');
const {connectionStatus} = require('../../app/helpers/connection-checker');
const {name, version} = require('../../package.json');

Then(/the body should say Alive$/, function (callback) {
   expect(JSON.parse(this.response.body).Alive).to.equal('true');
   callback();
});

Then(/the body should display connection status$/, function (callback) {
    expect(this.response.body).to.equal(JSON.stringify(connectionStatus()));
    callback();
});

Then(/the text should say the version info$/, function (callback) {
   expect(this.response.body).to.equal(`{"title":"${name}","version":"${version}"}`);
   callback();
});

Then(/it should have the correct title$/, function (callback) {
    expect(this.response.body.length > 0 && this.response.body.indexOf('title: Rust Item API') !== -1).to.equal(true);
    callback();
});

Then(/the body should not be empty$/, function (callback) {
    expect(this.response.body).to.not.be.empty;
    callback();
});