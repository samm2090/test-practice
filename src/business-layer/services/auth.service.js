const logger = require('winston');

const userActions = require('../actions/user.actions');
const sharedRules = require('../../shared-layer/rules/shared.rules');
const encryptionActions = require('../actions/encryption.actions');
const tokenActions = require('../actions/token.actions');
const Errors = require('../../shared-layer/enums/error.enum');
const ErrorTypes = require('../../shared-layer/enums/errorType.enum');

module.exports.createAuth = async (loginId, password, role) => {
        logger.debug(
                `loginId: ${loginId}, password: data-private, role: ${role}`,
                { scope: 'services', subscope: 'auth', method: 'createAuth' }
        );

        const loginIdType = sharedRules.cantBeEmpty(
                userActions.determineLoginIdType(role), 
                Errors.ROLE_DOESNT_EXIST.code);
        const user = sharedRules.cantBeEmpty(
                await userActions.findUserByLoginIdTypeAndRole(role, loginIdType, loginId), 
                Errors.INVALID_CREDENTIALS.code);
        sharedRules.cantBeEmpty(
                await await encryptionActions.stringAndHashMatch(password, user.password, 'password'), 
                Errors.INVALID_CREDENTIALS.code);
        const authToken = tokenActions.generateSignedToken(user._id, user.name, user.role);

        return authToken;
}