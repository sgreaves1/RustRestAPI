const {BeforeAll, AfterAll, setDefaultTimeout} = require('cucumber');
const RustApi = require('../../app/app');

BeforeAll(function (callback) {
    callback();
});

AfterAll(function () {

});

setDefaultTimeout(10000);