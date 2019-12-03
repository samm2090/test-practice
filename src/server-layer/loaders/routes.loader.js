//const extractToken = require('../http/middlewares/exctract-token.middleware');
const router = require('express').Router();
const healthRouter = require('../../request-layer/routes/health.route');
const authRouter = require('../../request-layer/routes/auth.route');

//var routeGuard = require('../middlewares/guards.middleware');

//
//var bankRouter = require('../routes/bank.route');

//router.use('/auth', authRouter);
//router.use('/bank-accounts', routeGuard (['admin', 'owner', ]), bankRouter);
router.use('/health', healthRouter);
router.use('/auth', authRouter);

module.exports = (app) => {
    //app.use('/api', extractToken, require('../http/routes/index'));
    app.use('/api', router);
}