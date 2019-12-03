const mongoose = require("mongoose");
const logger = require('winston');

module.exports = () => {
    mongoose.connect(
        "mongodb://localhost:27017/finsmart-dev", 
        {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
        function (err) {
            if(err) {
                logger.error(err, { scope: 'loaders', subscope: 'database' });
            } else {
                logger.verbose("Database is ready", { scope: 'loaders', subscope: 'database' });
            }
        }
    );    
}