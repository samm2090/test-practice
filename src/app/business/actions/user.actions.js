const logger = require('../../http/startup/logger');
const { User } = require('../models/user.model');

module.exports.findUserByLoginIdTypeAndRole = async (role, loginIdType, loginId) => {
    logger.debug(`Looking up a/an \`${role}\` with \`${loginIdType}\` \`${loginId}\``);
    const user = await User.findOne({[loginIdType] : loginId, role: role});

    return user;
};

module.exports.determineLoginIdType = (role) => {
    logger.debug(`Determining loginId type for \`${ role }\` role`)
    let loginIdType;
console.log('-------role ', role)
    switch (role) {
        case 'admin':
            loginIdType = 'username';
            break;
        case 'client':
            loginIdType = 'ruc';
            break;
        case 'investor':
            loginIdType = 'email';
            break;
        default:
            throw new Error(`Invalid role: ${ role }`);
    }

    logger.debug(`LoginId Type is: \`${ loginIdType }\``);
    return loginIdType;
};