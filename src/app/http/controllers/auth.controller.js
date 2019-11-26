const authService = require('../../business/services/auth.service');
const logger = require('../../http/startup/logger');

module.exports.createAuth = async (req, res, next) => {
  const { loginId, password, role} = req.body;
  console.log("XXXXXXX", 1)

  try {
    const authToken = await authService.createAuth(loginId, password, role);
    console.log("XXXXXXX", authToken)
    
    res.status(201).send({ auth_token: authToken });
    console.log("XXXXXXX", 2)

  } catch(err) {
    console.log("XXXXXXX", 3)
    //console.log(err)
    logger.warn(err.message, { scope: 'Auth.Controller', subscope: 'CreateAuth' });
    next(err)
  }
  console.log("XXXXXXX", 4)
  console.log("--------------")

}