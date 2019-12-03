const Errors = require('../../enums/error.enum');
const ErrorTypes = require('../../enums/errorType.enum');

module.exports = (err, req, res, next) => {
    //this could be a utilit as well! but are we able to pass code as a param e['code']?
    const error = Object.values(Errors).find(e => e.code === err.message)

    //IF PROD should return message_en else system_message
    //IF Operational should return success with internal error, else return err without wrapping in internal
    //IF PROD log error system_message
    //IF NOT PROD should log operational as debug
    //Or maybe a wrapper around the logger? LogOperational and pass the error and same for returning the error
    
    res.status(error? error.httpErrorStatus : 500).send(error? error.message_en : err.message)
}