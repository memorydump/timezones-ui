'use strict';

var express        = require('express');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var fs             = require('fs');
var secret         = require('./config/secret');
var jwt            = require('express-jwt');

var app    = express();
var routes = {};

app.use(bodyParser.json());
app.use(cookieParser());

fs.readdirSync(__dirname + '/routes').forEach(function (route) {
  route         = route.replace('.js', '');
  routes[route] = require('./routes/' + route);
});

//Create a new user
app.post('/api/user/register', routes.user.register);

//Login
app.post('/api/user/signin', routes.user.signin);

//Logout
app.get('/api/user/logout', jwt({secret: secret.secretToken}), routes.user.logout);

//Get my zones
app.get('/api/zones', jwt({secret: secret.secretToken}), routes.zones.get);

//Save new zone
app.post('/api/zones', jwt({secret: secret.secretToken}), routes.zones.create);

//Edit zone
app.put('/api/zones', jwt({secret: secret.secretToken}), routes.zones.update);

//Delete zone
app.delete('/api/zones/:id', jwt({secret: secret.secretToken}), routes.zones.delete);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({errorCode: 0, errorMsg: 'You have been logout out'});
  }
});

var server = app.listen(3001, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('TimeZones API listening at http://%s:%s', host, port);

});


