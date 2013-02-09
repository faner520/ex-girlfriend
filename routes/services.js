var SendGrid = require('sendgrid').SendGrid;
var user = "vk.balakrishnan";
var key = "kannan88";
var sendgrid = new SendGrid(user, key);

exports.getEmail = function(req, res) {
    console.log(req.body.text + "|FROM|" + req.body.subject +req.body.from+req.body.to);
    res.statusCode = 200;
    res.send("Ok");
    if(req.body.to == "ex@vkb.me"){
	    sendgrid.send({
			  to: req.body.from,
			  from: 'yourex@vkb.me',
			  subject: 'You will recieve a call shortly',
			  text: 'Hey,\nI will call you as soon as possible. I know this is a template reply, but I will call.\nYour X.'
			}, function(success, message) {
			  if (!success) {
			    console.log(message);
			  }
			});
	  }
};