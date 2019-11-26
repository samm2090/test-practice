const userActions = require('../actions/user.actions');
const sharedRules = require('../rules/shared.rules');
const encryptionActions = require('../actions/encryption.actions');
const tokenActions = require('../actions/token.actions');

module.exports.createAuth = async (loginId, password, role) => {
        const loginIdType = userActions.determineLoginIdType(role);
        const user = await userActions.findUserByLoginIdTypeAndRole(role, loginIdType, loginId);
        sharedRules.mustExist('user', 'name', user);
        const passwordMatching = await encryptionActions.stringAndHashMatch(password, user.password, 'password');
        sharedRules.mustBeTrue(passwordMatching, 'password');
        const authToken = tokenActions.generateSignedToken(user._id, user.name, user.role);

        return authToken;
}