
var request = require('request');

String accessTOLKEN = "";
// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/okhand?access_token=' + accessTOLKEN,
    method: 'POST',
    headers: headers,
    form: {'okhand': 'xxx'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})
