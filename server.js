//server.js

//modules===========================
var express					=	require('express');
var app							=	express();
var bodyParser 			= require('body-parser');
var methodOverride 	= require('method-override');

//configuration =====================

//config file
var db = require('./config/db');

//set our port
var port= process.env.PORT || 8080;

//connect to our mongoDB Database
//uncomment after you enter the crendenials in config file
//mongoose.connect(db.url);

//get all data of the body (POST) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//parse applicattion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//override whot


