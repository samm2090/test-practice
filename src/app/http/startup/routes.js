var express = require('express');
var app = express();

var authRouter = require('../routes/auth.route');

module.exports = function(app) {
  app.use('/api/auth', authRouter);
};
