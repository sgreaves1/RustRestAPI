const {BeforeAll, AfterAll, setDefaultTimeout} = require('cucumber');
const RustApi = require('../../app/app');
const db = require('../../app/helpers/db');

BeforeAll(function (callback) {
    callback();
});

AfterAll(function () {
    db.close();
    RustApi.close();
});

setDefaultTimeout(10000);