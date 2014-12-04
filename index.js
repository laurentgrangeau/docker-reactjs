var express = require('express');

// Constants
var PORT = 12345;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world from Bytel to the beat yo !\n');
});

app.listen(PORT);