const userActions = require('../actions/user.actions');
const sharedRules = require('../rules/shared.rules');

module.exports.createAuth = async (loginId, password, role) => {
        let user, passwordMatching, loginIdType, authToken;

        loginIdType = userActions.determineLoginIdType(role);
        user = await userActions.findUserByLoginIdTypeAndRole(role, loginIdType, loginId);
        sharedRules.mustExist(user);
        passwordMatching = encryptionActions.verifyStringAgainstHash(password, user.password);
        sharedRules.mustBeTrue(passwordMatching);
        authToken = authActions.generateAuthToken(user.id, user.name, user.role);

        return authToken;
}