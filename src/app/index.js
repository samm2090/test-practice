const app = require('express')();
const databaseLoader = require('./loaders/database.loader');
const loggerLoader = require('./loaders/logger.loader');
const expressLoader = require('./loaders/express.loader');
const routesLoader = require('./loaders/routes.loader');
//const errorHandlersLoader = require('./loaders/error-handlers.loader');

process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });
    
loggerLoader();
databaseLoader();
expressLoader(app);
//routesLoader();
//errorHandlersLoader(app);

module.exports = app;

