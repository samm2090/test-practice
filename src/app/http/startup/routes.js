var express = require('express');
const router = express.Router()

var routeGuard = require('../middlewares/guards.middleware');

var authRouter = require('../routes/auth.route');
var bankRouter = require('../routes/bank.route');

router.use('/auth', authRouter);
router.use('/bank-accounts', routeGuard (['admin', 'owner', ]), bankRouter);

module.exports = router;