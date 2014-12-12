'use strict';

var express   = require('express');
var httpProxy = require('http-proxy');

var router  = express.Router();
var app     = express();

var proxy   = new httpProxy.createProxyServer({});

proxy.on('error', function(e) {
  console.dir(e);
});

if (process.env.USE_MINIFIED) {
  app.use(express.static(__dirname + '/build/client'));
} else {
  app.use(express.static(__dirname + '/client'));
}

router.all('/api/*', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:3001' });
});

router.get('/*', function(req, res) {
  if (process.env.USE_MINIFIED) {
    res.sendFile(__dirname + '/build/client/layouts/main.html');
  } else {
    res.sendFile(__dirname + '/client/layouts/main.html');
  }
});

app.use(router);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('TimeZones web server listening at http://%s:%s', host, port);

});


