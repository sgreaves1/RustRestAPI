const {When} = require('cucumber');

When(/I go to the (\/.*) endpoint$/, function(endpoint, callback) {
    this.getRequest(endpoint, callback);
});