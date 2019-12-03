const logger = require('winston');

module.exports = () => {
    process
    .on('unhandledRejection', (reason, p) => {
        logger.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        logger.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });
}