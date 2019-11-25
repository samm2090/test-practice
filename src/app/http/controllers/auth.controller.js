const authService = require('../../business/services/auth.service');
const logger = require('../../http/startup/logger');

module.exports.createAuth = async (req, res, next) => {
  const { username, password, role} = req.body;

  try {
    await authService.createAuth(username, password, role);
    res.sendStatus(201);
  } catch(ex) {
    logger.error(ex.message)
    next(ex)
  }
  
}