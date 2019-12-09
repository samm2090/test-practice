const authService = require('../../business-layer/services/auth.service');
const logger = require('winston');

module.exports.createAuth = async (req, res, next) => {
  const { loginId, password, role} = req.body;

  try {
    const authToken = await authService.createAuth(loginId, password, role);    
    res.status(201).send({ auth_token: authToken });
  } catch(err) {
    next(err)
  }
}