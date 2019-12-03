const errorHandlersMiddleware = require('../../request-layer/middlewares/error-handler.middleware');

module.exports = (app) => {
    app.use(errorHandlersMiddleware.notFoundErrorMiddleware);
    app.use(errorHandlersMiddleware.globalErrorMiddleware);
}
