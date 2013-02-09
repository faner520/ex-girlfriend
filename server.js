var express     = require('express'),
    services    = require('./routes/services'),

var log4js = require('log4js');
//log the logger messages to a file, and the console ones as well.
log4js.configure({
    appenders: [
        {
            type: "file",
            filename: "console.log",
            category: [ 'console' ]
        },
        {
            type: "console"
        }
    ],
    replaceConsole: true
});


var app = express();
	
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.post('/', services.getEmail);


//app.put('/msgq/:id', services.updateservices);
//app.delete('/msgq/:id', services.deleteservices);



app.listen(3000);

console.log('Listening on port 3000...');	

setInterval(worker.checkQ,5000);