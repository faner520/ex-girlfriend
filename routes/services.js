var SendGrid = require('sendgrid').SendGrid;
var user = "vk.balakrishnan";
var key = "kannan88";
var sendgrid = new SendGrid(user, key);
var client = require('twilio')('ACe77e74197147dbef14db8a9c545a21ac', '1d2cb94a954c8111f1613dec4b726dec');

exports.getEmail = function(req, res) {
    console.log(req.body.text + "|FROM|" + req.body.subject +req.body.from+req.body.to);
    res.statusCode = 200;
    res.send("Ok");
    var valid = req.body.to.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);;
    console.log(valid);
    if( valid == "ex@vkb.me"){
	    sendgrid.send({
			  to: valid,
			  from: 'yourex@vkb.me',
			  subject: 'You will recieve a call shortly',
			  text: 'Hey,\nI will call you as soon as possible. I know this is a template reply, but I will call.\nYour X.'
			}, function(success, message) {
			  if (!success) {
			    console.log(message);
			  }
			});

			client.makeCall({
				  to: req.body.subject, // Any number Twilio can call
			    from: '+14698444602', // A number you bought from Twilio and can use for outbound communication
			    url: 'http://demo.twilio.com/docs/voice.xml' // A URL that produces an XML document (TwiML) which contains instructions for the call

			}, function(err, responseData) {

			    //executed when the call has been initiated.
			    console.log(responseData.to); // outputs "+14506667788"

			});
	  }
};