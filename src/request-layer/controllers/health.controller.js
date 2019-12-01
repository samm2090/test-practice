module.exports.healthCheck = async (req, res, next) => {
    testError = new Error("TEST ERROR ----------")
    testError.status = 405;

    throw testError;
    res.status(200).send('OK')
}