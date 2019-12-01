module.exports = (req, res) => {
    errorNotFound = new Error('404');
    errorNotFound.status = 404;
    throw errorNotFound;
}