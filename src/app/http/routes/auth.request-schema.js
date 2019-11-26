const Joi = require("joi");

module.exports.authSchema = Joi.object().keys({
  loginId: Joi.string()
  .required()
  .when('role', { is: 'admin', then: 
    Joi.string()
    .lowercase()
    .trim()
    .min(5)
    .max(245)
  })
  .when('role', { is: 'client', then: 
    Joi.string()
    .length(11)
    .regex(/^[-]/, { name: 'RUC must be positive', invert: true})
    .regex(/^\d*$/, 'RUC must contain only numbers')
  })
  .when('role', { is: 'investor', then: 
    Joi.string()
    .email()
    .trim()
    .lowercase()
    .min(5)
    .max(245)
  }),

  role: Joi.string()
  .lowercase()
  .trim()
  .only(['admin', 'client', 'investor'])
  .required(),

  password: Joi.string()
  .required()
  .min(8)
  .max(245)
});