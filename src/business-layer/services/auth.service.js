const logger = require('winston');

const userActions = require('../actions/user.actions');
const sharedRules = require('../rules/shared.rules');
const encryptionActions = require('../actions/encryption.actions');
const tokenActions = require('../actions/token.actions');
const Errors = require('../../enums/error.enum');
const ErrorTypes = require('../../enums/errorType.enum');

module.exports.createAuth = async (loginId, password, role) => {
        logger.debug(
                `loginId: ${loginId}, password: data-private, role: ${role}`,
                { scope: 'services', subscope: 'auth', method: 'createAuth' }
        );

        const loginIdType = sharedRules.mustBeTrue(
                userActions.determineLoginIdType(role), 
                Errors.ROLE_DOESNT_EXIST.code);
        const user = sharedRules.mustBeTrue(
                await userActions.findUserByLoginIdTypeAndRole(role, loginIdType, loginId), 
                Errors.INVALID_CREDENTIALS.code);
        sharedRules.mustBeTrue(
                await await encryptionActions.stringAndHashMatch(password, user.password, 'password'), 
                Errors.INVALID_CREDENTIALS.code);
        
        /*
        sharedRules.mustExist('role', 'role', user);
        sharedRules.mustExist('user', 'name', user);
        const passwordMatching = await encryptionActions.stringAndHashMatch(password, user.password, 'password');
        sharedRules.mustBeTrue(passwordMatching, 'password');
        const authToken = tokenActions.generateSignedToken(user._id, user.name, user.role);

        return authToken;
        */
}