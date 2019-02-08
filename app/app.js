'use strict';

// Imports
const bodyParser = require('body-parser');
const express = require('express');
const httpServer = require('http');
const path = require('path');
const nconf = require('nconf');

// Routes
const indexRoute = require('./routes/index');
const durabilityRoute = require('./routes/durability');

// Env vars
nconf.argv({
    'MONGODB_URL': {
        alias: 'mongodb-url',
        describe: 'URL for mongo database',
        demand: false
    }
}).env().defaults({
    'MONGODB_URL' : 'mongodb://localhost:27017/rust'
});

let app = express();

if (app.get('env') === 'development') {
    console.log('Development Mode - will log requests.');
}

app.disable('etag');
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/durability', durabilityRoute);


app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));
app.use('/openapi', express.static(path.join(__dirname, 'swagger.yml')));
app.use('/metadata', express.static(path.join(__dirname, "..", 'service.metadata.json')));

app.use(function(error, request, response, next) {
    if (error) {
        response.status(500).send(error);
    }
});

let server = httpServer.createServer(app);
const appPort = '5010';

app.on('ready', () => {
    server.listen(appPort);
    console.log('The RustItemAPI has started.');
});

app.emit('ready');

module.exports = server;