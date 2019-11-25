module.exports.createAuth = async (username, password, role) => {

    //new Promise(() => { throw new Error('exception!'); });
    
  try {
    let user, passwordMatching, authToken;

    user = await userActions.findUserByLoginId(req.body.role, req.body.loginId);
    sharedRules.mustExist(user);
    passwordMatching = userActions.compareHashPassword(req.body.password, user.password);
    sharedRules.mustBeTrue(passwordMatching);
    authToken = userActions.generateAuthToken(user.id, user.name, user.role);

    res.json(201, {
      message: "Authentication created",
      authToken: authToken
    });
  }
  catch(ex) {
    next(ex);
  }

}