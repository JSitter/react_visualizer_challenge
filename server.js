var path = require('path');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ', server.address().port);
});
