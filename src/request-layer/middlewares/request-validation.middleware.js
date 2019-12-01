const Joi = require("joi");

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        Joi.validate(req.body, schema, { convert: false }, (err) => {
            if(err) {
                next(new Error(err.details[0].message));
            } else {
                next();
            }
        });
    }
}