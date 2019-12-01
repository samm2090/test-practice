const authService = require('../../business/services/auth.service');
const logger = require('../../http/startup/logger');

module.exports.createBankAccount = async (req, res, next) => {

    res.status(201).send('Created')
}