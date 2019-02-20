const Item = require('../../app/models/item');
const {BeforeAll, After, AfterAll, setDefaultTimeout} = require('cucumber');
const RustApi = require('../../app/app');
const db = require('../../app/helpers/db');

BeforeAll(async function () {
    db.connect();
    await clearDatabase();
});

AfterAll(async function () {
    await clearDatabase();
    db.close();
    RustApi.close();
});

After(function() {
    clearDatabase();

    this.resetWorld();

});

setDefaultTimeout(10000);

function clearDatabase() {
    try {
        return Item.deleteMany({});
    } catch (error) {
        console.log(`DB failed to clear. ${error}`);
    }
}