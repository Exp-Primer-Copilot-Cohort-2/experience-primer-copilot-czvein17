// create web server with express
// http://expressjs.com/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create a route
app.post('/comments', function(req, res) {
  // get the comments from the request
  var comments = req.body.comments;
  // send the comments back to the client
  res.send(comments);
});

// start the server
var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

