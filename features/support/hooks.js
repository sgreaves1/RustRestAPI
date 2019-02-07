const Item = require('../../app/models/item');
const {BeforeAll, After, AfterAll, setDefaultTimeout} = require('cucumber');
const RustApi = require('../../app/app');
const db = require('../../app/helpers/db');

BeforeAll(function (callback) {
    db.connect();
    clearDatabase();
    callback();
});

AfterAll(function () {
    clearDatabase();
    db.close();
    RustApi.close();
});

After(async function() {
    await clearDatabase();

    this.resetWorld();
});

setDefaultTimeout(10000);

async function clearDatabase() {
    try {
        Item.remove();
    } catch (error) {
        console.log(`DB failed to clear. ${error}`);
    }
}