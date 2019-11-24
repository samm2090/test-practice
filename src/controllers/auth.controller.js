var express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, RoleEnum } = require("../models/user.model");
const userActions = require('../actions/user.actions');
const sharedRules = require('../rules/shared.rules');

const {
  adminLoginValidation,
  clientLoginValidation,
  investorLoginValidation,
  investorRegisterValidation,
  clientRegisterValidation
} = require("../validators/auth.validator");
var auth = require("../middleware/auth");
const Joi = require("joi");


//Accepts role, loginId (ruc/email/username), password
router.post("/", async (req, res) => {
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
});


router.post("/admin/login", async (req, res) => {
  try {
    const result = Joi.validate(req.body, adminLoginValidation);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    var user = await User.findOne({
      username: req.body.username.toLowerCase()
    });

    if (!user) return res.status(404).send("Invalid Username or Password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      return res.send({
        token: jwt.sign(
          {
            _id: user._id,
            email: user.email.toLowerCase(),
            name: user.firstName + user.fatherLastName + user.motherLastName,
            role: RoleEnum.Admin
          },
          "Secure code  to generate token"
        )
      });
    } else {
      return res.status(404).send("Invalid Username or Password.");
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/investor/login", async (req, res) => {
  try {
    const result = Joi.validate(req.body, investorLoginValidation);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    var user = await User.findOne({
      email: req.body.email.toLowerCase()
    });

    if (!user) return res.status(404).send("Invalid Email or Password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      return res.send({
        token: jwt.sign(
          {
            _id: user._id,
            email: user.email.toLowerCase(),
            name: user.firstName + user.fatherLastName + user.motherLastName,
            role: RoleEnum.Investor
          },
          "Secure code  to generate token"
        )
      });
    } else {
      return res.status(404).send("Invalid Email or Password.");
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/client/login", async (req, res) => {
  try {
    const result = Joi.validate(req.body, clientLoginValidation);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    var user = await User.findOne({
      ruc: req.body.ruc
    });

    if (!user) return res.status(404).send("Invalid Ruc or Password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      return res.send({
        token: jwt.sign(
          {
            _id: user._id,
            email: user.email.toLowerCase(),
            name: user.firstName + user.fatherLastName + user.motherLastName,
            role: RoleEnum.Client
          },
          "Secure code  to generate token"
        )
      });
    } else {
      return res.status(404).send("Invalid Ruc or Password.");
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/client/register", async (req, res) => {
  try {
    const result = Joi.validate(req.body, clientRegisterValidation);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    var user = await User.findOne({
      $or: [
        { email: req.body.email.toLowerCase(), role: RoleEnum.Client },
        { ruc: req.body.ruc, role: RoleEnum.Client }
      ]
    });
    if (user) {
      return res.status(400).send(`email or ruc is exist`);
    }
    req.body.role = RoleEnum.Client;
    user = await User.create(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.set({
      password: hashedPassword
    });
    user = await user.save();
    return res.send({
      token: jwt.sign(
        {
          _id: user._id,
          email: user.email.toLowerCase(),
          name: user.firstName + user.fatherLastName + user.motherLastName,
          role: user.role
        },
        "Secure code  to generate token"
      )
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/investor/register", async (req, res) => {
  try {
    const result = Joi.validate(req.body, investorRegisterValidation);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    var user = await User.findOne({
      $or: [
        { email: req.body.email.toLowerCase(), role: RoleEnum.Investor },
        { ruc: req.body.ruc, role: RoleEnum.Investor }
      ]
    });
    if (user) {
      return res.status(400).send(`email or ruc is exist`);
    }
    req.body.role = RoleEnum.Investor;
    user = await User.create(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.set({
      password: hashedPassword
    });
    user = await user.save();
    return res.send({
      token: jwt.sign(
        {
          _id: user._id,
          email: user.email.toLowerCase(),
          name: user.firstName + user.fatherLastName + user.motherLastName,
          role: user.role
        },
        "Secure code  to generate token"
      )
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;
