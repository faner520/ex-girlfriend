var SendGrid = require('sendgrid').SendGrid;
var user = "vk.balakrishnan";
var key = "kannan88";
var sendgrid = new SendGrid(user, key);

exports.getEmail = function(req, res) {
    console.log(req.body.text + "|FROM|" + req.body.subject);
    res.statusCode = 200;
    res.send("Ok");
    sendgrid.send({
		  to: 'yourex@vkb.me',
		  from: 'vk.balakrishnan@gmail.com',
		  subject: 'Hello World',
		  text: 'My first email through SendGrid'
		}, function(success, message) {
		  if (!success) {
		    console.log(message);
		  }
		});
};