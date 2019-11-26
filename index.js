//ENTRY POINT self-invoking async function

//Init Utils (config, logger)
//Init App
//Maybe DB?

require('./src/app/http/startup/config');
const logger = require('./src/app/http/startup/logger');
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

startServer();

async function startServer() {
    process.on('unhandledRejection', error => {
        // Prints "unhandledRejection woops!"
        console.log(`unhandledRejection (${error.code})`, error.message);
        console.log(error);
        
    });

    app.use(helmet());
    app.use(cors({ origin: 'localhost'}));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    //app.use(morgan('combined'));
    //morganBody(app);

    require('./src/app/http/startup/db');
    require('./src/app/http/startup/routes')(app);
    
    app.use((req, res) => {
        res.status(404).send('404');
    });
    app.use((err, req, res, next) => {
        if(process.env.NODE_ENV === 'production') {
            const logId = 'to be implemented';
            logger.error(err.message, { scope: 'central error handler', subscope: '-', error_stack: err.stack });
            
            if(err.isOperational) {
                return res.status(200).send({
                    internal_error: {
                        status: err.status || 500,
                        message: `500 - LogID " + ${logId}`
                    }
                });
            } else {
                return res.status(err.status || 500).send("500 - LogID " + logId);
            }
        }
        logger.error(err.message, { scope: 'central error handler', subscope: '-' });

        if(err.isOperational) {
            res.status(200).send({
                internal_error: {
                    status: err.status,
                    stack: err.stack
                }
            });
        } else {
            res.status(err.status || 500).send(err.stack);
        }

    });

    const port = process.env.PORT || 83;
    app.listen(port, ()=>{
        /*--------------------------------------*/
        /* let output = '';
        const originalStdoutWrite = process.stdout.write.bind(process.stdout);
        process.stdout.write = (chunk, encoding, callback) => {
          if (typeof chunk === 'string') {
            output += chunk;
          }
          return originalStdoutWrite(chunk, encoding, callback);
        };*/
        /*--------------------------------------*/
        
        logger.info("API is ready", { scope: 'startup', subscope: 'server' })
        
        /*--------------------------------------*/
        /*
        process.stdout.write = originalStdoutWrite;
        console.log('GOTCHA!', output);
        */
        /*--------------------------------------*/
    
    });
}

module.exports = app;