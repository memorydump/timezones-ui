var express = require('express');
var fs      = require('fs');


var app = express();


fs.readdirSync('./routes').forEach(function (route) {
  if (route.indexOf('main') === -1) {
    var route = require('./routes/' + route.replace('.js', ''));
    app.use(route);
  }
});

app.use(express.static(__dirname + '/public'));
app.use(require('./routes/main.js'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example appp listening at http://%s:%s', host, port)

})


