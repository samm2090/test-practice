const logger = require('../../http/startup/logger');
const { User } = require('../../data/models/user.model');

module.exports.findUserByLoginIdTypeAndRole = async (role, loginIdType, loginId) => {
    logger.debug(`Try to lookup user via ${loginIdType} : ${loginId} and role : ${role}`);
    const user = await User.findOne({[loginIdType] : loginId, role: role});
    logger.debug(`User ${user.name} found`);

    return user;
};

module.exports.determineLoginIdType = (role) => {
    logger.debug(`Determining loginId type for role: ${ role }`)
    let loginIdType;

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

    logger.debug(`LoginId Type is: ${ loginIdType }`);
    return loginIdType;
};