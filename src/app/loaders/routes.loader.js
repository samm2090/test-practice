const extractToken = require('../http/middlewares/exctract-token.middleware');

module.exports = (app) => {
    app.use('/api', extractToken, require('./src/app/http/startup/routes'));
}