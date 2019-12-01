var express = require("express");
const router = express.Router();
const { createBankAccount } = require('../controllers/bank.controller');
const { authSchema } = require("./auth.request-schema");
const { validateBody } = require('../middlewares/request-validation.middleware');

/**
 * @api {get} /user/:id
 * @apiUse MySuccess
 * @apiVersion 4.0.0
 */
router.post(
  '/',
  //validateBody(authSchema),
  createBankAccount
);

module.exports = router
