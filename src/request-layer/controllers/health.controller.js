module.exports.healthCheck = async (req, res, next) => {
    res.status(200).send('OK')
}