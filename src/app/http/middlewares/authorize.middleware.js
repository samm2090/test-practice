var jwt = require("jsonwebtoken");

//Validate JWT Default (not sure how we will do that it has to excute once and then excutes the rest)
// We could keep it non-dry simple for now and just call ValidateJWT everytime we will do authorization
//
// Available middlewares for authorization
// IsOwner 
    //(We don't want to call the db here but at the same time centralize logic but if the req is /bank-accounts/userId)
    //Then we could just match the userId in the url request with the id in the jwt
// Role based (Admin, Client, Investor)
// Authenticated
// Unauthenticated
// It could be just one middleware that gets passed all the above options 
// and then it validates the token and then runs a switch but I think Unauth should be seperate middleware
// and this solution we won't have to dry nothing


module.exports =  function (req, res, next) {
    var bearerToken="";
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      bearerToken = bearer[1];

       console.log(bearerHeader)
       
      if (!bearerHeader) {
        return res.status(401).send({ message: 'Access denied ... No token provided' });
    }
  }
  else {
    res.sendStatus(403);
  }
    try {console.log(bearerHeader)

        const decoded = jwt.verify(bearerHeader, 'feedback');
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(400).send({ message: error.message });
    }
    }
  


