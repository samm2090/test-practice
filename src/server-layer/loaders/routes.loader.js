//const extractToken = require('../http/middlewares/exctract-token.middleware');
const router = require('express').Router();
const healthRouter = require('../../request-layer/routes/health.route');
//var routeGuard = require('../middlewares/guards.middleware');

//var authRouter = require('../routes/auth.route');
//var bankRouter = require('../routes/bank.route');

//router.use('/auth', authRouter);
//router.use('/bank-accounts', routeGuard (['admin', 'owner', ]), bankRouter);
router.use('/health', healthRouter);

module.exports = (app) => {
    //app.use('/api', extractToken, require('../http/routes/index'));
    app.use('/api', router);
}