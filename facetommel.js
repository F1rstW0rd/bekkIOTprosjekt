var login = require("facebook-chat-api");
var request = require('request');

String accessTOLKEN = "";

login({email: "", password: ""}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});
    api.setOptions({selfListen: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);

        switch(event.type) {
          case "message":

            if(typeof event.body === 'undefined' && typeof event.sticker === 'undefined') {

				// Set the headers
				var headers = {
				    'User-Agent':       'Super Agent/0.0.1',
				    'Content-Type':     'application/x-www-form-urlencoded'
				}

				// Configure the request
				var options = {
				    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/tommelopp?access_token=' + accessTOLKEN,
				    method: 'POST',
				    headers: headers,
				    form: {'tommelopp': 'xxx'}
				}

				// Start the request
				request(options, function (error, response, body) {
				    if (!error && response.statusCode == 200) {
				        // Print out the response body
				        console.log(body)
				    }
				})
            }

            api.markAsRead(event.threadID, function(err) {
              if(err) console.log(err);
            });
            break;
        }
    });
});
