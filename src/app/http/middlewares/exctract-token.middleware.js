const jsonwebtoken = require("jsonwebtoken");
const config = require('config');
const logger = require('../startup/logger');

module.exports =  function (req, res, next) {
    try {
        const authorizationHeader = req.headers["authorization"];
        const bearerToken = authorizationHeader.split(" ")[1];
        const decoded = jsonwebtoken.verify(bearerToken, config.get('signing-secret'));
        res.locals.decoded_user = decoded;
        logger.debug('authToken found and valid')
        next();
    } catch(ex) {
        logger.debug('No auth token provided or auth token was invalid!')
        next();
    }
}