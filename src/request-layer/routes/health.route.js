var router = require("express").Router();
const healthController = require('../controllers/health.controller');

router.all('/', healthController.healthCheck);

module.exports = router;
