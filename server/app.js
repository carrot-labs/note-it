/** Requires the modules */
var bodyParser     = require('body-parser');
var errorHandler   = require('errorhandler');
var express        = require('express');
var http           = require('http');
var methodOverride = require('method-override');
var lodash         = require('lodash');
var morgan         = require('morgan');
var path           = require('path');


/** Creates and exports the express app */
var app = module.exports = express();

/** Configures defaults */
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');

/** Configures middlewares */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../public')));

/** Configures environment */
var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  app.use(errorHandler());
}

app.get('/', function(req, res) {
  res.send('hey');
});

/** Exports the app */
module.exports = app;