const app = require('express')();
const databaseLoader = require('./loaders/database.loader');
const loggerLoader = require('./loaders/logger.loader');
const expressLoader = require('./loaders/express.loader');
const routesLoader = require('./loaders/routes.loader');
const errorHandlersLoader = require('./loaders/error-handlers.loader');
const processHandler = require('./handlers/process.handler');

loggerLoader();
processHandler();
databaseLoader();
expressLoader(app);
routesLoader(app);
errorHandlersLoader(app);

module.exports = app;

