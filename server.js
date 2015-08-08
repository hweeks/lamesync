var express = require('express');
var app = express();

app.use(express.static('src'));

app.get('*', function(request, response, next) {
  response.sendfile('src/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});