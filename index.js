require('./src/app/http/startup/config');
const logger = require('./src/app/http/startup/logger');
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const morganBody = require('morgan-body');

startServer();

async function startServer() {

    process.on('unhandledRejection', error => {
        // Prints "unhandledRejection woops!"
        console.log('unhandledRejection', error.message);
        
      });
      

    app.use(helmet());
    app.use(cors({ origin: 'localhost'}));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    //app.use(morgan('combined'));
    morganBody(app);

    require('./src/app/http/startup/db');
    require('./src/app/http/startup/routes')(app);
    
    app.use((req, res) => {
        res.status(404).send('404');
    });
    app.use((err, req, res, next) => {
        if(process.env.NODE_ENV === 'production') {
            const logId = 'to be implemented';
            logger.error(err.message, { scope: 'central error handler', subscope: '-', error_stack: err.stack });
            
            return res.status(500).send("500 - LogID " + logId);
        }
        logger.error(err.message, { scope: 'central error handler', subscope: '-' });
        res.status(500).send(err.stack);
    });

    const port = process.env.PORT || 83;
    app.listen(port, ()=>{
        logger.info("API is ready", { scope: 'startup', subscope: 'server' })
    });
}

module.exports = app;