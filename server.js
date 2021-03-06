var express     = require('express');
var services    = require('./routes/services');


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

app.post('/', services.doWork);


app.listen(7777, '127.0.0.1');

console.log('Listening on port 3000...');	

