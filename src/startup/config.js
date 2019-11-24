const config = require("config");
const logger = require('./logger');

module.exports = function() {
  if (!config.get("jwtPrivateKey")) {
    console.log("FATAL ERROR : jwtPrivateKey not set");
  }
};
