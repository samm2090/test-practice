var express = require('express');
var app = express();

var authRouter = require('../routes/auth.route');
var bankRouter = require('../routes/bank.route');

module.exports = function(app) {
  app.use('/api/auth', authRouter);
  app.use('/api/banks', bankRouter);
};
