const {setWorldConstructor} = require('cucumber');
const request = require('request');

class World {

    constructor() {
        this.headers = {};
        this.response = {};
    }

    addHeaderToRequest(name, headerValue) {
        this.headers[name] = headerValue;
    }

    resetWorld() {
        this.headers = {};
    }

    getRequest(resource, callback) {
        let self = this;
        let url = `http://localhost:5010${resource}`;
        request({
            url:url,
            headers: this.headers,
        }, function (error, response, body) {
            self.response = {statusCode: response.statusCode, body: body};
            callback();
        });
    }
}

setWorldConstructor(World);