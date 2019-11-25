const config = require('config');
const logger = require('./logger');

try {
  config.get('jwt-secret')
}
catch (ex) {
  logger.error(ex.message);
  throw (ex)
}
