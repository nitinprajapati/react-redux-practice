var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var expressMongoDb = require('express-mongo-db');
var users = require('./routes/users');
  const path = require("path");
//const DB_SERVER = "'mongodb://localhost:27017/dating-app";
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
//app.use(expressMongoDb(DB_SERVER));

app.use('/v1', users);

app.use(express.static("./../build"));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = app;
