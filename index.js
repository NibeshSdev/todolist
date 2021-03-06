var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose= require('mongoose'),
Task= require('./models/todoListModel'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tododb', {
  useMongoClient: true,
  /* other options */
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./routes/todoListRoutes');
routes(app);

app.use(function(req, res){
  res.status(404).send({url:req.originalUrl + ' not found'});
});

app.listen(port);

console.log('App is listening to http://localhost:'+port);
