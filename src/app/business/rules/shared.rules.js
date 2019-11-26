//MUST EXIST
module.exports.mustExist = (value) => {
    if(value) {
        return true;
    } else {
        let userDoesntExisitError = new Error('User doesn\'t exist');
        userDoesntExisitError.isOperational = true;
        throw userDoesntExisitError    
    }
    
};
module.exports.mustBeEqualToHash = (value) => {
    
};
module.exports.mustBeTrue = (value) => {
    
};