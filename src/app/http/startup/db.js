const logger = require('./logger');
const mongoose = require("mongoose");

mongoose.connect(
    //protocol://ip:port/uri << util formatUrl
    "mongodb://localhost:27017/finsmart-dev", 
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    function (err) {
        if(err) {
            logger.error(err, { scope: 'startup', subscope: 'datbase' });
        } else {
            logger.info("Database is ready", { scope: 'startup', subscope: 'datbase' });
        }

    }
);

module.exports = mongoose;
