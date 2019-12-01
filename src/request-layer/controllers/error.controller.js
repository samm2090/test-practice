module.exports = (err, req, res, next) => {
    console.log('err', err.status)
    res.status(err.status || 500).send(err.message)
}