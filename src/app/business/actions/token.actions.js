const jsonwebtoken = require('jsonwebtoken');
const logger = require('../../http/startup/logger');
const config = require('config');

module.exports.generateSignedToken = (userId, userName, userRole) => {
    logger.debug(`Generating a signed token`);
    const payload = {
        _id : userId,
        name: userName,
        userRole: userRole
    }
    const token = jsonwebtoken.sign(payload, config.get('signing-secret'))

    logger.debug(`Signed token has been generated`);
    return token;
}