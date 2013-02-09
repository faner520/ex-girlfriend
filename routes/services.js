exports.getEmail = function(req, res) {
    console.log(req);
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