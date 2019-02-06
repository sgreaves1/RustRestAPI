const {Given} = require('cucumber');
const Item = require('../../app/models/item');

Given(/^The database has (\d+) durability fields for the sheet metal door$/, function (count) {

        let itemToStore = new Item({
            name: 'sheetmetaldoor',
            durability: [{name:'explosivebullets', cost: 63}, {name:'timedexplosivecharge', cost:1}]
        });


        itemToStore.save();
    });