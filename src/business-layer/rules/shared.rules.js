//const logger = require('../../http/startup/logger');

module.exports.mustExist = (type, identifier, value) => {
    if(value) {
        logger.debug(`RULE PASSED: MUST EXIST : ${type} ${value[identifier]}`);
        return true;
    } else {
        const doesntExisitError = new Error(`RULE: MUST EXIST : ${type} doesn't exist`);
        doesntExisitError.status = 401;
        doesntExisitError.isOperational = true;
        throw doesntExisitError;
    }
    
};
module.exports.mustBeTrue = (value, type) => {
    if(value) {
        logger.debug(`RULE PASSED: MUST BE TRUE : ${type}`);
        return true;
    } else {
        const mustBeEqualError = new Error(`RULE: MUST BE TRUE : ${type} is not true`);
        mustBeEqualError.isOperational = true;
        mustBeEqualError.status = 401;
        throw mustBeEqualError;
    }    
};