const errorController = require('../../request-layer/controllers/error.controller');
const notFoundController = require('../../request-layer/controllers/notFound.controller');

module.exports = (app) => {
    app.use(notFoundController);
    app.use(errorController);
}

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