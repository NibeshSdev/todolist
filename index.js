'use strict';

var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose= require('mongoose'),
bodyParser = require('body-parser'),
jsonwebtoken = require('jsonwebtoken'),
User = require('./api/models/userModel'),
Task= require('./api/models/todoListModel');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tododb', {
  useMongoClient: true,
  /* other options */
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode){
      if(err) res.user = undefined;
      req.user = decode;
      next();
    });
  }else{
    res.user = undefined;
    next();
  }
});

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res){
  res.status(404).send({url:req.originalUrl + ' not found'});
});

app.listen(port);

console.log('App is listening to http://localhost:'+port);

module.exports = app;
