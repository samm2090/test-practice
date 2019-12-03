const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = (app) => {
    app.use(helmet());
    app.use(cors({ origin: 'localhost'}));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    //morganBody(app);
}
