var express = require("express");
const router = express.Router();
const { createAuth } = require('../controllers/auth.controller');
const { authSchema } = require("./auth.request-schema");
const { validateBody } = require('../middlewares/request-validation.middleware');

/**
 * @api {get} /user/:id
 * @apiUse MySuccess
 * @apiVersion 4.0.0
 */
router.post(
  '/',
  validateBody(authSchema),
  createAuth
);

module.exports = router
