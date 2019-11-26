const authService = require('../../business/services/auth.service');
const logger = require('../../http/startup/logger');

module.exports.createAuth = async (req, res, next) => {
  const { loginId, password, role} = req.body;

  try {
    const authToken = await authService.createAuth(loginId, password, role);
    res
    .status(201)
    .send({ auth_token: authToken });

  } catch(err) {
    logger.warn(err.message, { scope: 'Auth.Controller', subscope: 'CreateAuth' });
    next(err)
  }

}