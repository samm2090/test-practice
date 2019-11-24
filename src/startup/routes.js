var express = require('express');
var app = express();

var authController = require('../controllers/auth.controller');
//var anonymousController = require('')
module.exports = function(app) {

//  app.use('/api/anonymous', anonymousController);



  app.use(
    '/api/auth',
    authController
  );
};
