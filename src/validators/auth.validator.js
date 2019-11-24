const Joi = require("joi");

const adminLoginValidation = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .min(6)
});

const investorLoginValidation = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
});

const clientLoginValidation = Joi.object().keys({
  ruc: Joi.string()
    .required()
    .min(11)
    .max(11),
  password: Joi.string()
    .required()
    .min(6)
});

const investorRegisterValidation = Joi.object().keys({
  firstName: Joi.string().required(),
  fatherLastName: Joi.string().required(),
  motherLastName: Joi.string().required(),
  gender: Joi.valid(["female", "male"]).required(),
  email: Joi.string()
    .email()
    .required(),
  mobileNumber: Joi.string().required(),
  ruc: Joi.string().min(11).max(11).required(),
  businessName: Joi.string().required(),
  department: Joi.string().required(),
  password: Joi.string()
    .min(6)
    .max(15)
    .required(),
  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({ language: { any: { allowOnly: "must match password" } } })
});

const clientRegisterValidation = Joi.object().keys({
  firstName: Joi.string().required(),
  fatherLastName: Joi.string().required(),
  motherLastName: Joi.string().required(),
  gender: Joi.valid(["female", "male"]).required(),
  email: Joi.string()
    .email()
    .required(),
  mobileNumber: Joi.string().required(),
  ruc: Joi.string().min(11).max(11).required(),
  businessName: Joi.string().required(),
  department: Joi.string().required(),
  password: Joi.string()
    .min(6)
    .max(15)
    .required(),
  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({ language: { any: { allowOnly: "must match password" } } })
});

module.exports = {
  adminLoginValidation,
  investorLoginValidation,
  clientLoginValidation,
  investorRegisterValidation,
  clientRegisterValidation
};
