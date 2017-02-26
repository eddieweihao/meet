var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);

var port = process.env.PORT || 3000;
var app = express();
var dbUrl = 'mongodb://localhost/meet'

mongoose.connect(dbUrl)

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'meet',
    store: new mongoStore({
	    url: dbUrl,
	    collection: 'sessions'
  	})
}));

require('./config/routes')(app);

app.locals.moment = require('moment');
app.use(express.static(path.join(__dirname,'public')));

app.listen(port);
console.log('meet started on port' + port);