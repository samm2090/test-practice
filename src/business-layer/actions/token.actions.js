const jsonwebtoken = require('jsonwebtoken');
const logger = require('winston');

module.exports.generateSignedToken = (userId, userName, userRole) => {
    logger.debug(`Generating a signed token`);
    const payload = {
        _id : userId,
        name: userName,
        userRole: userRole
    }
    const token = jsonwebtoken.sign(payload, process.env.SECURITY_SIGNING_KEY)

    logger.debug(`Signed token has been generated`);
    return token;
}