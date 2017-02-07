var login = require("facebook-chat-api");
var request = require('request');
var emoji = require('node-emoji');

var accessTOLKEN = "";

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
            } else
            switch (emoji.which(event.body)) {
            	case "point_up_2":
            	case "point_down":
            	case "point_left":
            	case "point_right":
            		// Set the headers
					var headers = {
					    'User-Agent':       'Super Agent/0.0.1',
					    'Content-Type':     'application/x-www-form-urlencoded'
					}

					// Configure the request
					var options = {
					    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/pointhand?access_token=' + accessTOLKEN,
					    method: 'POST',
					    headers: headers,
					    form: {'pointhand': 'xxx'}
					}

					// Start the request
					request(options, function (error, response, body) {
					    if (!error && response.statusCode == 200) {
					        // Print out the response body
					        console.log(body)
					    }
					})
            	break;

            	case "facepunch":
            	case "fist":
            	case "punch":
            		// Set the headers
					var headers = {
					    'User-Agent':       'Super Agent/0.0.1',
					    'Content-Type':     'application/x-www-form-urlencoded'
					}

					// Configure the request
					var options = {
					    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/fisthand?access_token=' + accessTOLKEN,
					    method: 'POST',
					    headers: headers,
					    form: {'fisthand': 'xxx'}
					}

					// Start the request
					request(options, function (error, response, body) {
					    if (!error && response.statusCode == 200) {
					        // Print out the response body
					        console.log(body)
					    }
					})
            	break;
            	
            	case "raised_hand":
            	case "raised_hand_with_fingers_splayed":
            	case "hand":
            	case "wave":
            		// Set the headers
					var headers = {
					    'User-Agent':       'Super Agent/0.0.1',
					    'Content-Type':     'application/x-www-form-urlencoded'
					}

					// Configure the request
					var options = {
					    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/wavehand?access_token=' + accessTOLKEN,
					    method: 'POST',
					    headers: headers,
					    form: {'wavehand': 'xxx'}
					}

					// Start the request
					request(options, function (error, response, body) {
					    if (!error && response.statusCode == 200) {
					        // Print out the response body
					        console.log(body)
					    }
					})
            	break;
            	
            	case "ok_hand":
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
            	break;

            	case "the_horns":
            	case "sign_of_the_horns":

            	break;
            		// Set the headers
					var headers = {
					    'User-Agent':       'Super Agent/0.0.1',
					    'Content-Type':     'application/x-www-form-urlencoded'
					}

					// Configure the request
					var options = {
					    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/devilhand?access_token=' + accessTOLKEN,
					    method: 'POST',
					    headers: headers,
					    form: {'devilhand': 'xxx'}
					}

					// Start the request
					request(options, function (error, response, body) {
					    if (!error && response.statusCode == 200) {
					        // Print out the response body
					        console.log(body)
					    }
					})
            	case "middle_finger":
            	case "reversed_hand_with_middle_finger_extended":
            		// Set the headers
					var headers = {
					    'User-Agent':       'Super Agent/0.0.1',
					    'Content-Type':     'application/x-www-form-urlencoded'
					}

					// Configure the request
					var options = {
					    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/fuckhand?access_token=' + accessTOLKEN,
					    method: 'POST',
					    headers: headers,
					    form: {'fuckhand': 'xxx'}
					}

					// Start the request
					request(options, function (error, response, body) {
					    if (!error && response.statusCode == 200) {
					        // Print out the response body
					        console.log(body)
					    }
					})
            	break;

            	case "v":
            		// Set the headers
					var headers = {
					    'User-Agent':       'Super Agent/0.0.1',
					    'Content-Type':     'application/x-www-form-urlencoded'
					}

					// Configure the request
					var options = {
					    url: 'https://api.particle.io/v1/devices/2d001a000247343138333038/peacehand?access_token=' + accessTOLKEN,
					    method: 'POST',
					    headers: headers,
					    form: {'peacehand': 'xxx'}
					}

					// Start the request
					request(options, function (error, response, body) {
					    if (!error && response.statusCode == 200) {
					        // Print out the response body
					        console.log(body)
					    }
					})
            	break;
            	
            	case "-1":
            	case "thumbsdown": //kan ikke snu håndled
            	case "+1":
            	case "thumbsup":
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
            	break;
            }

            api.markAsRead(event.threadID, function(err) {
              if(err) console.log(err);
            });
            break; 
        }
    });
});
