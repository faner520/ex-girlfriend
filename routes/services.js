var SendGrid = require('sendgrid').SendGrid;
/*
var user = "vk.balakrishnan";
var key = "kannan88";
*/
var user = "anand";
var key = "iceiceicecream";
var sendgrid = new SendGrid(user, key);
var client = require('twilio')('ACe77e74197147dbef14db8a9c545a21ac', '1d2cb94a954c8111f1613dec4b726dec');
var js2xmlparser = require("js2xmlparser");

exports.getEmail = function(req, res) {
    console.log(req.body.text + "|FROM|" + req.body.subject +req.body.from+req.body.to);
    res.statusCode = 200;
    res.send("Ok");
    var validto = req.body.to.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    var validfrom = req.body.from.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    console.log("To address: " + validto);
    console.log("From address: " + validfrom);
    
    if( validto == "ex@vkb.me"){
	    sendgrid.send({
			  to: validfrom,
			  from: 'yourex@vkb.me',
			  subject: 'You will recieve a call shortly',
			  text: 'Hey,\nI will call you as soon as possible. I know this is a template reply, but I will call.\nYour X.'
			}, function(success, message) {
			  if (!success) {
			    console.log(message);
			  }
			  else {

			  	client.makeCall({
						  to: req.body.subject, // Any number Twilio can call
					    from: '+14698444602', // A number you bought from Twilio and can use for outbound communication
					    url: 'http://vkb.me/ex/xml/?text='+req.body.text// A URL that produces an XML document (TwiML) which contains instructions for the call

					}, function(err, responseData) {

					    //executed when the call has been initiated.
					    console.log('calling' +responseData.to); // outputs "+14506667788"
					    if(err) {
					    	console.log(err.body);
					    }
					});
			  }
			});

			
	  }
};

exports.getXML = function(req,res){
	console.log(req.body);
	var data = {
			"Say": {
				"@" : {"voice" : "woman"},
				"#" : "Thank you for calling"
			}
	};
	res.send(js2xmlparser("Response", data));
};