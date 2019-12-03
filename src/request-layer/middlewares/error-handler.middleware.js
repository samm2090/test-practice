const logger = require('winston');
const Errors = require('../../enums/error.enum');
const ErrorTypes = require('../../enums/errorType.enum');

module.exports.globalErrorMiddleware = (err, req, res, next) => {
        //this could be a utilit as well! but are we able to pass code as a param e['code']?
        let response = {};
        const default_success_status = 200;
        const default_error_status = 500;

        const error = Object.values(Errors).find(e => e.code === err.message)

        if(error) {
            if(error.type === ErrorTypes.OPERATIONAL) {
                response.status = default_success_status;
                response.internal_error = {
                    status: error.httpErrorStatus,
                    code: error.code,
                    message: error.message_en
                }
                logger.debug(
                    req,
                    { scope: 'error-handler', subscope: 'global', method: 'operational' }
            );

            } else if (error.type = ErrorTypes.APPLICATION) {
                response = {
                    status: error.httpErrorStatus,
                    code: error.code,
                    message: error.message_en
                }
                logger.error(
                    req,
                    { scope: 'error-handler', subscope: 'global', method: 'application' }
                );
            }


        } else {
            response.status = err.status || default_error_status;
            response.message = err.message;
            res.status(error? error.httpErrorStatus : default_error_status).send(error? error.message_en : err.message)

        }

        res.status(response.status).send(response);


        //IF PROD should return message_en else system_message
        //IF Operational should return success with internal error, else return err without wrapping in internal
        //IF PROD log error system_message
        //IF NOT PROD should log operational as debug
        //Or maybe a wrapper around the logger? LogOperational and pass the error and same for returning the error
        
/*
app.use((err, req, res, next) => {
    if(process.env.NODE_ENV === 'production') {
        const logId = 'to be implemented';
        logger.error(err.message, { scope: 'central error handler', subscope: '-', error_stack: err.stack });
        
        if(err.isOperational) {
            return res.status(200).send({
                internal_error: {
                    status: err.status || 500,
                    message: `500 - LogID " + ${logId}`
                }
            });
        } else {
            return res.status(err.status || 500).send("500 - LogID " + logId);
        }
    }
    logger.error(err.message, { scope: 'central error handler', subscope: '-' });

    if(err.isOperational) {
        res.status(200).send({
            internal_error: {
                status: err.status,
                stack: err.stack
            }
        });
    } else {
        res.status(err.status || 500).send(err.stack);
    }

});

*/
    
}

module.exports.notFoundErrorMiddleware = (req, res, next) => {
    next(new Error(Errors.RESOURCE_DOESNT_EXIST.code))
}