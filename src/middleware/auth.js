var jwt = require("jsonwebtoken");

module.exports =  function (req, res, next) {
    var bearerToken="";
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
       bearerToken = bearer[1];

      if (!bearerToken) {
        return res.status(401).send({ message: 'Access denied ... No token provided' });
    }
  }
  else {
    res.sendStatus(403);
  }
    try {
        const decoded = jwt.verify(bearerToken, 'feedback');
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(400).send({ message: error.message });
    }
    }
  


