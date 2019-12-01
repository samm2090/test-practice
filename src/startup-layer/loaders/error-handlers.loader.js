module.exports = (app) => {
    app.use((req, res) => {
        errorNotFound = new Error('404');
        errorNotFound.status = 404;
        throw errorNotFound;
    });
    app.use((err, req, res, next) => {
        console.log('err', err.status)
        res.status(err.status || 500).send(err.message)
    });
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