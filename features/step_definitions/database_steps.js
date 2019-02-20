const {Given} = require('cucumber');
const Item = require('../../app/models/item');

Given(/^The database has (.+) durability field with a cost of (\d+) for the (.+) item$/, async function(attackItemName, attackCost, item) {

    let query = { name: item};
    let durabilityElement = {name: attackItemName, cost: attackCost};
    let update = { $push: { durability: durabilityElement}}
    let options = {multi:true, upsert: true, new: true, setDefaultsOnInsert: true, useFindAndModify: false};

    return await Item.findOneAndUpdate(query, update, options, function(err, num) {
        console.log('here');
    });
});